import React from "react";
import { Link } from "react-router-dom";

export function Address(props: {
  address: string,
  to?: string
}) {
  // #tokentxnsErc721

  let linkProps: any = {};

  let C: any;
  if (props.to) {
    C = Link;
    linkProps.to = props.to;
  } else {
    C = 'a';
    linkProps = {
      ...linkProps,
      href: `https://etherscan.io/address/${props.address}`
    }
  }

  let shortAddress = props.address.slice(0,5) + "..." + props.address.slice(props.address.length-5);
  const el = React.createElement(C, linkProps, shortAddress)

  return <span>
    {el}
  </span>
}