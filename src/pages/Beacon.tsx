import {gql, useQuery} from "@apollo/client";
import React from "react";
import {Paper} from "../design-system/Paper";
import {css} from "emotion";
import {Address, Hash} from "../components/Address";
import {ExternalLinkIcon} from "../components/ExternalLinkIcon";
import {InfoTooltip} from "../components/InfoTooltip";
import {Helmet} from "react-helmet";
import {SortableHeader, SortState, Table, useSort} from "../components/Table";
import {usePriceFeed} from "../components/PriceFeed";
import {Box} from "../components/Box";
import {GetOperatorsQuery, GetRelayEntriesQuery, GetUsersQuery} from "../generated/graphql";
import {useEtherscanDomain} from "../NetworkContext";
import {TimeBetween, TimeToNow} from "../components/FormattedTime";
import {getWeiAsEth} from "../utils/getWeiAsEth";

const BEACON_QUERY = gql`
    query GetRelayEntries {
        randomBeaconGroups(first: 1000, orderBy: createdAt, orderDirection:desc) {
            id,
            pubKey,
            createdAt,
            memberCount,
            rewardPerMember
        }
        relayEntries(first: 1000, orderBy: requestedAt, orderDirection:desc) {
            id,
            requestId,
            value,
            requestedAt,
            generatedAt,
            rewardPerMember
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
    <Paper padding>
      <RelayEntriesTable data={data} />
      <BeaconGroupsTable data={data} />
    </Paper>
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
      <th>Request ID</th>
      <th>Reward per group member</th>
      <th>
        Random Value
      </th>
      <th>
        Requested At
      </th>
      <th>
        Provided At
      </th>
    </tr>
    </thead>
    <tbody>
    {data.relayEntries.map((entry: any) => {
      return  <tr key={entry.id}>
        <td>
          {entry.requestId}
        </td>
        <td>
          {getWeiAsEth(entry.rewardPerMember)}
        </td>
        <td>{entry.value}</td>
        <td><TimeToNow time={entry.requestedAt} /></td>
        <td>
          <TimeBetween earlier={entry.requestedAt} later={entry.generatedAt} />
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
        Pubkey
      </th>
      <th>
        Created At
      </th>
      <th>
        Reward
      </th>
    </tr>
    </thead>
    <tbody>
    {data.randomBeaconGroups.map((group: any) => {
      return  <tr key={group.id}>
        <td>
          <Hash hash={group.pubKey} to={`/group/${group.pubKey}`} />
        </td>
        <td>
          {group.memberCount}
        </td>
        <td>
          {getWeiAsEth(group.rewardPerMember)}
        </td>
        <td><TimeToNow time={group.createdAt} /></td>
      </tr>
    })}
    </tbody>
  </Table>
}
