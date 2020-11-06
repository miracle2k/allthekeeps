import {css} from "emotion";
import React from "react";

export function PageHeader(props: {
  label: string,
  subtitle?: any,
  buttons?: any,
  children?: any
}) {
  return <div
    style={{marginBottom: '20px'}}
    className={css`
      display: flex;
      flex-direction: row;         
   `}
  >
    <div className={css`
      display: flex;
      flex-direction: column;
      
      align-self: flex-start;
      flex: 1;         
   `}>
      <div className={css`        
        display: flex;
        flex-direction: row;
        align-items: center;         
     `}>
        <h1
          className={css`
            margin: 0px;                             
         `}
        >
          {props.label}
        </h1>

        <div className={css`
          margin-left: 15px;
        `}>
          {props.buttons}
        </div>
      </div>

      <div style={{color: 'gray'}}>
        {props.subtitle}
      </div>
    </div>

    {props.children}
  </div>
}