// This really needs a better name, but we mean to convert the TBTC ERC20 decials here.
export function getSatoshiesAsTBTC(satoshis: number): number {
  return satoshis * 0.000000000000000001;
}