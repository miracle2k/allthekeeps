import React from "react";
import { Link } from "react-router-dom";
import {css} from "emotion";
import {ExternalLinkIcon} from "./ExternalLinkIcon";


export function Address(props: {
  address: string,
  to?: string,
  includeExternalIcon?: boolean
}) {
  return <Hash hash={props.address} to={props.to || `https://etherscan.io/address/${props.address}`} includeExternalIcon={props.includeExternalIcon} />
}


export function Transaction(props: {
  tx: string,
  to?: string,
  includeExternalIcon?: boolean
}) {
  return <Hash
    hash={props.tx}
    to={props.to || `https://etherscan.io/tx/${props.tx}`}
    includeExternalIcon={props.includeExternalIcon}
  />
}


export function Hash(props: {
  hash: string,
  to?: string,
  includeExternalIcon?: boolean
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
    {shortAddress}
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