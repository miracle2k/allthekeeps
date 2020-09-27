import {css} from "emotion";
import React from "react";
import classnames from 'classnames';

export function Table(props: {
  children?: any,
  style?: any,
  className?: string,
}) {
  return <table
      style={props.style}
      className={classnames(css`
        border-collapse: collapse;
        
        & td, th {
          text-align: left;
        }
        & td {
          border-bottom: 1px solid #f5f5f5;
        }
        & tr:hover td {
          background-color: #f5f5f5;          
        }
      `, props.className)}
  >
    {props.children}
  </table>
}