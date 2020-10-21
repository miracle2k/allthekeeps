import {PriceData, usePriceFeed} from "./PriceFeed";
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

export function getPriceAtCollateralizationRatio(deposit: any, ratio: number) {
  const bondValueWei = parseInt(deposit.bondedECDSAKeep.totalBondAmount);
  const lotValueSatoshis = parseInt(deposit.lotSizeSatoshis);
  return bondValueWei / (ratio * lotValueSatoshis);
}

export function CollaterizationStatusWithPrice(props: {
  deposit: any,
  price: PriceData|null

  style?: any,
  highlightNormal?: boolean
}) {
  const {deposit} = props;

  if (!props.price) {
    return <span>-</span>;
  }

  const bondValueWei = parseInt(deposit.bondedECDSAKeep.totalBondAmount);
  const lotValueSatoshis = parseInt(deposit.lotSizeSatoshis);
  const lotValueWei = lotValueSatoshis * props.price.weiPerSat;

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