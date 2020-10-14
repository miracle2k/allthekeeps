import Tippy, {useSingleton} from "@tippyjs/react";
import {usePriceFeed} from "../../components/PriceFeed";
import {useEtherscanDomain} from "../../NetworkContext";
import {SortableHeader, Table, useSort} from "../../components/Table";
import {InfoTooltip} from "../../components/InfoTooltip";
import {TimeToNow} from "../../components/FormattedTime";
import {Link} from "react-router-dom";
import {css} from "emotion";
import {ExternalLinkIcon} from "../../components/ExternalLinkIcon";
import {getSatoshisAsBitcoin} from "../../utils/getSatoshisAsBitcoin";
import {getNiceStateLabel, getStateBoxStyle, NiceStateLabel} from "../../utils/depositStates";
import {hasDepositBeenUsedToMint} from "../../utils/contracts";
import {TBTCIcon} from "../../design-system/tbtcIcon";
import {CollaterizationStatusWithPrice} from "../../components/CollateralizationStatus";
import {getWeiAsEth} from "../../utils/getWeiAsEth";
import React from "react";
import {gql, useQuery} from "@apollo/client";
import {GetOperatorKeepsQuery, GetOperatorQuery} from "../../generated/graphql";

const formatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2
});

const KEEPS_QUERY = gql`
    query GetOperatorKeeps($id: ID!, $orderBy: BondedECDSAKeep_orderBy, $orderDirection: OrderDirection) {
        operator(id: $id) {
            keeps(first: 1000, orderBy: $orderBy, orderDirection: $orderDirection) {
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

                    # Should take it from the parent intead.
                    bondedECDSAKeep {
                        id,
                        totalBondAmount
                    },

                    ...NiceStateLabel
                }
            }
        }
    }

    ${NiceStateLabel}
`;


export function KeepsTable(props: {
  operatorId: string
}) {
  const [source, target] = useSingleton();
  const price = usePriceFeed();
  const etherscan = useEtherscanDomain();
  const sortState = useSort("createdAt");

  const { loading, error, data } = useQuery<GetOperatorKeepsQuery>(KEEPS_QUERY, {variables: {
    id: props.operatorId,
    orderBy: sortState.column,
    orderDirection: sortState.direction
  }});

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error :( {""+ error}</p>;

  const keeps = data.operator?.keeps;

  // const totalActive = props.keeps.filter((keep: any) => {
  //   return (
  //       keep.deposit.currentState == 'ACTIVE' ||
  //       keep.deposit.currentState == 'AWAITING_SIGNER_SETUP' ||
  //       keep.deposit.currentState == 'AWAITING_BTC_FUNDING_PROOF'
  //   )
  // }).map((keep: any) => parseFloat(keep.totalBondAmount) / 3).reduce((a: any, b: any) => a + b, 0)

  return <>
    <Table style={{width: '100%'}}>
      <thead>
      <tr>
        <th>
          <SortableHeader fieldId={"createdAt"} state={sortState}>
            Created
          </SortableHeader>
        </th>
        <th>
          Contract <InfoTooltip>
          Every deposit is represented on-chain by a contract.
        </InfoTooltip>
        </th>
        <th>
          Lot Size
        </th>
        <th>State</th>
        <th>Collateralization</th>
        <th>
          <SortableHeader fieldId={"totalBondAmount"} state={sortState}>
            Bond
          </SortableHeader>
        </th>
      </tr>
      </thead>
      <tbody>
      {keeps?.map((keep: any) => {
        const deposit = keep.deposit;
        return <tr key={deposit.id}>
          <td>
            <TimeToNow
                time={deposit.createdAt}
            />
          </td>
          <td>
            <Link to={`/deposit/${deposit.id}`}>
              {deposit.contractAddress}
            </Link>
            <a title={"Open on Etherscan"} href={`https://${etherscan}/address/${deposit.contractAddress}`}
               className={css`
                font-size: 0.8em;
                padding-left: 0.2em;
               `}>
              <ExternalLinkIcon/>
            </a>
          </td>
          <td>
            <span style={{
              color: 'gray',
              fontSize: '0.8em'
            }}>BTC</span>&nbsp;{getSatoshisAsBitcoin(deposit.lotSizeSatoshis ?? 0)}
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
                ? <><Tippy content="TBTC was minted" singleton={target}><TBTCIcon/></Tippy>&nbsp;</>
                : ""
            }
            {getNiceStateLabel(deposit)}
          </td>

          <td>
            <CollaterizationStatusWithPrice deposit={deposit} price={price} highlightNormal={true}/>
          </td>

          <td>
            {/*Get the real number from the contract. */}
            <span style={{
              color: 'gray',
              fontSize: '0.8em'
            }}>ETH</span> {formatter.format(getWeiAsEth(keep.totalBondAmount / 3))}
          </td>
        </tr>
      })}
      </tbody>
    </Table>
  </>;
}