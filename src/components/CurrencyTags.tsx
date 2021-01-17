import React from "react";

export function BTCTag() {
  return <CurrencyTag currency={"BTC"} />;
}

export function ETHTag(props: {
  symbol?: boolean
}) {
  return <CurrencyTag currency={props.symbol ? "Ξ" : "ETH"} />;
}

export function KeepTag() {
  return <CurrencyTag currency={"KEEP"} />;
}

export function GweiTag() {
  return <CurrencyTag currency={"GWEI"} />;
}

export function CurrencyTag(props: {
  currency: string
}) {
  return <span style={{color: 'gray', fontSize: '0.8em'}}>{props.currency}</span>;
}