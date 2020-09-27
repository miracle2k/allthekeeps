import React from "react";
import {css} from "emotion";
import { Link } from "react-router-dom";

export function NavigationButton(props: {
  children: any,
  to: string
}) {
  return <Link to={props.to} className={css`
    padding: 0.5em;    
               
    font-size: 14px;
    line-height: 22px;
    text-decoration: none;
    
    align-items: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #0A0806;
 
    display: flex;
    color: black !important;
    
    &:hover {
      text-decoration: none;
    }
    
    position: relative;
    &:hover::after {
      content: '';
      position: absolute;
      height: 5px;
      background: #F4F4F4;
      bottom: 0px;
      left: 0px;
      right: 0px;
    }
  `}>
    {props.children}
  </Link>
}