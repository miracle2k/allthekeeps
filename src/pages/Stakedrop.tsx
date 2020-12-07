import {gql} from "@apollo/client";
import React, {Fragment, useCallback, useEffect, useState} from "react";
import {Helmet} from "react-helmet";
import type {GetStakedropDataQuery} from "../generated/graphql";
import {useParams} from "react-router";
import {useQueryWithTimeTravel} from "../TimeTravel";
import {dateTimeFrom, formatSeconds, FormattedTime} from "../components/FormattedTime";
import {keepFormatter} from "../components/KeepValue";
import { DateTime } from "luxon";
import {HeaderBoxes} from "../components/HeaderBoxes";
import {Box} from "../components/Box";
import {CoinPrices, useCoinPrices} from "../utils/useCoinPrices";
import {DollarValue} from "../components/DollarValue";
import {css} from "emotion";
import {SkeletonWord} from "../components/SkeletonLoader";
import {formatPercentage} from "../utils/formatNumber";
import {toNumber} from 'lodash';


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
        },
        status: statusRecord(id: "current") {
          totalRewardWeight
        }
    }
`;


export function Stakedrop() {
  const {id} = useParams<any>();
  const { loading, error, data } = useQueryWithTimeTravel<GetStakedropDataQuery>(STAKEDROP_QUERY, {variables: {id}});
  const coinPrices = useCoinPrices();

  const [rewardShare, setRewardShare] = useState<number|null>(null);
  const handleRewardShareChanged = useCallback((share: number|null) => {
    setRewardShare(share);
  }, [])

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

    {data?.status ? <APYCalculatorUI
        totalWeight={parseFloat(data.status.totalRewardWeight)}
        onRewardShareChanged={handleRewardShareChanged}
    /> : null}

    {intervals.map((interval) => {
      const totalKeep = (parseInt(interval.allocationECDSA) + parseInt(interval.allocationBeacon ?? 0))
      const perKeepPerOperator = interval.allocationECDSA / Math.max(interval.keepCount, 1000) / 3;
      const perBeaconGroup = interval.allocationBeacon ? interval.allocationBeacon / interval.beaconGroupCount / 64 : null;

      const ecdsaEndDate = dateTimeFrom(interval.ecdsaIntervalEnd);
      const secondsToEcdsaEnd = ecdsaEndDate.diffNow('seconds').seconds;

      const beaconEndDate = dateTimeFrom(interval.beaconIntervalEnd);
      const secondsToBeaconEnd = beaconEndDate.diffNow('seconds').seconds;

      const bothDone = secondsToBeaconEnd < 0 && secondsToEcdsaEnd < 0;

      const newFormulaRewards = rewardShare != null ? rewardShare * parseInt(interval.allocationECDSA) : null;

      return <Fragment key={interval.number}><div style={{margin: '30px 0 30px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
        <div>
          <div style={{fontFamily: "Roboto Slab", color: '#4e8778', fontWeight: 900, fontSize: 60, lineHeight: 1}}>
            {interval.number}
            <span style={{fontSize: '0.4em'}}>
              {interval.number == 1 ? 'st' : interval.number == 2 ? 'nd' : interval.number == 3 ? 'rd' : 'th'}
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
              <Box label={"You earn KEEP"}  style={{flex: 2}}>
                {newFormulaRewards != null ? <>
                  {keepFormatter.format(newFormulaRewards)}
                  <KeepAsDollarValue coinPrices={coinPrices}  keep={newFormulaRewards} />
                </> : null}
              </Box>
            </> : <>
              <Box label={"KEEP per deposit"}  style={{flex: 2}}
                   tooltip={`Reward an operator earns for each deposit they are collateralizing in the interval. For interval ${interval.number} this is based on ${interval.keepCount} keeps created.`}>
                {keepFormatter.format(perKeepPerOperator)}
                <KeepAsDollarValue coinPrices={coinPrices}  keep={perKeepPerOperator} />
              </Box>
            </>}

            <Box label={"KEEP per beacon group"}  style={{flex: 2}}
                 tooltip={`Reward an operator earns for each beacon group they are participating in. For interval ${interval.number} this is based on ${interval.beaconGroupCount} groups.`}>
              {perBeaconGroup === null ? <>-</> : <>
                {keepFormatter.format(perBeaconGroup)}
                <KeepAsDollarValue coinPrices={coinPrices}  keep={perBeaconGroup} />
              </>}
            </Box>
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
      </Fragment>
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


function APYCalculatorUI(props: {
  onRewardShareChanged: (rewardShare: number|null) => void,
  totalWeight: number,
}) {
  const defaultEth = 300;
  const defaultKeep = 80000;
  const [eth, setEth] = useState<number|null>(defaultEth);
  const [ethText, setEthText] = useState(defaultEth);
  const [keep, setKeep] = useState<number|null>(defaultKeep);
  const [keepText, setKeepText] = useState(defaultKeep);

  const handleKeep = useCallback((e: any) => {
    const value = e.target.value;
    setKeepText(e.value);
    const num = toNumber(value);
    if (!Number.isNaN(num)) {
      setKeep(num);
    } else {
      setKeep(null)
    }
  }, []);

  const handleEth = useCallback((e: any) => {
    const value = e.target.value;
    setEthText(e.value);
    const num = toNumber(value);
    if (!Number.isNaN(num)) {
      setEth(num);
    } else {
      setEth(null)
    }
  }, []);

  const {rewardWeight} = (keep === null || eth === null) ? {rewardWeight: null}
  : getStakedropRewardFormula({ethLocked: eth, stakedAmount: keep})
  const share = rewardWeight === null ? null : rewardWeight / (props.totalWeight + rewardWeight);

  useEffect(() => {
    props.onRewardShareChanged(share);
  }, [share])

  return <div className={css`
    border: 1px silver dotted;
    padding: 20px;
    background: white;
    
    .inputs {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    h3 {
      margin-right: 15px;
      font-size: 18px;
    }
    .inputs > div {
      margin: 5px;
    }
    .inputs label {
      color: gray;
      display: block;
    }
    input {
      text-align: center;
      font-size: 22px;
      padding: 0.4em;
    }
    .result {
      flex: 1;
      text-align: center;
    }
    .result strong {
      font-size: 24px;
    }
  `}>
    <div className={"inputs"}>
      <h3>Rewards Calculator</h3>
      <div>
        <label>KEEP Staked</label>
        <input value={keepText} onChange={handleKeep} />
      </div>
      <div>
        <label>ETH Locked</label>
        <input value={ethText} onChange={handleEth} />
      </div>
      <div className={"result"}>
        {share !== null ? <><div><strong>{formatPercentage(share)}</strong></div>
        of rewards</> : null}
      </div>
    </div>
    <div style={{fontSize: '14px', marginTop: 15}}>
      <a href={"https://blog.keep.network/a-new-rewards-mechanism-deef3412c3e1"}>Read about the new rewards mechanism.</a>
    </div>
  </div>
}


export function getStakedropRewardFormula(opts: {
  ethLocked: number,
  stakedAmount: number
}) {
  // =IF(B11>3000,2*SQRT(B11*3000)-3000,B11)
  const ethScore = opts.ethLocked > 3000
      ? (Math.sqrt(opts.ethLocked * 3000) * 2) - 3000
      : opts.ethLocked;

  const MinStake = 70000;
  // This will start to be wrong once MinStake changes. We might have to calculate the value for
  // all min stake values, or come up with a clever formula.
  // =IF(B11=0,0,1+MIN(C11/70000,SQRT(C11/(B11*500))))
  const boostFactor1 = opts.stakedAmount / MinStake;
  const boostFactor2 = opts.ethLocked == 0 ? 0 : Math.sqrt(opts.stakedAmount / (opts.ethLocked * 500));
  const boost = 1 + Math.min(boostFactor1, boostFactor2);

  const rewardWeight = ethScore * boost;
  return {rewardWeight, boost, ethScore};
}