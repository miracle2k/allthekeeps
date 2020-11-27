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

  if (error) return <p>Error :( {""+ error}</p>;

  const keeps = data?.operator?.keeps;

  // const totalActive = props.keeps.filter((keep: any) => {
  //   return (
  //       keep.deposit.currentState == 'ACTIVE' ||
  //       keep.deposit.currentState == 'AWAITING_SIGNER_SETUP' ||
  //       keep.deposit.currentState == 'AWAITING_BTC_FUNDING_PROOF'
  //   )
  // }).map((keep: any) => parseFloat(keep.totalBondAmount) / 3).reduce((a: any, b: any) => a + b, 0)

  return <>
    <Tippy singleton={source} delay={500} />
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
            <RewardStatus status={keep.stakedropRewardStatus} target={target} />
          </td>
        </tr>
      })}
      </tbody>
    </Table>
  </>;
}


const StakeDropIcons = ({
  //https://icons8.com/icon/set/cross/flat_round (32x32)
  "INELIGABLE": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzIiIGhlaWdodD0iMzIiCnZpZXdCb3g9IjAgMCA1MTIgNTEyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxwYXRoIGZpbGw9IiNFMDRGNUYiIGQ9Ik01MDQuMSwyNTZDNTA0LjEsMTE5LDM5Myw3LjksMjU2LDcuOUMxMTksNy45LDcuOSwxMTksNy45LDI1NkM3LjksMzkzLDExOSw1MDQuMSwyNTYsNTA0LjFDMzkzLDUwNC4xLDUwNC4xLDM5Myw1MDQuMSwyNTZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTI4NSwyNTZsNzIuNS04NC4yYzcuOS05LjIsNi45LTIzLTIuMy0zMWMtOS4yLTcuOS0yMy02LjktMzAuOSwyLjNMMjU2LDIyMi40bC02OC4yLTc5LjJjLTcuOS05LjItMjEuOC0xMC4yLTMxLTIuM2MtOS4yLDcuOS0xMC4yLDIxLjgtMi4zLDMxTDIyNywyNTZsLTcyLjUsODQuMmMtNy45LDkuMi02LjksMjMsMi4zLDMxYzQuMSwzLjYsOS4yLDUuMywxNC4zLDUuM2M2LjIsMCwxMi4zLTIuNiwxNi42LTcuNmw2OC4yLTc5LjJsNjguMiw3OS4yYzQuMyw1LDEwLjUsNy42LDE2LjYsNy42YzUuMSwwLDEwLjItMS43LDE0LjMtNS4zYzkuMi03LjksMTAuMi0yMS44LDIuMy0zMUwyODUsMjU2eiI+PC9wYXRoPjwvc3ZnPg==",
  //https://icons8.com/icon/set/cross/flat_round (32x32, #CCCCCC)
  "TERMINATION_REPORTED": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzIiIGhlaWdodD0iMzIiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTE2OS4zNDYwOSw4NmMwLC00Ni4wMjM0NCAtMzcuMzIyNjYsLTgzLjM0NjA5IC04My4zNDYwOSwtODMuMzQ2MDljLTQ2LjAyMzQ0LDAgLTgzLjM0NjA5LDM3LjMyMjY2IC04My4zNDYwOSw4My4zNDYwOWMwLDQ2LjAyMzQ0IDM3LjMyMjY2LDgzLjM0NjA5IDgzLjM0NjA5LDgzLjM0NjA5YzQ2LjAyMzQ0LDAgODMuMzQ2MDksLTM3LjMyMjY2IDgzLjM0NjA5LC04My4zNDYwOXoiIGZpbGw9IiNjY2NjY2MiPjwvcGF0aD48cGF0aCBkPSJNOTUuNzQyMTksODZsMjQuMzU1NDcsLTI4LjI4NTk0YzIuNjUzOTEsLTMuMDkwNjIgMi4zMTc5NywtNy43MjY1NiAtMC43NzI2NiwtMTAuNDE0MDZjLTMuMDkwNjMsLTIuNjUzOTEgLTcuNzI2NTYsLTIuMzE3OTcgLTEwLjM4MDQ3LDAuNzcyNjZsLTIyLjk0NDUzLDI2LjYzOTg0bC0yMi45MTA5NCwtMjYuNjA2MjVjLTIuNjUzOTEsLTMuMDkwNjIgLTcuMzIzNDQsLTMuNDI2NTYgLTEwLjQxNDA2LC0wLjc3MjY2Yy0zLjA5MDYyLDIuNjUzOTEgLTMuNDI2NTYsNy4zMjM0NCAtMC43NzI2NiwxMC40MTQwNmwyNC4zNTU0NywyOC4yNTIzNGwtMjQuMzU1NDcsMjguMjg1OTRjLTIuNjUzOTEsMy4wOTA2MiAtMi4zMTc5Nyw3LjcyNjU2IDAuNzcyNjYsMTAuNDE0MDZjMS4zNzczNCwxLjIwOTM3IDMuMDkwNjIsMS43ODA0NyA0LjgwMzkxLDEuNzgwNDdjMi4wODI4MSwwIDQuMTMyMDMsLTAuODczNDQgNS41NzY1NiwtMi41NTMxM2wyMi45MTA5NCwtMjYuNjA2MjVsMjIuOTEwOTQsMjYuNjA2MjVjMS40NDQ1MywxLjY3OTY5IDMuNTI3MzQsMi41NTMxMyA1LjU3NjU2LDIuNTUzMTNjMS43MTMyOCwwIDMuNDI2NTYsLTAuNTcxMDkgNC44MDM5MSwtMS43ODA0N2MzLjA5MDYzLC0yLjY1MzkxIDMuNDI2NTYsLTcuMzIzNDQgMC43NzI2NiwtMTAuNDE0MDZ6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4=",
  // https://icons8.com/icons/set/checkmark (32x32, #CCCCCC)
  "DISPENSED": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48Zz48cGF0aCBkPSJNMTY5LjM0NjA5LDg2YzAsLTQ2LjAyMzQ0IC0zNy4zMjI2NiwtODMuMzQ2MDkgLTgzLjM0NjA5LC04My4zNDYwOWMtNDYuMDIzNDQsMCAtODMuMzQ2MDksMzcuMzIyNjYgLTgzLjM0NjA5LDgzLjM0NjA5YzAsNDYuMDIzNDQgMzcuMzIyNjYsODMuMzQ2MDkgODMuMzQ2MDksODMuMzQ2MDljNDYuMDIzNDQsMCA4My4zNDYwOSwtMzcuMzIyNjYgODMuMzQ2MDksLTgzLjM0NjA5eiIgZmlsbD0iI2NjY2NjYyI+PC9wYXRoPjxwYXRoIGQ9Ik0xMzEuODg5MDYsNTguMDgzNTljLTEuOTQ4NDQsLTUuMDcyNjYgLTUuOTQ2MDksLTQuMjY2NDEgLTEwLjI3OTY5LC0zLjM5Mjk3Yy0yLjU4NjcyLDAuNTM3NSAtMTQuMTA5MzcsMy44OTY4NyAtMzIuMjgzNTksMjMuMTEyNWMtNy41NTg1OSw3Ljk2MTcyIC0xMi41MzA0NywxNC4zMTA5NCAtMTUuODIyNjYsMTkuMTQ4NDRjLTIuMDE1NjIsLTIuNDUyMzQgLTQuMywtNS4xMDYyNSAtNi43MTg3NSwtNy40OTE0MWMtNy40MjQyMiwtNy40MjQyMiAtMTUuNzIxODcsLTEyLjUzMDQ3IC0xNi4wNTc4MSwtMTIuNzMyMDNjLTMuNDYwMTYsLTIuMTE2NDEgLTcuOTk1MzEsLTEuMDQxNDEgLTEwLjE0NTMxLDIuNDUyMzRjLTIuMTE2NDEsMy40NjAxNiAtMS4wNDE0MSw3Ljk5NTMxIDIuNDE4NzUsMTAuMTQ1MzFjMC4wNjcxOSwwLjAzMzU5IDcuMTg5MDYsNC40MzQzOCAxMy4zMDMxMywxMC41ODIwM2M2LjI0ODQ0LDYuMjQ4NDQgMTEuOTI1NzgsMTQuNzE0MDYgMTEuOTkyOTcsMTQuODE0ODRjMS4zNzczNCwyLjA4MjgxIDMuNjk1MzEsMy4yOTIxOSA2LjE0NzY2LDMuMjkyMTljMC40MDMxMiwwIDAuODM5ODQsLTAuMDMzNTkgMS4yNzY1NiwtMC4xMDA3OGMyLjg4OTA2LC0wLjUwMzkxIDUuMTczNDQsLTIuNjUzOTEgNS44Nzg5MSwtNS40NzU3OGMwLjAzMzU5LC0wLjA2NzE5IDIuOTU2MjUsLTguMTYzMjggMTguMzc1NzgsLTI0LjQyMjY2YzEyLjQyOTY5LC0xMy4xMzUxNiAyMC43MjczNCwtMTcuMzAwNzggMjMuNjE2NDEsLTE4LjQ0Mjk3YzAuMDMzNTksMCAwLjAzMzU5LDAgMC4xMDA3OCwwYzAsMCAwLjEwMDc4LC0wLjAzMzU5IDAuMjY4NzUsLTAuMTM0MzhjMC41MDM5MSwtMC4yMDE1NiAwLjc3MjY2LC0wLjI2ODc1IDAuNzcyNjYsLTAuMjY4NzVjLTAuMTM0MzcsMC4wMzM1OSAtMC4yMDE1NiwwLjAzMzU5IC0wLjIwMTU2LDAuMDMzNTl2LTAuMDMzNTljMS4zNDM3NSwtMC41NzEwOSAzLjgyOTY5LC0xLjY0NjA5IDMuODYzMjgsLTEuNjc5NjljMy43Mjg5MSwtMS42MTI1IDQuOTcxODcsLTUuNjQzNzUgMy40OTM3NSwtOS40MDYyNXoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==",
  // https://icons8.com/icons/set/checkmark (32x32, #23AE5A)
  "WITHDRAWABLE": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48Zz48cGF0aCBkPSJNMTY5LjM0NjA5LDg2YzAsLTQ2LjAyMzQ0IC0zNy4zMjI2NiwtODMuMzQ2MDkgLTgzLjM0NjA5LC04My4zNDYwOWMtNDYuMDIzNDQsMCAtODMuMzQ2MDksMzcuMzIyNjYgLTgzLjM0NjA5LDgzLjM0NjA5YzAsNDYuMDIzNDQgMzcuMzIyNjYsODMuMzQ2MDkgODMuMzQ2MDksODMuMzQ2MDljNDYuMDIzNDQsMCA4My4zNDYwOSwtMzcuMzIyNjYgODMuMzQ2MDksLTgzLjM0NjA5eiIgZmlsbD0iIzIzYWU1YSI+PC9wYXRoPjxwYXRoIGQ9Ik0xMzEuODg5MDYsNTguMDgzNTljLTEuOTQ4NDQsLTUuMDcyNjYgLTUuOTQ2MDksLTQuMjY2NDEgLTEwLjI3OTY5LC0zLjM5Mjk3Yy0yLjU4NjcyLDAuNTM3NSAtMTQuMTA5MzcsMy44OTY4NyAtMzIuMjgzNTksMjMuMTEyNWMtNy41NTg1OSw3Ljk2MTcyIC0xMi41MzA0NywxNC4zMTA5NCAtMTUuODIyNjYsMTkuMTQ4NDRjLTIuMDE1NjIsLTIuNDUyMzQgLTQuMywtNS4xMDYyNSAtNi43MTg3NSwtNy40OTE0MWMtNy40MjQyMiwtNy40MjQyMiAtMTUuNzIxODcsLTEyLjUzMDQ3IC0xNi4wNTc4MSwtMTIuNzMyMDNjLTMuNDYwMTYsLTIuMTE2NDEgLTcuOTk1MzEsLTEuMDQxNDEgLTEwLjE0NTMxLDIuNDUyMzRjLTIuMTE2NDEsMy40NjAxNiAtMS4wNDE0MSw3Ljk5NTMxIDIuNDE4NzUsMTAuMTQ1MzFjMC4wNjcxOSwwLjAzMzU5IDcuMTg5MDYsNC40MzQzOCAxMy4zMDMxMywxMC41ODIwM2M2LjI0ODQ0LDYuMjQ4NDQgMTEuOTI1NzgsMTQuNzE0MDYgMTEuOTkyOTcsMTQuODE0ODRjMS4zNzczNCwyLjA4MjgxIDMuNjk1MzEsMy4yOTIxOSA2LjE0NzY2LDMuMjkyMTljMC40MDMxMiwwIDAuODM5ODQsLTAuMDMzNTkgMS4yNzY1NiwtMC4xMDA3OGMyLjg4OTA2LC0wLjUwMzkxIDUuMTczNDQsLTIuNjUzOTEgNS44Nzg5MSwtNS40NzU3OGMwLjAzMzU5LC0wLjA2NzE5IDIuOTU2MjUsLTguMTYzMjggMTguMzc1NzgsLTI0LjQyMjY2YzEyLjQyOTY5LC0xMy4xMzUxNiAyMC43MjczNCwtMTcuMzAwNzggMjMuNjE2NDEsLTE4LjQ0Mjk3YzAuMDMzNTksMCAwLjAzMzU5LDAgMC4xMDA3OCwwYzAsMCAwLjEwMDc4LC0wLjAzMzU5IDAuMjY4NzUsLTAuMTM0MzhjMC41MDM5MSwtMC4yMDE1NiAwLjc3MjY2LC0wLjI2ODc1IDAuNzcyNjYsLTAuMjY4NzVjLTAuMTM0MzcsMC4wMzM1OSAtMC4yMDE1NiwwLjAzMzU5IC0wLjIwMTU2LDAuMDMzNTl2LTAuMDMzNTljMS4zNDM3NSwtMC41NzEwOSAzLjgyOTY5LC0xLjY0NjA5IDMuODYzMjgsLTEuNjc5NjljMy43Mjg5MSwtMS42MTI1IDQuOTcxODcsLTUuNjQzNzUgMy40OTM3NSwtOS40MDYyNXoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==",
} as any);


const StakeDropStatusExplainer = ({
  "INELIGABLE": "There is no reward for this keep, but it needs to be notified to have the reward allocation added back into the pool for future intervals.",
  "TERMINATION_REPORTED": "There is no reward for this keep, and the amount initially allocated for it has been transferred back into the pool.",
  "DISPENSED": "The reward for this keep has been dispensed (but may not have been withdrawn).",
  "WITHDRAWABLE": "The reward for this keep has not yet been dispensed.",
} as any);

function RewardStatus(props: {
  status: string,
  target: any
}) {
  const url = StakeDropIcons[props.status];
  if (url) {
    return <Tippy content={StakeDropStatusExplainer[props.status]} singleton={props.target}>
      <img style={{width: 14, height: 14}} src={url} />
    </Tippy>
  }
  return null;
}