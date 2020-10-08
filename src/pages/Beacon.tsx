import {gql, useQuery} from "@apollo/client";
import React from "react";
import {Paper} from "../design-system/Paper";
import {css} from "emotion";
import { Address } from "../components/Address";
import {ExternalLinkIcon} from "../components/ExternalLinkIcon";
import {InfoTooltip} from "../components/InfoTooltip";
import {Helmet} from "react-helmet";
import {SortableHeader, SortState, Table, useSort} from "../components/Table";
import {usePriceFeed} from "../components/PriceFeed";
import {Box} from "../components/Box";
import {GetOperatorsQuery, GetRelayEntriesQuery, GetUsersQuery} from "../generated/graphql";
import {useEtherscanDomain} from "../NetworkContext";
import {TimeToNow} from "../components/FormattedTime";

const BEACON_QUERY = gql`
    query GetRelayEntries {
        relayEntries(orderBy: requestedAt, orderDirection:desc) {
            id,
            requestId,
            value,
            requestedAt,
            generatedAt
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
      <th>
        Random Value
      </th>
      <th>
        Requested At
      </th>
      <th>
        Created At
      </th>
    </tr>
    </thead>
    <tbody>
    {data.relayEntries.map((entry: any) => {
      return  <tr key={entry.id}>
        <td>
          {entry.requestId}
        </td>
        <td>{entry.value}</td>
        <td><TimeToNow time={entry.requestedAt} /></td>
        <td>
          <TimeToNow time={entry.generatedAt} />
        </td>
      </tr>
    })}
    </tbody>
  </Table>
}
