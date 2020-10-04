import {css} from "emotion";
import React, {useCallback, useState} from "react";
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


/**
 * Defines a sort state variable.
 */
export function useSort(defaultValue: string) {
  const [field, setField] = useState(defaultValue);
  const [direction, setDirection] = useState<"asc"|"desc">('desc');
  return {
    column: field,
    setColumn: setField,
    direction,
    setDirection
  }
}
export type SortState = ReturnType<typeof useSort>;


export function SortableHeader(props: {
  children: any,
  fieldId: string,
  state: SortState
}) {
  const isCurrent = props.fieldId == props.state.column;

  const handleClick = useCallback((e: any) => {
    e.preventDefault();
    if (props.state.column === props.fieldId) {
      props.state.setDirection(props.state.direction == 'desc' ? "asc" : "desc")
    } else {
      props.state.setColumn(props.fieldId);
    }
  }, [props.state, props.fieldId]);

  return <div onClick={handleClick} style={{cursor: 'pointer'}}>
    {isCurrent
        ? <span>
          {props.state.direction == 'desc' ? "▼" : "▲"}
          </span>
        : null
    }
    {props.children}
  </div>
}