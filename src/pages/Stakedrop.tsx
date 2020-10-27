import {gql} from "@apollo/client";
import React from "react";
import {Helmet} from "react-helmet";
import type {GetRandomBeaconGroupQuery, GetStakedropDataQuery} from "../generated/graphql";
import {useParams} from "react-router";
import {InfoTooltip} from "../components/InfoTooltip";
import {Table} from "../components/Table";
import {useQueryWithTimeTravel} from "../TimeTravel";
import {FormattedTime} from "../components/FormattedTime";

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
            beaconGroupCount
        }
    }
`;


export function Stakedrop() {
  const {id} = useParams<any>();
const { loading, error, data } = useQueryWithTimeTravel<GetStakedropDataQuery>(STAKEDROP_QUERY, {variables: {id}});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {""+ error}</p>;

  return  <div style={{padding: '20px'}}>
    <Helmet>
      <title>Stakedrop</title>
    </Helmet>
    <h1 style={{marginTop: 0, marginBottom: 0}}>
      Stakedrop
    </h1>

    <Table
        style={{width: '100%'}}>
      <thead>
      <tr>
        <th>
          Interval
        </th>
        <th>
          Period <InfoTooltip>The periods for the ECDSA and the Beacon rewards are not exactly the same.</InfoTooltip>
        </th>
        <th>
          # Keeps <InfoTooltip>
          The number of keeps in this interval.
        </InfoTooltip>
        </th>
      </tr>
      </thead>
      <tbody>
      {data?.stakedropIntervals.map((interval) => {
        return <tr key={interval.id}>
          <td>
            {interval.number}
          </td>
          <td>
            <div><FormattedTime time={interval.ecdsaIntervalStart} /> - <FormattedTime time={interval.ecdsaIntervalEnd} /></div>
            <div><FormattedTime time={interval.beaconIntervalStart} /> - <FormattedTime time={interval.beaconIntervalEnd} /></div>
          </td>
          <td>
            {interval.keepCount}
          </td>
        </tr>
      })}
      </tbody>
    </Table>
  </div>
}
