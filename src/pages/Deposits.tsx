import {gql, useQuery} from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import {getSatoshisAsBitcoin} from "../utils/getSatoshisAsBitcoin";
import {FormattedTime} from "../components/FormattedTime";
import {hasDepositBeenUsedToMint, isVendingMachine} from "../utils/contracts";
import {Paper} from "../design-system/Paper";
import {css} from "emotion";
import {getNiceStateLabel, getStateColor} from "../utils/depositStates";
import { TBTCIcon } from "../design-system/tbtcIcon";
import Tippy, {useSingleton} from "@tippyjs/react";
import { InfoTooltip } from "../components/InfoTooltip";
import {ExternalLinkIcon} from "../components/ExternalLinkIcon";


const DEPOSITS_QUERY = gql`
    query GetExchangeRates {
        deposits(after: 0, first: 300, orderBy: createdAt, orderDirection: desc) {
            id,
            contractAddress,
            lotSizeSatoshis,
            currentState,
            keepAddress,
            createdAt,
            tdtToken {
                owner
            }
#            endOfTerm,
                # you can redeem it if: you are the owner, it is at term, is in courtesy call
                # thus the status is:  
                # canBeRedeemedByAnyone = CourtesyFlag || atTerm
        }
    }
`;

export function Deposits() {
  return  <div style={{padding: '20px'}}>
    <h1 style={{marginTop: 0}}>Deposits</h1>
    <Paper padding>
      <DepositsTable />
    </Paper>
  </div>
}

function DepositsTable() {
  const { loading, error, data } = useQuery(DEPOSITS_QUERY);
  const [source, target] = useSingleton();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {""+ error}</p>;


  return <>
    <Tippy singleton={source} delay={500} />
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
      {data.deposits.map((deposit: any) => {
        return  <tr key={deposit.id}>
          <td>
            <FormattedTime time={deposit.createdAt} />
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
                ? <><Tippy content="Hello" singleton={target}><TBTCIcon /></Tippy>&nbsp;</>
                : ""
            }
            {getNiceStateLabel(deposit.currentState)}


            {/* warning sign if it can be redeemed by anyone (at-term or courtesy call */}
          </td>
        </tr>
      })}
      </tbody>
    </table>
  </>;
}
