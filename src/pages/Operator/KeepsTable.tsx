import Tippy, {useSingleton} from "@tippyjs/react";
import {usePriceFeed} from "../../components/PriceFeed";
import {useEtherscanDomain} from "../../NetworkContext";
import {SortableHeader, Table, useSort} from "../../components/Table";
import {InfoTooltip} from "../../components/InfoTooltip";
import {TimeToNow} from "../../components/FormattedTime";
import {css} from "emotion";
import {ExternalLinkIcon} from "../../components/ExternalLinkIcon";
import {getSatoshisAsBitcoin} from "../../utils/getSatoshisAsBitcoin";
import {getNiceStateLabel, getStateBoxStyle, NiceStateLabel} from "../../utils/depositStates";
import {hasDepositBeenUsedToMint} from "../../utils/contracts";
import {TBTCIcon} from "../../design-system/tbtcIcon";
import {CollaterizationStatusWithPrice} from "../../components/CollateralizationStatus";
import {getWeiAsEth} from "../../utils/getWeiAsEth";
import React from "react";
import {gql} from "@apollo/client";
import {GetOperatorKeepsQuery} from "../../generated/graphql";
import {useQueryWithTimeTravel} from "../../TimeTravel";
import { Link } from "../../components/Link";

const formatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2
});

const KEEPS_QUERY = gql`
    query GetOperatorKeeps($id: ID!, $orderBy: BondedECDSAKeep_orderBy, $orderDirection: OrderDirection, $block: Block_height) {
        operator(id: $id, block: $block) {
            keeps(first: 1000, orderBy: $orderBy, orderDirection: $orderDirection) {
                id,
                # TODO: How much is bonded in this keep for this operator?
                totalBondAmount,
                stakedropRewardStatus,
                stakedropInterval { number }
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

  const { loading, error, data } = useQueryWithTimeTravel<GetOperatorKeepsQuery>(KEEPS_QUERY, {variables: {
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
        <th>
          Stakedrop
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
            <Link to={`/deposit/${deposit.contractAddress}`}>
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

          <td>
            <RewardStatus keep={keep} />
          </td>
        </tr>
      })}
      </tbody>
    </Table>
  </>;
}


function RewardStatus(props: {
  keep: any
}) {
  if (props.keep.stakedropRewardStatus === 'DISPENSED') {
    return <img style={{width: 14, height: 14}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADq0lEQVRYhb2XTU9iZxTHf+fyGotCIn2JnYgSp9hYg4WrZddv0MUkk3HRtF100k1XTRdNP0CTWbTpopum+0ndzFdoMnFhEDBkUtPUQSN0IKOYVBBE7/U+s1Cub4AgxP/uuec8z/9/zz3nOecKPSKTyYydnJzMaZr2ATB09rhuWda/IrKm63qpl/OkG6eVlZV3nU7nN8Ai8OEN7n8DSy6X6/doNLrTl4BsNvuWYRjfAj8CI92IvYAa8Jtpmj8lEolKzwJSqdQnwDNgrEfiq3illHowPz+fbGXUWj1Mp9OPgL8GQA7wvog8X11d/aKV8VoEUqnUQ2Cpla1PKOBzXdefthWQTqfjSqnnnGf3oNFQSn168XPYApaXl4e9Xu8/DCbsnfCfy+WajkajNbiQA16v9/s7IAe4ZxjGd82FgF3nLwHfHQgAqLpcrqloNLqjAZxdMgMhFxGCwSCRSITZ2VkCgUArt2HTNL+G80+wOAhyr9fL9PQ0oVAIn8+H2+1mZKT1/aWUWgSQTCYzZlnWq37JA4EAk5OTaNr51VKpVMjn8xwdHbXUYFnWmNOyrI/7JR8dHSUUCiFyWlT1ep1CocDBwUGnbeJwOOacQLidh8/nY2JiglqtRqFQwDTNaz7BYJBQKGSvd3d3KRQKKKVuFG5Z1pQT8Hd6M4/Hg8fjwefzkcvlqNfrtt3v9zM+Pm6vi8UipVJP3djfshc0sbOzg2EYALjdbiKRCH7/qd6hoSHC4bAd9lKp1Cs5cFoF++2Mh4eHrK+vU61WT501jXA4jN/vJxwO2wlXLpcpFou9k2va/xqw2cnJNE02NjbY29uzRUxNTeHxeACoVqvk8/meyc+Q04DMTV5KKba3t6lULs8VpmmytbXVVcK1OtYwjDXtbIZb70bE5ubmpZouFot2jtwCLxKJxOtmEv7ZzY6TkxNyuRyNRoP9/X3K5fJtyW1OAchkMm9blvWS3ue+26JqmuZ9OwKxWGxXRH65I3KUUk8SicRruDwP/Az03RO6QN7tdv/aXNgCZmZmDoDPgHqrXQNCQyn1sDkNXRIAoOt6BnjM6QA5aCgR+erqeH7tKtZ1/amILDLYSDSUUl/G4/Glq4a2o3cymZzXNO0ZcK9P8ryIPIjH4+lWxrbNaGFhYRWIAD/QoV90QA140mg0PmpHDl3+fGSz2XeOj48fi8gjYLaDqwJeiMiSiPwRi8V2bzq757+fZDL5nsPhmFNK3ReRYQClVFVENgzDWGvWd7d4A5n7W1opmmjJAAAAAElFTkSuQmCC" />;
  }
  return null;
}