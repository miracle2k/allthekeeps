import {css} from "emotion";
import React from "react";
import {InfoTooltip} from "./InfoTooltip";

export function Box(props: {
  label: string,
  tooltip?: string,
  children: any,
  noPadding?: boolean
}) {
  return (
      <div className={css`
      font-size: 35px;           
      padding: ${props.noPadding ? 0 : '20px'}
      color: #0A0806;
      
      font-feature-settings: 'zero' on;
    `}>
        <div className={css`                         
          font-size: 16px;
        `}>
          {props.label} {props.tooltip ? <InfoTooltip>{props.tooltip}</InfoTooltip> : null}
        </div>
        <div>
          {props.children}
        </div>
      </div>
  )
}