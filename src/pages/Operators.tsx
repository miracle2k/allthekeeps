import {gql, useQuery} from "@apollo/client";
import React from "react";
import {Paper} from "../design-system/Paper";
import {css} from "emotion";
import { Address } from "../components/Address";
import {ExternalLinkIcon} from "../components/ExternalLinkIcon";
import {InfoTooltip} from "../components/InfoTooltip";
import {Helmet} from "react-helmet";

const OPERATOR_QUERY = gql`
    query GetOperators {
        keepMembers(first: 100) {
            id,
            address,
            keeps {
                id
            }
        }
    }
`;


export function Operators() {
  return  <div style={{padding: '20px'}}>
    <Helmet>
      <title>Deposits</title>
    </Helmet>
    <h1 style={{marginTop: 0}}>Deposits</h1>
    <Paper padding>
      <OperatorsTable />
    </Paper>
  </div>
}


export function OperatorsTable() {
  const { loading, error, data } = useQuery(OPERATOR_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {""+ error}</p>;

  return <table
      style={{width: '100%'}}
      className={css`
        & td, th {
          text-align: left;
        }
      `}>
    <thead>
    <tr>
      <th>Address</th>
      <th>
        # Keeps <InfoTooltip>Number of keeps/deposits this operator is securing.</InfoTooltip>
      </th>
    </tr>
    </thead>
    <tbody>
    {data.keepMembers.map((member: any) => {
      return  <tr>
        <td>
          <Address address={member.address} to={`/operator/${member.address}`} />
          <a title={"Open on Etherscan"} href={`https://etherscan.io/address/${member.address}`} className={css`
                font-size: 0.8em;
                padding-left: 0.2em;
               `}>
            <ExternalLinkIcon />
          </a>
        </td>
        <td>{member.keeps.length}</td>
      </tr>
    })}
    </tbody>
  </table>
}