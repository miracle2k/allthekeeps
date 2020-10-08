import React from "react";
import { Link } from "react-router-dom";
import {css} from "emotion";
import {ExternalLinkIcon} from "./ExternalLinkIcon";
import {isVendingMachine} from "../utils/contracts";
import {useBlockchainBaseUrl, useEtherscanDomain} from "../NetworkContext";


export function Address(props: {
  address: string,
  to?: string,
  includeExternalIcon?: boolean,
  long?: boolean
}) {
  const etherscan = useEtherscanDomain();
  let knownAddress: string|undefined;
  if (isVendingMachine(props.address)) {
    knownAddress = 'the Vending Machine'
  }

  return <Hash
    hash={props.address}
    to={props.to || `https://${etherscan}/address/${props.address}`}
    includeExternalIcon={props.includeExternalIcon}
    children={knownAddress}
    long={props.long}
  />
}


export function BitcoinAddress(props: {
  address: string
}) {
  const baseUrl = useBlockchainBaseUrl();
  return <Address address={props.address} to={`${baseUrl}/address/${props.address}`} />;
}


export function Transaction(props: {
  tx: string,
  to?: string,
  includeExternalIcon?: boolean,
  children?: any
}) {
  const etherscan = useEtherscanDomain();
  return <Hash
    hash={props.tx}
    to={props.to || `https://${etherscan}/tx/${props.tx}`}
    includeExternalIcon={props.includeExternalIcon}
    children={props.children}
  />
}


export function Hash(props: {
  hash: string,
  to?: string,
  includeExternalIcon?: boolean,
  long?: boolean
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
    {props.children || (props.long ? props.hash : shortAddress)}
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