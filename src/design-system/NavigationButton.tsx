import React from "react";
import {css} from "emotion";
import {useLocation} from "react-router-dom";
import {Link} from "../components/Link";

export const NavigationButton = React.forwardRef((props: {
  children: any,
  to?: string,
  onClick?: any
}, ref) => {
  const isActive = useLocation().pathname == props.to;

  return <Link innerRef={ref as any} to={props.to ?? ""} onClick={props.onClick} data-active={isActive ? "true" : ""} className={css`
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
    &:hover::after, &[data-active=true]::after {
      content: '';
      position: absolute;
      height: 5px;
      background: #48DBB4 /**#F4F4F4**/;
      bottom: 0px;
      left: 0px;
      right: 0px;
    }
  `}>
    {props.children}
  </Link>
});