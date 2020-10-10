import React from "react";

export function ETHValue(props: {
  wei: number,
  unit: 'eth'|'gwei'
}) {
  let factor: number;
  let maxDigits: number|undefined ;
  if (props.unit === 'eth') {
    factor = 1_000_000_000_000_000_000;
    maxDigits = undefined
  } else {
    factor = 1000_000_000;
    maxDigits = 0;
  }
  const value = props.wei / factor;
  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: maxDigits
  });
  return <>{formatter.format(value)}</>;
}
ETHValue.defaultProps = {
  unit: 'eth'
}