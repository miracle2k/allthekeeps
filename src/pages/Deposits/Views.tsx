import {DateTime} from "luxon";
import {gql, useQuery} from "@apollo/client";
import {NiceStateLabel} from "../../utils/depositStates";
import {useQueryWithTimeTravel} from "../../TimeTravel";

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
    query GetDeposits($where: Deposit_filter, $orderBy: Deposit_orderBy, $skip: Int, $block: Block_height) {
        deposits(
            first: 500,
            skip: $skip,
            orderBy: $orderBy,
            orderDirection: desc
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
            currentStateTimesOutAt

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
                totalBondAmount,
                publicKey
            }

            ...NiceStateLabel
        }
        stats: statsRecord(id: "current") {
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

  const perPage = 500;

  const {loading, error, data} = useQueryWithTimeTravel(DEPOSITS_QUERY, {
    variables: {
      where: where,
      orderBy: dateColumn,
      skip: perPage * ((pageNumber ?? 1) - 1)
    }
  });

  return {loading, error, data, dateColumn, view};
}

export type UseDepositQuery = ReturnType<typeof useDepositQuery>;