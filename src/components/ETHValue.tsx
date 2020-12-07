import React from "react";

export function ETHValue(props: {
  wei?: number,
  eth?: number,
  unit: 'eth'|'gwei'
}) {
  let wei: number;
  if (props.wei !== undefined) {
    wei = props.wei
  } else {
    wei = props.eth! * (10 ** 18);
  }

  let factor: number;
  let maxDigits: number|undefined ;
  if (props.unit === 'eth') {
    factor = 1_000_000_000_000_000_000;
    maxDigits = undefined
  } else {
    factor = 1000_000_000;
    maxDigits = 0;
  }

  const value = wei / factor;
  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: maxDigits
  });
  return <>{formatter.format(value)}</>;
}
ETHValue.defaultProps = {
  unit: 'eth'
}