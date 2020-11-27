import {gql} from "@apollo/client";
import React from "react";
import {Helmet} from "react-helmet";
import type {GetStakedropDataQuery} from "../generated/graphql";
import {useParams} from "react-router";
import {InfoTooltip} from "../components/InfoTooltip";
import {Table} from "../components/Table";
import {useQueryWithTimeTravel} from "../TimeTravel";
import {dateTimeFrom, formatSeconds, FormattedTime} from "../components/FormattedTime";
import {keepFormatter} from "../components/KeepValue";
import {KeepTag} from "../components/CurrencyTags";
import { DateTime } from "luxon";
import {HeaderBoxes} from "../components/HeaderBoxes";
import {Box} from "../components/Box";
import {CoinPrices, useCoinPrices} from "../utils/useCoinPrices";
import {DollarValue} from "../components/DollarValue";
import {css} from "emotion";
import {SkeletonWord} from "../components/SkeletonLoader";

const STAKEDROP_QUERY = gql`
    query GetStakedropData($block: Block_height) {
        stakedropIntervals {
            id,
            number,
            beaconIntervalStart,
            beaconIntervalEnd,
            ecdsaIntervalStart,
            ecdsaIntervalEnd,
            keepCount,
            beaconGroupCount,
            allocationECDSA,
            allocationBeacon,
        },
        stats: statsRecord(id: "current") {
            totalStakedropECDSARewards,
            unallocatedStakedropECDSARewards,
            totalStakedropBeaconRewards,
            unallocatedStakedropBeaconRewards,
            dispensedStakedropBeaconRewards,
            dispensedStakedropECDSARewards
        }
    }
`;


