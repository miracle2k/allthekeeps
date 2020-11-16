import {css} from "emotion";
import {Paper} from "../design-system/Paper";
import Tippy from "@tippyjs/react";
import React from "react";

export function PageHeaderMenu(props: {
  children: any
}) {
  return <Tippy
      trigger="click"
      hideOnClick={true}
      arrow={false}
      interactive={true}
      maxWidth={600}
      className={css`
              background-color: transparent !important;
              padding: 0;
              color: inherit;
            `}
      placement={"bottom"}
      content={
        <Paper style={{padding: '10px'}}>
          {props.children}
        </Paper>
      }
  >
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAW0lEQVRIie2Ruw2AMAwFTykyu5mD2RKmQFCQ6imiSALVO8mSP+fGBmPML2RgAypQgGi9ZU4Al0TI8pRTO4NDloed1BLllHrYScDeGWhvysk8tyq8P3CFY4z5ghvPEDu0rDRS9gAAAABJRU5ErkJggg=="
         width={14} height={14} style={{cursor: 'pointer'}} />
  </Tippy>
}