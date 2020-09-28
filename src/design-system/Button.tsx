import {css} from "emotion";
import React, {useCallback} from "react";

export function Button(props: {
  type?: 'primary'|'secondary',
  size?: 'default'|'small'|'tiny',
  to?: any,
  onClick?: any,
  children?: any
}) {
  const handleClick = useCallback((e: any) => {
    if (props.onClick) {
      e.preventDefault();
      props.onClick();
    }
  }, [props.onClick]);

  let Component: any;
  let extraProps: any = {};
  if (props.to) {
    Component = "a"
    extraProps.href = props.to;
  }
  else {
    Component = "button";
  }

  let fontSize = 16;
  let paddingFactor = 1;
  if (props.size === 'small') {
    fontSize = 13;
  }
  else if (props.size === 'tiny') {
    fontSize = 11;
    paddingFactor = 0.8;
  }

  return <Component className={css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    outline: none;
    display: inline-block;
    text-decoration: none;
    &:visited {
      color: inherit;
    }
    &:hover {
      text-decoration: none;
    }
    cursor: pointer;
    
    font-family: Work Sans;
    font-weight: 500;    
    line-height: 1.2;
        
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
    
    font-size: ${fontSize}px;
    padding: ${0.9 * paddingFactor}em ${1.2 * paddingFactor}em;
  `}
                    {...extraProps}
      onClick={handleClick}
  >
    {props.children}
  </Component>
}