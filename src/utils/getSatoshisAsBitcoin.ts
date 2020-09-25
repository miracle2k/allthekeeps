export function getSatoshisAsBitcoin(satoshis: number): number {
  return satoshis / 100000000;
}