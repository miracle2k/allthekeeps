import { css } from "emotion";
import React from "react";
import {Button} from "../design-system/Button";

export type Page = {
  number: number
}
export type Item = Page;


export type PaginationState = {
  items: Item[],
  set: (val: number) => void,
  hasNext: boolean,
  current: number,
}

export function usePagination(opts: {
  pageNumber: number,
  setPageNumber: (val: number) => void,
  numResults: number,
  perPage: number
}): PaginationState {
  const items: Item[] = [];
  for (let i=1; i<=opts.pageNumber; i++) {
    items.push({
      number: i
    })
  }

  return {
    items,
    set: opts.setPageNumber,
    hasNext: opts.perPage <= opts.numResults,
    current: opts.pageNumber
  }
}

export function Pagination(props: {
  pagination: PaginationState
}) {
  const {items, set, hasNext, current} = props.pagination;

  // We hide the pagination if we are on page 1 and don't know yet if we even need it.
  if (current == 1 && !hasNext) {
    return null;
  }

  return <div className={css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}>
    {items.map(page => {
      if (page.number == current) {
        return <div className={css`
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
              
          background: #0A0806;    
          border: 1px solid #0A0806;    
          color: white;

          font-size: ${11}px;
          padding: ${0.9 * 0.8}em ${1.2 * 0.8}em;
        `}>
          {page.number}
        </div>
      }
      return <PaginationButton onClick={set} current={current} page={page.number} />
    })}
    {hasNext ? <>
        <PaginationButton onClick={set} current={current} page={current + 1} />
        <div style={{marginLeft: '5px'}}>...</div>
      </> : null}
  </div>
}

function PaginationButton(props: {
  page: number,
  current: number,
  onClick: (val: number) => void,
}) {
  return <div style={{margin: '0 2px'}}>
    <Button
      size={"tiny"}
      onClick={() => props.onClick(props.page)}
    >{props.page}</Button>
  </div>
}