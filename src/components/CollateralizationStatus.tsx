import {usePriceFeed} from "./PriceFeed";
import React from "react";


const formatter = new Intl.NumberFormat("en-US", {
  style: 'percent',
  maximumFractionDigits: 2
});

export function CollaterizationStatus(props: {
  deposit: any,

  style?: any,
  highlightNormal?: boolean
}) {
  const price = usePriceFeed();
  return <CollaterizationStatusWithPrice {...props} price={price} />
}

export function CollaterizationStatusWithPrice(props: {
  deposit: any,
  price: any|null

  style?: any,
  highlightNormal?: boolean
}) {
  const {deposit} = props;

  if (!props.price) {
    return <span>-</span>;
  }

  // Given with 18 decimal places
  const btcPerEth = props.price.val;
  const satPerWei = btcPerEth * 100000000 * 0.000000000000000001;
  const weiPerSat = 1 / satPerWei;

  const bondValueWei = parseInt(deposit.bondedECDSAKeep.totalBondAmount);
  const lotValueSatoshis = parseInt(deposit.lotSizeSatoshis);
  const lotValueWei = lotValueSatoshis * weiPerSat;

  const ratio = bondValueWei / lotValueWei;

  const ratioPercent = ratio * 100;
  let status = 'normal';
  if (ratioPercent < deposit.undercollateralizedThresholdPercent) {
    status = 'courtesy'
  }
  if (ratioPercent < deposit.severelyUndercollateralizedThresholdPercent) {
    status = 'undercollaterized'
  }

  const color = ({
    'normal': props.highlightNormal ? 'green' : undefined,
    'courtesy': 'orange',
    'undercollaterized': 'red'
  } as any)[status]

  let extraStyle = !props.highlightNormal && status == 'normal' ? {
    fontSize: '0.9em',
    color: 'gray'
  }  : {};

  return <span style={{
    color: color,
      ...extraStyle,
    ...props.style
  }}>{formatter.format(ratio)}</span>
}