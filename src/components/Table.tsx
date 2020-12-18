import {css} from "emotion";
import React, {useCallback, useState} from "react";
import classnames from 'classnames';
import {Column, ColumnInstance} from "react-table";
import {InfoTooltip} from "./InfoTooltip";

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


/**
 * A header rendered with react-table (which has built-in sort features).
 */
export function RTHeader(props: {
  children: any,
  column: ColumnInstance,
  sortState: SortState
}) {
  const handleClick = useCallback((e: any) => {
    e.preventDefault();
    props.sortState.setColumn(props.column.id);
    props.sortState.setDirection(props.column.isSortedDesc ? "asc" : "desc");
  }, [props.column, props.sortState]);

  const c = (props.column as any);

  return <div
    onClick={c.canSort ? handleClick : undefined}
    style={{cursor: c.canSort ? 'pointer' : undefined}}
  >
    {props.column.canSort ? (
        props.column.isSorted
          ? <span>
            {props.column.isSortedDesc ? "▼" : "▲"}
            </span>
          : null)
        : null
    }
    {c.label} {c.tooltip ? <InfoTooltip>{c.tooltip}</InfoTooltip> : null}
  </div>
}