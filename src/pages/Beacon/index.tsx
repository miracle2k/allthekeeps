import {gql, useQuery} from "@apollo/client";
import React from "react";
import {Paper} from "../../design-system/Paper";
import {css} from "emotion";
import {Address, Hash} from "../../components/Address";
import {ExternalLinkIcon} from "../../components/ExternalLinkIcon";
import {InfoTooltip} from "../../components/InfoTooltip";
import {Helmet} from "react-helmet";
import {SortableHeader, SortState, Table, useSort} from "../../components/Table";
import {usePriceFeed} from "../../components/PriceFeed";
import {Box} from "../../components/Box";
import {GetOperatorsQuery, GetRelayEntriesQuery, GetUsersQuery} from "../../generated/graphql";
import {useEtherscanDomain} from "../../NetworkContext";
import {TimeBetween, TimeToNow} from "../../components/FormattedTime";
import {getWeiAsEth} from "../../utils/getWeiAsEth";
import {Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import {ETHValue} from "../../components/ETHValue";
import {ETHTag, GweiTag} from "../../components/CurrencyTags";
import {getGroupName} from "./GroupName";


const BEACON_QUERY = gql`
    query GetRelayEntries {
        randomBeaconGroups(first: 1000, orderBy: createdAt, orderDirection:desc) {
            id,
            pubKey,
            createdAt,
            memberCount,
            rewardPerMember,
        }
        relayEntries(first: 1000, orderBy: requestedAt, orderDirection:desc) {
            id,
            requestId,
            value,
            requestedAt,
            generatedAt,
            rewardPerMember,
            group {
                id,
                pubKey
            }
        }
    }
`;


export function Beacon() {
  const { loading, error, data } = useQuery<GetRelayEntriesQuery>(BEACON_QUERY, );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {""+ error}</p>;

  return  <div style={{padding: '20px'}}>
    <Helmet>
      <title>Random Beacon</title>
    </Helmet>
    <h1 style={{marginTop: 0, marginBottom: 25}}>
      Random Beacon
    </h1>

    <Tabs>
      <TabList>
        <Tab>
          Entries <InfoTooltip>Random numbers requested by smart contracts on Ethereum, notably the tBTC system.</InfoTooltip>
        </Tab>
        <Tab>
          Groups <InfoTooltip>Operator groups tasked with providing randomness.</InfoTooltip>
        </Tab>
      </TabList>

      <TabPanel>
        <Paper padding>
          <RelayEntriesTable data={data} />
        </Paper>
      </TabPanel>
      <TabPanel>
        <Paper padding>
          <BeaconGroupsTable data={data} />
        </Paper>
      </TabPanel>
    </Tabs>
  </div>
}


export function RelayEntriesTable(props: {
  data: any,
}) {
  const {data} = props;

  return <Table
      style={{width: '100%'}}>
    <thead>
    <tr>
      <th>
        Requested At
      </th>
      <th>
        Provided After
      </th>
      <th>
        Group <InfoTooltip>The group providing this result.</InfoTooltip>rewards.service.js
      </th>
      <th>
        Reward <InfoTooltip>ETH earned by each member of the group providing this value.</InfoTooltip>
      </th>
      <th>
        Random Value
      </th>
      <th>Request ID</th>
    </tr>
    </thead>
    <tbody>
    {data.relayEntries.map((entry: any) => {
      return  <tr key={entry.id}>
        <td><TimeToNow time={entry.requestedAt} /></td>
        <td>
          <TimeBetween earlier={entry.requestedAt} later={entry.generatedAt} />
        </td>
        <td>
          <Hash hash={entry.group.pubKey} to={`/group/${entry.group.pubKey}`}>{getGroupName(entry.group.id)}</Hash>
        </td>
        <td>
          {
            entry.value ? <>
              <GweiTag /> <ETHValue unit={"gwei"} wei={entry.rewardPerMember} />
            </> : null
          }

        </td>
        <td style={{fontSize: '14px'}}>
          {entry.value ? <>{entry.value.slice(0, 12)}...</> : null}
        </td>
        <td>
          {entry.requestId}
        </td>
      </tr>
    })}
    </tbody>
  </Table>
}


export function BeaconGroupsTable(props: {
  data: any,
}) {
  const {data} = props;

  return <Table
      style={{width: '100%'}}>
    <thead>
    <tr>
      <th>
        Group
      </th>
      <th>
        Total Rewards <InfoTooltip>ETH earned by each member in this group.</InfoTooltip>
      </th>
      <th>
        Created At
      </th>
    </tr>
    </thead>
    <tbody>
    {data.randomBeaconGroups.map((group: any) => {
      return  <tr key={group.id}>
        <td>
          <Hash hash={group.pubKey} to={`/group/${group.pubKey}`}>{getGroupName(group.id)}</Hash>
        </td>
        {/*<td>*/}
        {/*  {group.memberCount}*/}
        {/*</td>*/}
        <td>
          <ETHTag /> <ETHValue unit={"eth"} wei={group.rewardPerMember} />
        </td>
        <td><TimeToNow time={group.createdAt} /></td>
      </tr>
    })}
    </tbody>
  </Table>
}
