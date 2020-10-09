import {gql, useQuery} from "@apollo/client";
import React from "react";
import {Paper} from "../design-system/Paper";
import {Helmet} from "react-helmet";
import type {GetRandomBeaconGroup} from "../generated/graphql";
import {useParams} from "react-router";
import {getWeiAsEth} from "../utils/getWeiAsEth";

const BEACONGROUP_QUERY = gql`
    query GetRandomBeaconGroup($id: ID!) {
        randomBeaconGroup(id: $id) {
            id,
            createdAt,
            rewardPerMember,
            members {
                id,
                address
            }
        }
    }
`;


export function BeaconGroup() {
  const {id} = useParams<any>();
  const { loading, error, data } = useQuery<any>(BEACONGROUP_QUERY, {variables: {id}});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {""+ error}</p>;

  return  <div style={{padding: '20px'}}>
    <Helmet>
      <title>Random Beacon Group</title>
    </Helmet>
    <h1 style={{marginTop: 0, marginBottom: 25}}>
      Random Beacon Group
    </h1>

    <div>
      {getWeiAsEth(data.randomBeaconGroup.rewardPerMember)}
    </div>

    <Paper padding>
      <ol>
      {data!.randomBeaconGroup.members.map((member: any) => {
        return <li>
          {member.address}
        </li>
      })}
      </ol>
    </Paper>
  </div>
}
