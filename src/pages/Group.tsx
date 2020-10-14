import {gql, useQuery} from "@apollo/client";
import React from "react";
import {Paper} from "../design-system/Paper";
import {Helmet} from "react-helmet";
import type {GetRandomBeaconGroup} from "../generated/graphql";
import {useParams} from "react-router";
import {getWeiAsEth} from "../utils/getWeiAsEth";
import {getGroupName} from "./Beacon/GroupName";

const BEACONGROUP_QUERY = gql`
    query GetRandomBeaconGroup($id: ID!) {
        randomBeaconGroup(id: $id) {
            id,
            createdAt,
            rewardPerMember,
            memberships {
                id,
                count,
                operator {
                    address   
                }
            }
        }
    }
`;


export function BeaconGroup() {
  const {id} = useParams<any>();
  const { loading, error, data } = useQuery<any>(BEACONGROUP_QUERY, {variables: {id}});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {""+ error}</p>;

  const group = data.randomBeaconGroup;

  return  <div style={{padding: '20px'}}>
    <Helmet>
      <title>Random Beacon Group: {getGroupName(group.id)}</title>
    </Helmet>
    <h1 style={{marginTop: 0, marginBottom: 25}}>
      Random Beacon Group
    </h1>

    <div>
      Reward per member: {getWeiAsEth(group.rewardPerMember)}
    </div>

    <Paper padding>
      <ol>
      {group.memberships.map((member: any) => {
        return <li>
          {member.operator.address}
          ({member.count})
        </li>
      })}
      </ol>
    </Paper>
  </div>
}
