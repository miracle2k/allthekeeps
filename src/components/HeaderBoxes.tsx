import {css} from "emotion";
import React from "react";

export function HeaderBoxes(props: {
  children: any
}) {
  return <div className={css`
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