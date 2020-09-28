import React from "react";
import { Link } from "react-router-dom";
import {css} from "emotion";
import {ExternalLinkIcon} from "./ExternalLinkIcon";
import {isVendingMachine} from "../utils/contracts";


export function Address(props: {
  address: string,
  to?: string,
  includeExternalIcon?: boolean
}) {
  let knownAddress: string|undefined;
  if (isVendingMachine(props.address)) {
    knownAddress = 'the Vending Machine'
  }

  return <Hash
    hash={props.address}
    to={props.to || `https://etherscan.io/address/${props.address}`}
    includeExternalIcon={props.includeExternalIcon}
    children={knownAddress}
  />
}


export function BitcoinAddress(props: {
  address: string
}) {
  return <Address address={props.address} to={`https://www.blockchain.com/btc/address/${props.address}`} />;
}


export function Transaction(props: {
  tx: string,
  to?: string,
  includeExternalIcon?: boolean,
  children?: any
}) {
  return <Hash
    hash={props.tx}
    to={props.to || `https://etherscan.io/tx/${props.tx}`}
    includeExternalIcon={props.includeExternalIcon}
    children={props.children}
  />
}


export function Hash(props: {
  hash: string,
  to?: string,
  includeExternalIcon?: boolean,
  children?: any
}) {
  // #tokentxnsErc721

  let linkProps: any = {};

  let C: any;
  if (!(props.to ?? "").startsWith('http')) {
    C = Link;
    linkProps.to = props.to;
  } else {
    C = 'a';
    linkProps = {
      ...linkProps,
      href: props.to
    }
  }

  let shortAddress = props.hash.slice(0,5) + "..." + props.hash.slice(props.hash.length-5);
  const el = React.createElement(C, linkProps, <span>
    {props.children || shortAddress}
    {props.includeExternalIcon ? <span className={css`
        font-size: 0.8em;
        padding-left: 0.2em;
       `}>
      <ExternalLinkIcon />
    </span> : null}
  </span>)

  return <span>
    {el}
  </span>
}