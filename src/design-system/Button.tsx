import {css} from "emotion";
import React from "react";

export function Button(props: {
  type?: 'primary'|'secondary',
  size?: 'default'|'small',
  to?: any,
  children?: any
}) {

  let Component: any;
  let extraProps: any = {};
  if (props.to) {
    Component = "a"
    extraProps.href = props.to;
  }
  else {
    Component = "button";
  }

  return <Component className={css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    outline: none;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    
    font-family: Work Sans;
    font-weight: 500;    
    line-height: 1.2;
    
    padding: 0.9em 1.2em;    
    background: #FFFFFF;    
    border: 1px solid #0A0806;    
    color: #0A0806;

    text-transform: uppercase;
    
    position: relative;
    &::after {
      content: '';
      position: absolute;
      height: 5px;
      background: #0A0806;
      bottom: 0px;
      left: 0px;
      right: 0px;
      display: none;
    }    
    &:hover {
      border-bottom-color: #0A0806;
      ::after {
        background: #0A0806;
        display: block;      
      }
    }
    &:active{
      border-bottom-color: #48DBB4;
      ::after {
        background: #48DBB4;
        display: block;      
      }
    }
    
    font-size: ${props.size === 'small' ? '13' : '16'}px;
  `}
                    {...extraProps}
  >
    {props.children}
  </Component>
}