import {css} from "emotion";
import React from "react";

export function Table(props: {
  children?: any,
  style?: any
}) {
  return <table
      style={props.style}
      className={css`
        & td, th {
          text-align: left;
          vertical-align: top;
        }
      `}
  >
    {props.children}
  </table>
}