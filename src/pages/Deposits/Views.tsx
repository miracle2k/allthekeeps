import {DateTime} from "luxon";
import {gql, useQuery} from "@apollo/client";
import {NiceStateLabel} from "../../utils/depositStates";
import {useQueryWithTimeTravel} from "../../TimeTravel";
import {SortState, useSort} from "../../components/Table";
import {useEffect, useLayoutEffect, useState} from "react";

export type DepositViewID =
    ''
    | 'active'
    | 'liquidations'
    | 'redeemable'
    | 'unminted'
    | 'operations'
    | 'redemptions'
    | 'notifiable';


export const Views: {
  id: DepositViewID,
  label: string,
  description: string,
  title?: string,
  action?: "make"
}[] = [
  {
    id: "",
    label: "All Deposits",
    description: "All deposits managed by the system.",
    title: "Deposits",
    action: "make"
  },

  {
    id: "operations",
    label: "Deposit Operations",
    description: "Bitcoins entering the system.",
    action: "make"
  },

  {
    id: "redemptions",
    label: "Redemption Operations",
    description: "Bitcoins being taken out of the system."
  },

  {
    id: "liquidations",
    label: "Liquidations & Signer Misbehaviour",
    description: "The interesting stuff."
  },

  {
    id: "redeemable",
    label: "Redeemable",
    description: "Deposits available for redemption by anyone."
  },

  {
    id: "unminted",
    label: "Unminted TDTs",
    description: "Deposits which custody Bitcoin, but no TBTC has been minted."
  },

  {
    id: "notifiable",
    label: "Notifiable Deposits",
    description: "Deposits whose current state has timed out and can be notified."
  },
]


const DEPOSITS_QUERY = gql`
    query GetDeposits(
        $where: Deposit_filter, $orderBy: Deposit_orderBy, $skip: Int, 
        $block: Block_height, $orderDirection: OrderDirection,
        $perPage: Int
    ) {
        deposits(
            first: $perPage,
            skip: $skip,
            orderBy: $orderBy,
            orderDirection: $orderDirection
            where: $where,
            block: $block
        ) {
            id,
            contractAddress,
            lotSizeSatoshis,
            currentState,
            keepAddress,
            updatedAt,
            createdAt,
            redemptionStartedAt,
            currentStateTimesOutAt,
            creator,
            lastActor

            tdtToken {
                owner
            }

            undercollateralizedThresholdPercent,
            severelyUndercollateralizedThresholdPercent,
            bondedECDSAKeep {
                id,
                totalBondAmount,
                publicKey
            }

            ...NiceStateLabel
        }
        stats: statsRecord(id: "current", block: $block) {
            depositCount
        }
    }

    ${NiceStateLabel}
`;

export function useDepositQuery(view: DepositViewID, pageNumber?: number) {
  const where = ({
    "": {},
    active: {'filter_activeLikeState': true},
    liquidations: {'filter_liquidationLikeOrSignerFailureState': true},
    redeemable: {'filter_redeemableAsOf_gt': Math.round(DateTime.utc().toMillis() / 1000)},
    unminted: {'filter_unmintedTDT': true},
    notifiable: {'currentStateTimesOutAt_lt': Math.round(DateTime.utc().toMillis() / 1000)},
    redemptions: {'redemptionStartedAt_not': null},
  } as any)[view || ''] || {};

  const dateColumn: string = ({
    "": "updatedAt",
    operations: "createdAt",
    redemptions: "redemptionStartedAt",
  } as {[key in DepositViewID]: string})[view || ''] || "updatedAt";

  const sortState = useSort(dateColumn);

  // TODO: This would cause two requests!
  const [ready, setReady] = useState(false);
  useEffect(() => {
    sortState.setColumn(dateColumn)
    sortState.setDirection("desc")
    setReady(true);
  }, [view, sortState.setColumn, sortState.setDirection])

  // We would like to load more, but then loading is much slower!
  const perPage = 200;

  const {loading, error, data} = useQueryWithTimeTravel(DEPOSITS_QUERY, {
    variables: {
      where: where,
      skip: perPage * ((pageNumber ?? 1) - 1),
      orderBy: sortState.column,
      orderDirection: sortState.direction,
      perPage
    },
    skip: !ready
  });

  return {
    loading: loading || !ready,
    error, data, dateColumn, view, sortState, perPage};
}

export type UseDepositQuery = ReturnType<typeof useDepositQuery>;