import {gql, useQuery} from "@apollo/client";
import React from "react";
import {Paper} from "../design-system/Paper";
import {css} from "emotion";
import {Address, Transaction} from "../components/Address";
import {ExternalLinkIcon} from "../components/ExternalLinkIcon";
import {InfoTooltip} from "../components/InfoTooltip";
import {getSatoshisAsBitcoin} from "../utils/getSatoshisAsBitcoin";
import { Helmet } from "react-helmet";
import { Table } from "../components/Table";
import {FormattedTime, TimeToNow} from "../components/FormattedTime";
import {ExplainerIcon} from "../components/ExplainerIcon";
import {usePriceFeed} from "../components/PriceFeed";
import {getWeiAsEth} from "../utils/getWeiAsEth";

const GOVERNANCE_QUERY = gql`
    fragment Change on GovernanceChange {
        type,
        requestedAt,
        takesEffectAfter,
        
        newLotSizes,
        newFactorySelector,
        newFullyBackedFactory,
        newKeepStakedFactory,
    }
    
    query GetGovernance {
        governance(id: "GOVERNANCE") {
            newDepositsAllowed
            
            lotSizes,
            pendingLotSizeChange { ...Change },
            
            factorySelector,
            fullyBackedFactory,
            keepStakedFactory,
            pendingFactoriesChange { ...Change },

            signerFeeDivisor,
            pendingSignerFeeDivisorChange { ...Change },

            initialCollateralizedPercent,
            severelyUndercollateralizedThresholdPercent,
            undercollateralizedThresholdPercent,
            
            priceFeeds,
        },
        
        governanceLogEntries(after: 0, first: 300, orderBy: timestamp, orderDirection: desc) {
            id,
            timestamp,
            transactionHash,
            submitter,
            isRequest,
            change {
                ...Change
            }
        }
    }
`;


export function Governance() {
  return  <div style={{padding: '20px'}}>
    <Helmet>
      <title>Governance</title>
    </Helmet>
    <h1 style={{marginTop: 0}}>Governance</h1>
    <Content />
  </div>
}


export function Content() {
  const { loading, error, data } = useQuery(GOVERNANCE_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {""+ error}</p>;

  return <div>
    <div  style={{
      display: 'flex',
      flexDirection: 'row'
    }}>
      <Paper padding>
        <Block title={"Deposits Enabled"} tooltip={"New deposits can be paused for 10 days in an emergency."}>
          {data.governance.newDepositsAllowed ? "Yes" : "Emergency Break in Effect"}
        </Block>

        <Block title={"Lot Sizes"} tooltip={"The available sizes when creating a new deposit."}>
          {formatLotSizes(data.governance.lotSizes)}
        </Block>

        <Block title={"Signer Fee"} tooltip={"The fee that goes to the signers who guarantee a deposit, cannot be set to a value <0.02% or >10%."}>
          {formatter.format(1 / data.governance.signerFeeDivisor)}
        </Block>

        <Block title={"Factory Contracts"}>
          <div>
            <span style={{color: '#rgb(62 62 62)'}}>Factory Selector: </span> <Address address={data.governance.factorySelector} />
          </div>
          <div>
            <span style={{color: '#rgb(62 62 62)'}}>Fully Backed Factory: </span> <Address address={data.governance.fullyBackedFactory} />
          </div>
          <div>
            <span style={{color: '#rgb(62 62 62)'}}>Keep Staked Factory: </span> <Address address={data.governance.keepStakedFactory} />
          </div>
        </Block>

        <Block title={"Collateralization Thresholds"}>
          <div>
            <span style={{color: '#rgb(62 62 62)'}}>Initial: </span> {data.governance.initialCollateralizedPercent}%
          </div>
          <div>
            <span style={{color: '#rgb(62 62 62)'}}>Undercollaterized: </span> {data.governance.undercollateralizedThresholdPercent}%
          </div>
          <div>
            <span style={{color: '#rgb(62 62 62)'}}>Severly Undercollaterized: </span> {data.governance.severelyUndercollateralizedThresholdPercent}%
          </div>
        </Block>

        <Block title={"Price Feeds"}>
          {data.governance.priceFeeds.map((feed: any) => {
            return <div><Address address={feed} /></div>
          })}
        </Block>
      </Paper>

      <div style={{flex: 0, minWidth: '400px', marginLeft: '40px'}}>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <ExplainerIcon width={"2em"} height={"2em"}/>
          <strong style={{marginTop: 0, paddingLeft: '0.3em', fontSize: '1.2em'}}>Governance Info</strong>
        </div>
        The admin key has the following abilities: <strong>a)</strong> emergency break: in the first 180 days only, it can stop new deposits for 10 days.
        {" "}<strong>b)</strong> it can change the governance parameters on the left with 48 hours notice, but only new deposits are affected.
      </div>

      <div style={{marginLeft: 20}}>
        <PriceInfo />
      </div>
    </div>

    <Paper padding style={{marginTop: '20px'}}>
      <h3 style={{marginTop: 0}}>Log</h3>

      <Table style={{width: '100%'}}>
        <thead>
          <tr>
            <th>Date</th>
            <th style={{paddingBottom: 10}}>
              Action
            </th>
            <th>Submitter</th>
            <th>Transaction</th>
          </tr>
        </thead>
        <tbody>
          {data.governanceLogEntries.map((logEntry: any) => {
            return <LogEntry entry={logEntry} />
          })}
        </tbody>
      </Table>
    </Paper>
  </div>
}


