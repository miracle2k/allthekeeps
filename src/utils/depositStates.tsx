import { gql } from '@apollo/client';
import React, {useState} from "react";
import {NiceStateLabelFragment} from "../generated/graphql";
import {dateTimeFrom} from "../components/FormattedTime";
import {useInterval} from "./useInterval";
import {useIsTimeTravel} from "../TimeTravel";

export const NiceStateLabel = gql`
    fragment NiceStateLabel on Deposit {
        currentState,
        bondedECDSAKeep {
            publicKey
        },
        depositSetup {
            failureReason
        },
        currentStateTimesOutAt,
        updatedAt
    }
`;

/**
 * Percentage of the current phase of the deposit that has passed, for example, 50% until AWAITING_BTC_FUNDING
 * times out. Returns `undefined` if the current state does not expire.
 */
export function getTimeRemaining(deposit: NiceStateLabelFragment) {
  if (!deposit.currentStateTimesOutAt) { return; }

  const updatedAt = dateTimeFrom(deposit.updatedAt);
  const currentStateTimesOutAt = dateTimeFrom(deposit.currentStateTimesOutAt);

  const {seconds: totalSeconds} = currentStateTimesOutAt.diff(updatedAt, ['seconds']);
  const {seconds: secondsNow} = currentStateTimesOutAt.diffNow(['seconds']);
  const percentage = Math.min(1 - (secondsNow / totalSeconds), 1);

  return {remaining: secondsNow, total: totalSeconds, percentage};
}

/**
 * Self-updating hook version of `getTimeRemaining()`.
 *
 * TODO: If we have a lot of "avaiting funding proof", this gets slow. We should use a shared, global timer.
 * Or, use https://reactjs.org/docs/concurrent-mode-adoption.html
 */
export function useTimeRemaining(deposit: NiceStateLabelFragment, interval?: number) {
  const isTimeTravel = useIsTimeTravel();
  const [value, setValue] = useState(isTimeTravel ? null : getTimeRemaining(deposit));
  useInterval(() => {
    setValue(getTimeRemaining(deposit));
  }, (isTimeTravel ? null : (interval ?? 0.8) * 1000));
  return value;
}


export function getNiceStateLabel(deposit: NiceStateLabelFragment) {
  const {currentState: state, depositSetup} = deposit;
  const failedSetupReason = depositSetup?.failureReason || "";

  if (state == 'AWAITING_SIGNER_SETUP' && deposit.bondedECDSAKeep?.publicKey) {
    return "Awaiting Funding";
  }

  if (state == 'FAILED_SETUP' && failedSetupReason) {
    return ({
      'FUNDING_TIMEOUT': 'Funding Timeout',
      'SIGNER_SETUP_FAILED_DEPOSITOR': 'Funding Timeout',
      'SIGNER_SETUP_FAILED': 'Signer Setup Failed',
    } as any)[failedSetupReason] || "Setup Failed";
  }

  return ({
    'AWAITING_SIGNER_SETUP': "Awaiting Signer Setup",
    'AWAITING_BTC_FUNDING_PROOF': "Awaiting Funding Proof",
    'AWAITING_WITHDRAWAL_SIGNATURE': 'Awaiting Withdrawal Signature',
    'AWAITING_WITHDRAWAL_PROOF': 'Awaiting Withdrawal Proof',
    'REDEEMED': 'Redeemed',
    'ACTIVE': "Active",
    'COURTESY_CALL': "Courtesy Called",
    'FAILED_SETUP': "Setup Failed",
    "LIQUIDATED": "Liquidated",
    "LIQUIDATION_IN_PROGRESS": "Liquidation In Progress"
  } as any)[state || ""] || state;
}

export function getStateBoxStyle(state: string) {
  let inProgress = '#ffb74d';
  let failed = '#F44336';
  let redeemed = 'silver';
  let active = '#4caf50';

  const color = ({
    'AWAITING_SIGNER_SETUP': inProgress,
    'AWAITING_BTC_FUNDING_PROOF': inProgress,
    'AWAITING_WITHDRAWAL_SIGNATURE': inProgress,
    'AWAITING_WITHDRAWAL_PROOF': inProgress,
    'REDEEMED': redeemed,
    'ACTIVE': active,
    'COURTESY_CALL': '#ff9730', // #dfc51df7
    'FAILED_SETUP': 'transparent',
    "LIQUIDATED": failed,
    "LIQUIDATION_IN_PROGRESS": '#ffcdd2'
  } as any)[state] || "transparent";

  const borderColor = ({
    'FAILED_SETUP': failed,
    "LIQUIDATION_IN_PROGRESS": failed
  } as any)[state] || color;

  return {
    backgroundColor: color,
    border: `1px solid ${borderColor}`
  };
}

export function getStateTooltip(state: string) {
  const text = ({
    'REDEEMED': "The original BTC have been released, and the deposit is now closed.",
    "LIQUIDATION_IN_PROGRESS": "The funds backing this deposit are being auctioned off."
  } as any)[state] || "";

  return text;
}