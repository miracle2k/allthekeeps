export function isVendingMachine(address: string) {
  return address.toLowerCase() == getVendingMachineAddress().toLowerCase();
}

export function getVendingMachineAddress() {
  return '0x526c08E5532A9308b3fb33b7968eF78a5005d2AC';
}

export function getTDTTokenAddress() {
  return '0x10b66bd1e3b5a936b7f8dbc5976004311037cdf0';
}

// TODO: We just assume that if the owner is the vending machine, then the coins have been minted. this is very lazy and probably wrong.
// Instead, the subgraph has check for mint events, or, for the tdtTotbtc() call.
export function hasDepositBeenUsedToMint(owner: string, state: string) {
  return isVendingMachine(owner) && state == 'ACTIVE'
}