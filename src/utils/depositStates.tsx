import gql from 'graphql-tag';
import React from "react";
import {NiceStateLabelFragment} from "../generated/graphql";

export const NiceStateLabel = gql`
    fragment NiceStateLabel on Deposit {
        currentState,
        bondedECDSAKeep {
            publicKey
        },
        depositSetup {
            failureReason
        }
    }
`

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
    'FAILED_SETUP': 'transparent',
    "LIQUIDATED": failed,
    "LIQUIDATION_IN_PROGRESS": inProgress
  } as any)[state] || "transparent";

  const borderColor = ({
    'FAILED_SETUP': failed,
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