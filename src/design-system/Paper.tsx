import {css} from "emotion";
import React from "react";

export function Paper(props: {
  children: any,
  padding?: boolean,
  style?: any
}) {
  return <div style={props.style} className={css`
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(20, 20, 20, 0.04);
    border-radius: 4px;
    padding: ${props?.padding ? '20px' : '0'}
  `}>
    {props.children}
  </div>
}
