import {gql, useQuery} from "@apollo/client";
import Tippy, {useSingleton} from "@tippyjs/react";
import {css} from "emotion";
import {InfoTooltip} from "../../components/InfoTooltip";
import {TimeToNow} from "../../components/FormattedTime";
import {Link} from "react-router-dom";
import {ExternalLinkIcon} from "../../components/ExternalLinkIcon";
import {getSatoshisAsBitcoin} from "../../utils/getSatoshisAsBitcoin";
import {getNiceStateLabel, getStateBoxStyle} from "../../utils/depositStates";
import {hasDepositBeenUsedToMint} from "../../utils/contracts";
import {TBTCIcon} from "../../design-system/tbtcIcon";
import React from "react";
import {CollaterizationStatusWithPrice} from "../../components/CollateralizationStatus";
import {usePriceFeed} from "../../components/PriceFeed";
import { Table } from "../../components/Table";
import {DateTime} from "luxon";

const DEPOSITS_QUERY = gql`
    query GetDeposits($where: Deposit_filter) {
        deposits(
            after: 0, first: 1000, 
            orderBy: createdAt, orderDirection: desc
            where: $where
        ) {
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


            undercollateralizedThresholdPercent,
            severelyUndercollateralizedThresholdPercent,
            bondedECDSAKeep {
                id,
                totalBondAmount
            }
        }
    }
`;

export function DepositsTable(props: {
  view: 'all'|'active'|'liquidations'|'redeemable'|'unminted'
}) {
  const where = ({
    all: {},
    active: {'filter_activeLikeState': true},
    liquidations: {'filter_liquidationLikeState': true},
    redeemable: {'filter_redeemableAsOf_gt': Math.round(DateTime.utc().toMillis() / 1000)},
    unminted: {'filter_unmintedTDT': true},
  } as any)[props.view || 'all'];

  const { loading, error, data } = useQuery(DEPOSITS_QUERY, {variables: {where: where}});
  const [source, target] = useSingleton();
  const price = usePriceFeed();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {""+ error}</p>;

  return <>
    <Tippy singleton={source} delay={500} />
    <Table
        style={{width: '100%'}}
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
          <td className={css`
            display: flex;
            align-items: center;
          `}>
            <div className={css`
              display: inline-block;
              width: 1.2em;
              height: 1.2em;
              border-radius: 2px;
              padding: 0.2em;
              box-sizing: border-box;
            `} style={getStateBoxStyle(deposit.currentState)}>
            </div>
            &nbsp;
            {hasDepositBeenUsedToMint(deposit.tdtToken.owner, deposit.currentState)
                ? <><Tippy content="tBTC was minted" singleton={target}><TBTCIcon /></Tippy>&nbsp;</>
                : ""
            }
            {getNiceStateLabel(deposit.currentState)}

            {/* warning sign if it can be redeemed by anyone (at-term or courtesy call */}
          </td>
          <td>
            <CollaterizationStatusWithPrice deposit={deposit} price={price} />
          </td>
        </tr>
      })}
      </tbody>
    </Table>
  </>;
}