export function Stakedrop() {
  const {id} = useParams<any>();
  const { loading, error, data } = useQueryWithTimeTravel<GetStakedropDataQuery>(STAKEDROP_QUERY, {variables: {id}});
  const coinPrices = useCoinPrices();

  if (error) return <p>Error :( {""+ error}</p>;

  const intervals = [...(data?.stakedropIntervals ?? [])];
  intervals.reverse();

  const keepTotal = data?.stats ? (parseInt(data!.stats!.totalStakedropECDSARewards) + parseInt(data!.stats!.totalStakedropBeaconRewards)) / (10**18) : null;
  const keepDispensed =  data?.stats ? (parseInt(data!.stats!.dispensedStakedropBeaconRewards) + parseInt(data!.stats!.dispensedStakedropECDSARewards)) / (10**18) : null;

  return  <div style={{padding: '20px', maxWidth: '1000px', margin: '0 auto'}}>
    <Helmet>
      <title>Stakedrop</title>
    </Helmet>
    <h1 style={{marginTop: 0, fontSize: 45, fontFamily: "Roboto Slab", color: '#4e8778', fontWeight: 900, borderBottom: '2px dotted #4e8778', textAlign: 'center'}}>
      The Stakedrop
    </h1>

    <div style={{margin: '0 auto 60px'}}>
      <HeaderBoxes style={{justifyContent: 'center'}}>
        <Box label={"total KEEP rewards"} tooltip={"Total rewards to be distributed to node  operators over the 2-year stakedrop period."}>
          {keepTotal !== null ? <>
            <strong>{keepFormatter.format(keepTotal)}</strong>
            <KeepAsDollarValue coinPrices={coinPrices} keep={keepTotal} style={{display: 'block'}} />
           </> : <SkeletonWord />}
        </Box>
        <Box label={"KEEP dispensed so far"} tooltip={"Total rewards distributed in past stakedrop intervals."}>
          {keepDispensed !== null ? <>
            <strong>{keepFormatter.format(keepDispensed)}</strong>
            <KeepAsDollarValue coinPrices={coinPrices} keep={keepDispensed} style={{display: 'block'}} />
          </> : <SkeletonWord />}
        </Box>
        {/*<Box label={"remaining rewards"}>*/}
        {/*  {keepFormatter.format((parseInt(data!.stats!.unallocatedStakedropECDSARewards) + parseInt(data!.stats!.unallocatedStakedropBeaconRewards)) / (10**18))} KEEP*/}
        {/*</Box>*/}
      </HeaderBoxes>
    </div>

    {intervals.map((interval) => {
      const totalKeep = (parseInt(interval.allocationECDSA) + parseInt(interval.allocationBeacon ?? 0))
      const perKeepPerOperator = interval.allocationECDSA / Math.max(interval.keepCount, 1000) / 3;
      const perBeaconGroup = interval.allocationBeacon ? interval.allocationBeacon / interval.beaconGroupCount / 64 : null;

      const ecdsaEndDate = dateTimeFrom(interval.ecdsaIntervalEnd);
      const secondsToEcdsaEnd = ecdsaEndDate.diffNow('seconds').seconds;

      const beaconEndDate = dateTimeFrom(interval.beaconIntervalEnd);
      const secondsToBeaconEnd = beaconEndDate.diffNow('seconds').seconds;

      const bothDone = secondsToBeaconEnd < 0 && secondsToEcdsaEnd < 0;

      return <><div style={{margin: '30px 0 30px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
        <div>
          <div style={{fontFamily: "Roboto Slab", color: '#4e8778', fontWeight: 900, fontSize: 60, lineHeight: 1}}>
            {interval.number}
            <span style={{fontSize: '0.4em'}}>
              {interval.number == 2 ? 'st' : interval.number == 2 ? 'nd' : interval.number == 3 ? 'rd' : 'th'}
            </span>
          </div>
          <div style={{color: '#4e8778'}}>Interval</div>
        </div>

        <div style={{marginLeft: '45px', display: 'flex', flexDirection: 'column', flex: 1}}>
          <HeaderBoxes>
            <Box label={"KEEP to be distributed"} style={{flex: 3}}>
              {keepFormatter.format(totalKeep)}
              <KeepAsDollarValue coinPrices={coinPrices}  keep={totalKeep} />
            </Box>

            {interval.number >= 3 ? <>
              <div style={{color: 'gray'}}>The way rewards are distributed is changing in this interval, and the details are still being finalized.</div>
            </> : <>
              <Box label={"KEEP per deposit"}  style={{flex: 2}}
                   tooltip={`Reward an operator earns for each deposit they are collateralizing in the interval. For interval ${interval.number} this is based on ${interval.keepCount} keeps created.`}>
                {keepFormatter.format(perKeepPerOperator)}
                <KeepAsDollarValue coinPrices={coinPrices}  keep={perKeepPerOperator} />
              </Box>

              <Box label={"KEEP per beacon group"}  style={{flex: 2}}
                   tooltip={`Reward an operator earns for each beacon group they are participating in. For interval ${interval.number} this is based on ${interval.beaconGroupCount} groups.`}>
                {perBeaconGroup === null ? <>-</> : <>
                  {keepFormatter.format(perBeaconGroup)}
                  <KeepAsDollarValue coinPrices={coinPrices}  keep={perBeaconGroup} />
                </>}
              </Box>
            </>}
          </HeaderBoxes>

          <div style={{marginTop: '16px', fontSize: '14px'}}>
            {bothDone
                ? <>
                  Ran from <FormattedTime format={"simple"} time={interval.ecdsaIntervalStart}/> to <FormattedTime
                    format={"simple"} time={interval.ecdsaIntervalEnd} /> (for the beacon rewards <FormattedTime format={"simple"} time={interval.beaconIntervalStart}/> to <FormattedTime
                    format={"simple"} time={interval.beaconIntervalEnd} />).
                </>
                : <>
                  {secondsToEcdsaEnd > 0
                      ? <>
                        Began <FormattedTime time={interval.ecdsaIntervalStart} format={"simple"} /> and there are {" "}
                        <span title={ecdsaEndDate.toLocaleString(DateTime.DATETIME_FULL)} style={{
                          color: 'green',
                          fontWeight: 'bold'
                        }}>{formatSeconds(secondsToEcdsaEnd)} remaining</span>.
                      </>
                      : <>
                        Ran from <FormattedTime format={"simple"} time={interval.ecdsaIntervalStart}/> to <FormattedTime
                          format={"simple"} time={interval.ecdsaIntervalEnd}/>.
                      </>
                  }

                  {" "}
                  {secondsToBeaconEnd > 0
                      ? <>
                        The beacon rewards interval began <FormattedTime time={interval.beaconIntervalStart} format={"simple"} /> and there are {" "}
                        <span title={ecdsaEndDate.toLocaleString(DateTime.DATETIME_FULL)} style={{
                          color: 'green',
                          fontWeight: 'bold'
                        }}>{formatSeconds(secondsToBeaconEnd)} remaining</span>.
                      </>
                      : <>
                        The beacon rewards interval began ran from <FormattedTime format={"simple"} time={interval.ecdsaIntervalStart}/> to <FormattedTime
                          format={"simple"} time={interval.ecdsaIntervalEnd}/>.
                      </>
                  }
                </>
            }

          </div>
        </div>
      </div>

      {interval.number > 1 ? <hr className={css`
        background: #4e8778;
        height: 1px;
        border: 0px;
      `}/> : null}
      </>
    })}
  </div>
}

function KeepAsDollarValue(props: {
  coinPrices: CoinPrices,
  keep: number,
  style?: any
}) {
  if (!props.coinPrices.keep) {
    return null;
  }
  const usdValue = props.keep * props.coinPrices.keep;
  return <span style={{color: 'gray', fontSize: '0.5em', paddingLeft: '0.3em',  ...props.style}}>
    <DollarValue dollar={usdValue} showCents={false} />
  </span>
}
