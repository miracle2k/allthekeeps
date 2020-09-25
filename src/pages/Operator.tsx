import {gql, useQuery} from "@apollo/client";
import React from "react";
import {useParams} from 'react-router';
import {css} from "emotion";
import { Paper } from "../design-system/Paper";


const OPERATOR_QUERY = gql`
    query GetOperator($id: String!) {
        keepMember(id: $id) {
            id,
            address,
            keeps {
                id
            }
        }
    }
`;


export function Operator() {
  return <div className={css`
      padding: 1em;
    `}>
    <Content />
  </div>
}


export function Content() {
  let { operatorId } = useParams<any>();
  const { loading, error, data } = useQuery(OPERATOR_QUERY, {variables: {id: operatorId}});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {""+ error}</p>;

  return <div>
    <div className={css`
      display: flex;
      flex-direction: row;
      font-size: 30px;
      margin-bottom: 15px;
  `}>
      Operator: {data.keepMember.address}
    </div>


    <Paper padding>
      Address:
      Keeps: {data.keepMember.keeps.map((keep: any) => {
      return <li>
        {keep.id}
        {/* How many members, status, honest threshold, link to the deposit*/}
      </li>
    })}
    </Paper>
  </div>
}