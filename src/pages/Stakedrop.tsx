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
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {InfoTooltip} from "../components/InfoTooltip";
import Tippy from "@tippyjs/react";


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


const ecdsaWeights = [0.04,
  0.0768,
  0.08832000000000001,
  0.0953856,
  0.10492416,
  0.089185536,
  0.0758077056,
  0.06443654976,
  0.054771067296,
  0.0465554072016,
  0.03957209612136,
  0.033636281703155996,
  0.028590839447682596,
  0.02430221353053021,
  0.020656881500950675,
  0.017558349275808075,
  0.014924596884436864,
  0.012685907351771334,
  0.010783021249005634,
  0.00916556806165479,
  0.0077907328524065705,
  0.006622122924545585,
  0.005628804485863747,
  0.004784483812984185];
const maxWeight = Math.max(...ecdsaWeights);
const totalRewards = 200000000;
const ecdsaStart = 1600041600;
// In solidity this is 30 days, which seems to be a set number of seconds
const SECONDS_DAY = 24 * 3600;
let termLength = 30 * SECONDS_DAY;


function getCurrentInterval() {
  return intervalOf(Date.now() / 1000);
}

function intervalOf(timestamp: number): number {
  let programStart = ecdsaStart;
  let maxIntervals = ecdsaWeights.length;

  // Should not happen, but the solidity code counts those for the first interval.
  if (timestamp < programStart) {
    return 0;
  }

  let difference = timestamp - programStart;
  let interval = difference / termLength;
  if (interval >= maxIntervals) {
    return -1;
  }
  return Math.floor(interval);
}

function getIntervalStart(interval: number): number {
  return interval * termLength + ecdsaStart;
}
function getIntervalEnd(interval: number): number {
  return getIntervalStart(interval) + termLength;
}


