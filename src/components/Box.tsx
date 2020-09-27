import {css} from "emotion";
import React from "react";

export function Box(props: {
  label: string,
  children: any
}) {
  return (
      <div className={css`
      font-size: 35px;           
      padding: 20px;
      color: #0A0806;
      
      font-feature-settings: 'zero' on;
    `}>
        <div className={css`                         
          font-size: 16px;
        `}>
          {props.label}
        </div>
        <div>
          {props.children}
        </div>
      </div>
  )
}