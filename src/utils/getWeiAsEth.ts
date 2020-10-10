export function getWeiAsEth(weis: number): number {
  return weis * 0.000000000000000001;
}

export function getWeiAsGwei(weis: number): number {
  return weis / 1000_000_000;

}