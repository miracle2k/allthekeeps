import {css} from "emotion";
import React from "react";

export function HeaderBoxes(props: {
  children: any,
  style?: any
}) {
  return <div style={props.style} className={css`
    display: flex;
    flex-direction: row;
    & > * {
      margin-right: 40px;
    }
    & > :last-child {
      margin-right: 0px;
    }
  `}>
    {props.children}
  </div>
}