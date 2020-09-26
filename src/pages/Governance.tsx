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

const GOVERNANCE_QUERY = gql`
    fragment Change on GovernanceChange {
        type,
        requestedAt,
        takesEffectAfter,
        
        newLotSizes,
        newFactorySelector,
        newFullyBakedFactory,
        newKeepStakedFactory,
    }
    
    query GetGovernance {
        governance(id: "GOVERNANCE") {
            lotSizes,
            pendingLotSizeChange { ...Change },
            
            factorySelector,
            fullyBakedFactory,
            keepStakedFactory,
            pendingFactoriesChange { ...Change },

            signerFeeDivisor,
            signerFeeDivisorChange { ...Change },
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
    # XXX deposits disabled field
    # xxx why is the date wrong? takesEffectAfter
    <Content />
  </div>
}


export function Content() {
  const { loading, error, data } = useQuery(GOVERNANCE_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {""+ error}</p>;

  return <div>
    <Paper padding>
      <Block title={"Lot Sizes"} tooltip={"The available sizes when creating a new deposit."}>
        {formatLotSizes(data.governance.lotSizes)}
      </Block>

      <Block title={"Signer Fee"}>
        {formatLotSizes(data.governance.lotSizes)}
      </Block>

      <Block title={"Factory Contracts"}>
        <div>
          <span style={{color: 'gray'}}>Factory Selector: </span> <Address address={data.governance.factorySelector} />
        </div>
        <div>
          <span style={{color: 'gray'}}>Fully Backed Factory: </span> <Address address={data.governance.fullyBakedFactory} />
        </div>
        <div>
          <span style={{color: 'gray'}}>Keep Staked Factory: </span> <Address address={data.governance.keepStakedFactory} />
        </div>
      </Block>

      <Block title={"Collateralization Thresholds"}>
        <div>
          <span style={{color: 'gray'}}>Factory Selector: </span> <Address address={data.governance.factorySelector} />
        </div>
        <div>
          <span style={{color: 'gray'}}>Fully Backed Factory: </span> <Address address={data.governance.fullyBakedFactory} />
        </div>
        <div>
          <span style={{color: 'gray'}}>Keep Staked Factory: </span> <Address address={data.governance.keepStakedFactory} />
        </div>
      </Block>
      <div>
        <div><strong>Price Feeds</strong></div>
      </div>
    </Paper>

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