export function Stakedrop() {
  const {id} = useParams<any>();
  const { error, data } = useQueryWithTimeTravel<GetStakedropDataQuery>(STAKEDROP_QUERY, {variables: {id}});
  const coinPrices = useCoinPrices();

  const [calculatorData, setCalculatorData] = useState<APYCalculatorState|null>(null);
  const handleRewardShareChanged = useCallback((data: APYCalculatorState) => {
    setCalculatorData(data);
  }, [])

  if (error) return <p>Error :( {""+ error}</p>;

  const intervals = [...(data?.stakedropIntervals ?? [])];
  intervals.reverse();

  const currentIntervalECDSAAllocation = ecdsaWeights[getCurrentInterval()] * totalRewards;

  return  <div style={{padding: '20px', maxWidth: '1000px', margin: '0 auto'}}>
    <Helmet>
      <title>Stakedrop</title>
    </Helmet>
    <h1 style={{marginTop: 0, fontSize: 45, fontFamily: "Roboto Slab", color: '#4e8778', fontWeight: 900, borderBottom: '2px dotted #4e8778', textAlign: 'center'}}>
      The Stakedrop
    </h1>

    <div style={{margin: '0 auto 60px'}}>
      <HeaderBoxes style={{justifyContent: 'center'}}>
        <div>
          The Stakedrop is an incentive program that rewards node operators with KEEP tokens in exchange for providing
          collateral to the system.
          <p>
            Learn more about the program in the <a href={"https://staking.keep.network/about-staking/staking-economics"}>Keep documentation</a> or
            read the <a href={"https://blog.keep.network/a-new-rewards-mechanism-deef3412c3e1"}>Keep blog.</a>
          </p>
        </div>
        <Box label={"total allocation"} tooltip={"Total rewards to be distributed to node  operators over the 2-year stakedrop period."}>
          <strong>{keepFormatter.format(totalRewards)}</strong>
          <KeepAsDollarValue coinPrices={coinPrices} keep={totalRewards} style={{display: 'block'}} />
        </Box>
      </HeaderBoxes>
    </div>


    <Tabs>
      <TabList>
        <Tab>
          ECDSA <InfoTooltip>Rewards for ETH providers.</InfoTooltip>
        </Tab>
        <Tab>
          Beacon <InfoTooltip>Rewards for Beacon operators.</InfoTooltip>
        </Tab>
      </TabList>

      <TabPanel>
        <APYCalculatorUI
            totalWeight={data?.status ? parseFloat(data.status?.totalRewardWeight) : null}
            onRewardShareChanged={handleRewardShareChanged}
            intervalAllocation={currentIntervalECDSAAllocation}
        />

        <div className={css`
          margin-top: 50px;
          display: flex;
          flex-direction: row;
          height: 300px;
          justify-content: center;
          align-items: flex-start;
          
          .interval-container {
            max-width: 45px;
            flex: 1;
            margin: 2px;
            writing-mode: vertical-lr;
            height: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }
          .interval-bar {
            color: white;
            display: flex;
            width: 100%;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
            padding: 10px 0;
          }
          .interval-outsidetext {
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 10px 0;
          }
          .interval-text {
            display: block;
            transform: rotate(-180deg);
          }
          .number {
            writing-mode: lr;
            font-size: 14px;
            margin-top: 3px;
            color: gray; 
          }
        `}>
          {
            ecdsaWeights.map((weight, idx) => {
              const height = weight / maxWeight * 100;
              const startTimestamp = getIntervalStart(idx);
              const endTimestamp = getIntervalEnd(idx);
              const hasEnded = Date.now() / 1000 > endTimestamp;
              const monthString = dateTimeFrom(startTimestamp).toLocaleString({month: 'long', year: 'numeric'});

              const calcResult = (calculatorData?.eth && calculatorData?.keep && calculatorData?.rewardShare) ? calculateAPR({
                rewardShare: calculatorData?.rewardShare,
                intervalAllocation: ecdsaWeights[idx] * totalRewards,
                ethUsed: calculatorData?.eth ?? null,
                keepUsed: calculatorData?.keep,
                coinPrices
              }) : null;

              const tooltipText = hasEnded ? <>
                Ran from <FormattedTime format={"simple"} time={startTimestamp}/> to <FormattedTime format={"full"} time={endTimestamp}/>.
                Distributed {keepFormatter.format(weight * totalRewards)} <small>KEEP</small>.
              </> : <>
                Runs from <FormattedTime format={"simple"} time={startTimestamp}/> to <FormattedTime format={"full"} time={endTimestamp}/>.
                Distributes {keepFormatter.format(weight * totalRewards)} <small>KEEP</small>.
              </>
              //const barText = <span className={"interval-text"}>{keepFormatter.format(weight * totalRewards)} <small>KEEP</small></span>;

              //  ({formatPercentage(calcResult.apr)}% APR)
              // const barText = calcResult
              //     ? <>{keepFormatter.format(calcResult.keep)} <small>KEEP</small></>
              //     : monthString
              const barText = monthString;

              return <div className={"interval-container"}>
                {height <= 50 ? <div className={"interval-outsidetext"}>
                  <span className={"interval-text"}>{barText}</span>
                </div>: null}
                <Tippy content={tooltipText}>
                  <div style={{height:`${height}%`, backgroundColor: hasEnded ? 'silver' : "rgb(78, 135, 120)"}} className={"interval-bar"}>
                    {height > 50 ? <span className={"interval-text"}>{barText}</span> : null}
                  </div>
                </Tippy>
                <div className={"number"}>
                  {idx+1}
                </div>
              </div>
            })
          }
        </div>

        {intervals.length ? <div>
          <h2 style={{marginTop: '70px'}}>Old Scheme</h2>
          <p style={{marginTop: 0}}>
            Stakedrop Intervals 1 and 2 used a different rewards mechanism. This is kept for historical reference.
          </p>
          {
            intervals.slice(2).map(interval => {
              return <div>
                <SingleInterval interval={interval} coinPrices={coinPrices} showECDSA={true} showBeacon={false} />
                {interval.number > 1 ? <hr className={css`
                  background: #4e8778;
                  height: 1px;
                  border: 0;
                `}/> : null}
              </div>})
          }
        </div> : null}
      </TabPanel>
      <TabPanel>
        {intervals.map((interval) => {
          return <Fragment key={interval.number}>
            <SingleInterval interval={interval} coinPrices={coinPrices} showECDSA={false} showBeacon={true} />
            {interval.number > 1 ? <hr className={css`
          background: #4e8778;
          height: 1px;
          border: 0;
        `}/> : null}
          </Fragment>
        })}
      </TabPanel>
    </Tabs>
  </div>
}


function SingleInterval(props: {
  interval: GetStakedropDataQuery["stakedropIntervals"][0],
  coinPrices: CoinPrices,
  showECDSA: boolean,
  showBeacon: boolean
}) {
  const {interval, coinPrices} = props;
  const perKeepPerOperator = interval.allocationECDSA / Math.max(interval.keepCount, 1000) / 3;
  const perBeaconGroup = interval.allocationBeacon ? interval.allocationBeacon / interval.beaconGroupCount / 64 : null;

  const ecdsaEndDate = dateTimeFrom(interval.ecdsaIntervalEnd);
  const secondsToEcdsaEnd = ecdsaEndDate.diffNow('seconds').seconds;

  const beaconEndDate = dateTimeFrom(interval.beaconIntervalEnd);
  const secondsToBeaconEnd = beaconEndDate.diffNow('seconds').seconds;

  const totalKeep = props.showECDSA ? parseInt(interval.allocationECDSA) : parseInt(interval.allocationBeacon ?? 0);
  const start = props.showECDSA ? interval.ecdsaIntervalStart : interval.beaconIntervalStart;
  const end = props.showECDSA ? ecdsaEndDate : beaconEndDate;
  const secondsToEnd = props.showECDSA ? secondsToEcdsaEnd : secondsToBeaconEnd;

  return <div style={{margin: '30px 0 30px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
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

        {props.showECDSA ? <Box label={"KEEP per deposit"}  style={{flex: 2}}
             tooltip={`Reward an operator earns for each deposit they are collateralizing in the interval. For interval ${interval.number} this is based on ${interval.keepCount} keeps created.`}>
          {keepFormatter.format(perKeepPerOperator)}
          <KeepAsDollarValue coinPrices={coinPrices}  keep={perKeepPerOperator} />
        </Box> : null}

        {props.showBeacon ? <Box label={"KEEP per beacon group"}  style={{flex: 2}}
             tooltip={`Reward an operator earns for each beacon group they are participating in. For interval ${interval.number} this is based on ${interval.beaconGroupCount} groups.`}>
          {perBeaconGroup === null ? <>-</> : <>
            {keepFormatter.format(perBeaconGroup)}
            <KeepAsDollarValue coinPrices={coinPrices}  keep={perBeaconGroup} />
          </>}
        </Box> : null}
      </HeaderBoxes>

      <div style={{marginTop: '16px', fontSize: '14px'}}>
        {secondsToEnd > 0
            ? <>
              Began <FormattedTime time={start} format={"simple"} /> and there are {" "}
              <span title={end.toLocaleString(DateTime.DATETIME_FULL)} style={{
                color: 'green',
                fontWeight: 'bold'
              }}>{formatSeconds(secondsToEnd)} remaining</span>.
            </>
            : <>
              Ran from <FormattedTime format={"simple"} time={start}/> to <FormattedTime
                format={"simple"} time={end}/>.
            </>
        }
      </div>
    </div>
  </div>
}

function KeepAsDollarValue(props: {
  coinPrices: CoinPrices,
  keep: number,
  style?: any,
  showTilde?: boolean
}) {
  if (!props.coinPrices.keep) {
    return null;
  }
  const usdValue = props.keep * props.coinPrices.keep;
  return <span style={{color: 'gray', fontSize: '0.5em', paddingLeft: '0.3em',  ...props.style}}>
    {props.showTilde ? "~" : null}<DollarValue dollar={usdValue} showCents={false} />
  </span>
}


function calculateAPR(props: {
  coinPrices: CoinPrices,
  ethUsed: number,
  keepUsed: number,
  rewardShare: number,
  intervalAllocation: number,
}) {
  const {coinPrices, ethUsed, keepUsed, rewardShare, intervalAllocation} = props;
  const {ethereum: ethPrice, keep: keepPrice} = coinPrices;
  const keepRewards = rewardShare * intervalAllocation;

  if (!keepPrice || !ethPrice) { return null; }

  const includeKeepInApr = true;
  let usdValueRewards, totalUsdInvested, totalIntervalYield, yieldPerYear: number;
  usdValueRewards = keepRewards * keepPrice;
  totalUsdInvested = (includeKeepInApr ? props.ethUsed * ethPrice : 0) + props.keepUsed * keepPrice;
  totalIntervalYield = usdValueRewards / totalUsdInvested!
  yieldPerYear = totalIntervalYield * 12;
  return {
    usd: usdValueRewards,
    keep: keepRewards,
    apr: yieldPerYear
  }
}


function APYOutput(props: {
  rewardShare: number|null,
  intervalAllocation: number,
  ethUsed: number|null,
  keepUsed: number|null
}) {
  const coinPrices = useCoinPrices();
  const {ethereum: ethPrice, keep: keepPrice} = coinPrices;
  const {rewardShare, intervalAllocation, ethUsed,  keepUsed} = props;
  
  let calcResult: ReturnType<typeof calculateAPR>|null = null;
  if (keepPrice && ethPrice && ethUsed && keepUsed && rewardShare) {
    calcResult = calculateAPR({
      rewardShare,
      intervalAllocation,
      ethUsed,
      keepUsed,
      coinPrices
    });
  }

  if (rewardShare === null || calcResult === null) {
    return null;
  }

  return <div className={css`
    font-size: 16px;
    .value {
      margin: 10px 0;
      font-size: 24px;
    }
    .value .header {
      font-size: 0.7em; 
    }
    strong small {
    }
  `}>
    <div className={"value"}>
      <div className={"header"}>Est. Payout Interval {getCurrentInterval()+1}</div>
      <strong>{keepFormatter.format(calcResult.keep)} <small>KEEP</small></strong>
      <KeepAsDollarValue showTilde={true} coinPrices={coinPrices}  keep={calcResult.keep} />
    </div>

    <div className={"value"}>
      <div className={"header"}>APR</div>
      <strong>{formatPercentage(calcResult.apr)}</strong>
    </div>

    <div>
      <strong>{formatPercentage(rewardShare)}</strong> of rewards.
    </div>
  </div>
}


type APYCalculatorState = {rewardShare: number|null, eth: number|null, keep: number|null};

function APYCalculatorUI(props: {
  onRewardShareChanged: (data: APYCalculatorState) => void,
  totalWeight: number|null,
  intervalAllocation: number
}) {
  const {totalWeight} = props;
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
  const share = (rewardWeight === null || totalWeight == null) ? null : rewardWeight / (totalWeight + rewardWeight);

  useEffect(() => {
    props.onRewardShareChanged({rewardShare: share, eth, keep});
  }, [share])

  return <div className={css`
    border: 1px silver dotted;
    padding: 20px;
    background: white;
    
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    
    .inputs {
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    h3 {
      margin: 0px;
      margin-bottom: 15px;
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
  `}>
    <div className={"root"}>
      <h3>Rewards Calculator</h3>
      <div className={"inputs"}>
        <div>
          <label>KEEP Staked</label>
          <input value={keepText} onChange={handleKeep} />
        </div>
        <div>
          <label>ETH Locked</label>
          <input value={ethText} onChange={handleEth} />
        </div>
      </div>
    </div>
    <div className={"result"}>
      <APYOutput
          rewardShare={share}
          intervalAllocation={props.intervalAllocation}
          ethUsed={eth}
          keepUsed={keep}
      />
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