function PriceInfo() {
  const price = usePriceFeed();

  let content: any;
  if (!price) {
    content = '-';
  }
  else {
    content = <div>
      <div>{price.val.toFixed(5)} ETH</div>
      <div style={{
        marginTop: '0.5em',
        fontSize: '0.8em'
      }}>
        <TimeToNow time={price.timestamp} /> in block <Transaction tx={price.transactionHash}>{price.blockNumber}</Transaction>.
      </div>
    </div>
  }

  return <Paper padding>
    <Block title={"Price Feed"} tooltip={"The price of a Bitcoin in ETH - affects collateralization ratios. Updates live."}>
      {content}
    </Block>
  </Paper>
}


function Block(props: {
  children?: any,
  title: string,
  tooltip?: string
}) {
  return <div style={{marginBottom: '15px'}}>
    <div><strong>{props.title} {props.tooltip ? <InfoTooltip>{props.tooltip}</InfoTooltip> : null}</strong></div>
    {props.children}
  </div>
}


const formatter = new Intl.NumberFormat("en-US", {
  style: 'percent',
  maximumFractionDigits: 2
});

function formatLotSizes(lotSizes: any) {
  return lotSizes.map((size: number) => {
    return getSatoshisAsBitcoin(size)
  }).join(", ") + " BTC"
}


function LogEntry(props: {
  entry: any
}) {
  const {entry, entry: {change: {type}, isRequest}} = props;
  let Component: any;

  if (type == 'LOT_SIZES') {
    if (isRequest) {
      Component = LotSizesChangeRequest;
    } else {
      Component = LotSizesChangeDone;
    }
  }
  else {
    Component = UnsupportedChange;
  }
  return <tr>
    <td>
      <TimeToNow time={props.entry.timestamp} />
    </td>
    <td>
      <Component entry={props.entry} />
    </td>
    <td>
      <Address address={props.entry.submitter} includeExternalIcon={true} />
    </td>
    <td>
      <Transaction tx={props.entry.transactionHash} includeExternalIcon={true} />
    </td>
  </tr>
}


function ActionDesc(props: {
  headline: string,
  children?: any
}) {
  return <>
    <div><strong>{props.headline}</strong></div>
    <div className={css`
      font-size: .9em;  
    `}>{props.children}</div>
  </>
}


function LotSizesChangeRequest(props: {
  entry: any
}) {
  return <ActionDesc headline={"Scheduled: Available lot sizes"}>
    <div>
      New lots will be: <span>{formatLotSizes(props.entry.change.newLotSizes)}</span>
    </div>
    {props.entry.isRequest ? <div>
      <span  className={css`
          color: gray;
      `}>
        Can be applied after <FormattedTime time={parseInt(props.entry.change.takesEffectAfter)} /> (48 hours).
      </span>
    </div> : null}
  </ActionDesc>
}


function LotSizesChangeDone(props: {
  entry: any
}) {
  return <ActionDesc headline={"Changed: Available lot sizes"}>
    <div>
      Lot sizes are now: {" "} <span>{formatLotSizes(props.entry.change.newLotSizes)}</span>
    </div>
  </ActionDesc>
}

function UnsupportedChange(props: {
  entry: any
}) {
  if (props.entry.isRequest) {
    return <ActionDesc headline={"A governance change was scheduled."} />
  }
  return <ActionDesc headline={"A governance change was applied."} />
}