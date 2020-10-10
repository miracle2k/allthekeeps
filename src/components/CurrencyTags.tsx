import React from "react";

export function BTCTag() {
  return <CurrencyTag currency={"BTC"} />;
}

export function ETHTag() {
  return <CurrencyTag currency={"ETH"} />;
}

export function GweiTag() {
  return <CurrencyTag currency={"GWEI"} />;
}

export function CurrencyTag(props: {
  currency: string
}) {
  return <span style={{color: 'gray', fontSize: '0.8em'}}>{props.currency}</span>;
}