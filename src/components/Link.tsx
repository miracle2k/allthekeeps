import {Link as RouterLink, LinkProps} from 'react-router-dom';
import React from "react";
import {useTimeTravelBlock} from "../TimeTravel";

export function Link(props: LinkProps) {
  const {to, ...others} = props;
  const block = useTimeTravelBlock();
  const realTo = block ? to + "?block=" + block : to;
  return <RouterLink {...others} to={realTo} />;
}