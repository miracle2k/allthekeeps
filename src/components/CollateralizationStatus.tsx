import {convertPriceFeedVal, PriceData, usePriceFeed} from "./PriceFeed";
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
  return ((ratio * lotValueSatoshis) / bondValueWei)  * 10**10;   // I am too tired to figure out why it has to be **10.
}

export function CollaterizationStatusWithPrice(props: {
  deposit: any,
  price: PriceData|null

  style?: any,
  highlightNormal?: boolean
}) {
  const {deposit} = props;

  const price = deposit.finalBtcPrice ? convertPriceFeedVal(deposit.finalBtcPrice) : props.price;
  const isFinalized = !!deposit.finalBtcPrice;

  if (!price) {
    return <span>-</span>;
  }

  const bondValueWei = parseInt(deposit.bondedECDSAKeep.totalBondAmount);
  const lotValueSatoshis = parseInt(deposit.lotSizeSatoshis);
  const lotValueWei = lotValueSatoshis * price.weiPerSat;

  const ratio = bondValueWei / lotValueWei;

  const ratioPercent = ratio * 100;
  let status = 'normal';
  if (ratioPercent < deposit.undercollateralizedThresholdPercent) {
    status = 'courtesy'
  }
  if (ratioPercent < deposit.severelyUndercollateralizedThresholdPercent) {
    status = 'undercollaterized'
  }

  // Color-code unless finalized.
  const color = isFinalized ? null : ({
    'normal': props.highlightNormal ? 'green' : undefined,
    'courtesy': 'orange',
    'undercollaterized': 'red'
  } as any)[status]

  // Show as gray in the normal/non-highlight case, or when finalized.
  let extraStyle = ((!props.highlightNormal && status == 'normal') || isFinalized) ? {
    fontSize: '0.9em',
    color: 'gray'
  }  : {};

  return <span style={{
    color: color,
      ...extraStyle,
    ...props.style
  }}>{formatter.format(ratio)}</span>
}