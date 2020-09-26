import {gql, useQuery} from "@apollo/client";
import React from "react";
import {useParams} from 'react-router';
import {css} from "emotion";
import { Paper } from "../design-system/Paper";
import Tippy, {useSingleton} from "@tippyjs/react";
import {InfoTooltip} from "../components/InfoTooltip";
import {TimeToNow} from "../components/FormattedTime";
import {Link} from "react-router-dom";
import {ExternalLinkIcon} from "../components/ExternalLinkIcon";
import {getSatoshisAsBitcoin} from "../utils/getSatoshisAsBitcoin";
import {getNiceStateLabel, getStateColor} from "../utils/depositStates";
import {hasDepositBeenUsedToMint} from "../utils/contracts";
import {TBTCIcon} from "../design-system/tbtcIcon";
import {Helmet} from "react-helmet";


const OPERATOR_QUERY = gql`
    query GetOperator($id: String!) {
        keepMember(id: $id) {
            id,
            address,
            keeps {
                id,
                deposit {
                    id,
                    contractAddress,
                    lotSizeSatoshis,
                    currentState,
                    keepAddress,
                    createdAt,
                    tdtToken {
                        owner
                    }
                }
            }
        }
    }
`;


export function Operator() {
  return <div className={css`
      padding: 1em;
    `}>
    <Helmet>
      <title>Operator</title>
    </Helmet>
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
      <h3 style={{marginTop: 0}}>Deposits</h3>
      <DepositsTable deposits={data.keepMember.keeps.map((keep: any) => keep.deposit)} />
    </Paper>
  </div>
}


export function DepositsTable(props: {
  deposits: any
}) {
  const [source, target] = useSingleton();

  return <>
    <table
        style={{width: '100%'}}
        className={css`
        & td, th {
          text-align: left;
        }
      `}
    >
      <thead>
      <tr>
        <th>Date</th>
        <th>
          Contract <InfoTooltip>
          Every deposit is represented on-chain by a contract.
        </InfoTooltip>
        </th>
        <th>Lot Size</th>
        <th>State</th>
      </tr>
      </thead>
      <tbody>
      {props.deposits.map((deposit: any) => {
        return  <tr key={deposit.id}>
          <td>
            <TimeToNow time={deposit.createdAt} />
          </td>
          <td>
            <Link to={`/deposit/${deposit.id}`}>
              {deposit.contractAddress}
            </Link>
            <a title={"Open on Etherscan"} href={`https://etherscan.io/address/${deposit.contractAddress}`} className={css`
                font-size: 0.8em;
                padding-left: 0.2em;
               `}>
              <ExternalLinkIcon />
            </a>
          </td>
          <td>
            <span style={{color: 'gray', fontSize: '0.8em'}}>BTC</span>&nbsp;{getSatoshisAsBitcoin(deposit.lotSizeSatoshis ?? 0)}
          </td>
          <td>
            <div className={css`
              display: inline-block;
              width: 1.2em;
              height: 1.2em;
              border-radius: 2px;
              padding: 0.2em;
              box-sizing: border-box;
              background-color: ${getStateColor(deposit.currentState)}
            `}>
            </div>
            &nbsp;
            {hasDepositBeenUsedToMint(deposit.tdtToken.owner, deposit.currentState)
                ? <><Tippy content="tBTC was minted" singleton={target}><TBTCIcon /></Tippy>&nbsp;</>
                : ""
            }
            {getNiceStateLabel(deposit.currentState)}
          </td>
        </tr>
      })}
      </tbody>
    </table>
  </>;
}