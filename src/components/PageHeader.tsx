import {css} from "emotion";
import React from "react";

export function PageHeader(props: {
  label: string,
  children?: any
}) {
  return <div style={{marginBottom: '20px'}}>
    <div style={{display: 'flex', alignItems: 'center'}}>
      <div className={css`
        align-self: flex-start;
        flex: 1;   
     `}>
        <h1
          style={{marginTop: 0, marginBottom: '0px', cursor: 'pointer'}}
          className={css`            
            & > span {
              margin-left: 0.5em;
              font-weight: normal;
              font-size: 0.6em;
            }     
         `}
        >
          Deposit
        </h1>
        <div style={{color: 'gray'}}>
          0x15ab11226246a18842940a3214251ead011e35b5
        </div>
      </div>

      {props.children}
    </div>
  </div>
}