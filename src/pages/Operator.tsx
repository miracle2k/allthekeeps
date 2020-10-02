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
import {getNiceStateLabel, getStateBoxStyle, getStateTooltip} from "../utils/depositStates";
import {hasDepositBeenUsedToMint} from "../utils/contracts";
import {TBTCIcon} from "../design-system/tbtcIcon";
import {Helmet} from "react-helmet";
import {getWeiAsEth} from "../utils/getWeiAsEth";
import { Box } from "../components/Box";
import {CollaterizationStatusWithPrice} from "../components/CollateralizationStatus";
import {usePriceFeed} from "../components/PriceFeed";
import { Table } from "../components/Table";


const OPERATOR_QUERY = gql`
    query GetOperator($id: String!) {
        operator(id: $id) {
            id,
            address,
            bonded,
            unboundAvailable,
            stakedAmount,
            keeps(after: 0, first: 300, orderBy: createdAt, orderDirection: desc) {
                id,
                # TODO: How much is bonded in this keep for this operator?
                totalBondAmount,
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

                    undercollateralizedThresholdPercent,
                    severelyUndercollateralizedThresholdPercent,
                    bondedECDSAKeep {
                        id,
                        totalBondAmount
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

const formatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2
});


export function Content() {
  let { operatorId } = useParams<any>();
  const { loading, error, data } = useQuery(OPERATOR_QUERY, {variables: {id: operatorId}});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {""+ error}</p>;

  const total = (parseFloat(data.operator.unboundAvailable) + parseFloat(data.operator.bonded));
  const bonded = parseFloat(data.operator.bonded);

  return <div>
    <div className={css`
      display: flex;
      flex-direction: row;
      font-size: 30px;
      margin-bottom: 15px;
  `}>
      Operator: {data.operator.address}
    </div>


    <div className={css`
      display: flex;
      flex-direction: row;
      & > * {
        margin-right: 20px;
      }
  `}>
      <Box label={"bonded"}>
        <div>{formatter.format(data.operator.bonded)} ETH</div>

        {total > 0 ? <div style={{fontSize: '20px', color: 'gray'}}>
          {formatter.format((bonded / total * 100))}% of {formatter.format(total)} ETH
        </div> : null}
      </Box>

      <Box label={"available to bond"}>
        <div>
          {formatter.format(data.operator.unboundAvailable)} ETH
        </div>
      </Box>

      <Box label={"staked"}>
        <div>
          {formatter.format(data.operator.stakedAmount)} KEEP
        </div>
      </Box>
    </div>


    <Paper padding>
      <h3 style={{marginTop: 0}}>Keeps</h3>
      <KeepsTable keeps={data.operator.keeps} />
    </Paper>
  </div>
}


export function KeepsTable(props: {
  keeps: any
}) {
  const [source, target] = useSingleton();
  const price = usePriceFeed();

  // const totalActive = props.keeps.filter((keep: any) => {
  //   return (
  //       keep.deposit.currentState == 'ACTIVE' ||
  //       keep.deposit.currentState == 'AWAITING_SIGNER_SETUP' ||
  //       keep.deposit.currentState == 'AWAITING_BTC_FUNDING_PROOF'
  //   )
  // }).map((keep: any) => parseFloat(keep.totalBondAmount) / 3).reduce((a: any, b: any) => a + b, 0)

  return <>
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
        <th>Collateralization</th>
        <th>Bond</th>
      </tr>
      </thead>
      <tbody>
      {props.keeps.map((keep: any) => {
        const deposit = keep.deposit;
        return  <tr key={deposit.id}>
          <td>
            <TimeToNow
                time={deposit.createdAt}
            />
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
          </td>

          <td>
            <CollaterizationStatusWithPrice deposit={deposit} price={price} highlightNormal={true} />
          </td>

          <td>
            {/*Get the real number from the contract. */}
            <span style={{color: 'gray', fontSize: '0.8em'}}>ETH</span> {formatter.format(getWeiAsEth(keep.totalBondAmount / 3))}
          </td>
        </tr>
      })}
      </tbody>
    </Table>
  </>;
}