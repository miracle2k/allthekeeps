import React from "react";

export function getNiceStateLabel(state: string) {
  return ({
    'AWAITING_SIGNER_SETUP': "Awaiting Signer Setup",
    'AWAITING_BTC_FUNDING_PROOF': "Awaiting BTC Funding Proof",
    'AWAITING_WITHDRAWAL_SIGNATURE': 'Awaiting Withdrawal Signature',
    'REDEEMED': 'Redeemed',
    'ACTIVE': "Active",
    'FAILED_SETUP': "Failed Setup",
    "LIQUIDATED": "Liquidated",
    "LIQUIDATION_IN_PROGRESS": "Liquidation In Progress"
  } as any)[state] || state;
}

export function getStateColor(state: string) {
  let inProgress = '#ffb74d';
  let failed = '#F44336';
  let redeemed = 'silver';
  let active = '#4caf50';

  return ({
    'AWAITING_SIGNER_SETUP': inProgress,
    'AWAITING_BTC_FUNDING_PROOF': inProgress,
    'AWAITING_WITHDRAWAL_SIGNATURE': inProgress,
    'REDEEMED': redeemed,
    'ACTIVE': active,
    'FAILED_SETUP': failed,
    "LIQUIDATED": failed,
    "LIQUIDATION_IN_PROGRESS": inProgress
  } as any)[state] || "transparent";
}

export function getStateTooltip(state: string) {
  const text = ({
    'REDEEMED': "The original BTC have been released, and the deposit is now closed.",
    "LIQUIDATION_IN_PROGRESS": "The funds backing this deposit are being auctioned off."
  } as any)[state] || "";

  return text;
}