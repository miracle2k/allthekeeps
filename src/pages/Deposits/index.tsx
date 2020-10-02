import React, { useState } from "react";
import {Paper} from "../../design-system/Paper";
import {DepositsTable} from "./DepositsTable";
import {Helmet} from "react-helmet";
import { Button } from "../../design-system/Button";
import Dropdown from "react-dropdown-aria";
import {DropdownStyle, ExtraState} from "react-dropdown-aria/dist/utils/types";
import { css } from "emotion";


// See: https://github.com/jfangrad/react-dropdown-aria/blob/68e730d1ba8894ded9ee6cfb665c7aabf985d1dc/packages/react-dropdown-aria/styles/index.ts
const style: DropdownStyle = {
  DropdownButton: base => ({
    ...base,
    border: 'none',
    borderRadius: '0px',

    '&:hover': {
      border: 'none',
      backgroundColor: '#f8f8f8',
      boxShadow: 'none',
    },

    '&:focus': {
      // border: '2px solid rgb(0, 128, 188)',
      boxShadow: 'none',
    },

    '&:disabled': {
      backgroundColor: '#e6e6e6',
    },
  }),

  DropdownWrapper: (base, foo) => {
    return {
    ...base,
        backgroundColor: 'white',
        border: '1px solid #0A0806',
        borderRadius: 0,

        '&:hover': {
          //border: `2px solid ${(open || base.dropdownFocused) ? colours.states.focused : colours.greys.darker}`,
          border: foo.dropdownFocused ? '1px solid #48DBB4' : '1px solid #0A0806',
          backgroundColor: "#F4F4F4"
      },
    }
  },

  OptionContainer: base => ({
    ...base,
    padding: '5px 0',
    border: '1px solid #0A0806',
    borderRadius: '0',
    backgroundColor: 'white'
  }),

  OptionItem: (base, state, extra?: ExtraState) => ({
    ...base,
    fontSize: '0.95em',

    backgroundColor: extra?.selected ? '#D7F6EE' : 'white',
    color: extra?.selected ? "#1b9474" : '#0A0806',
    '&:hover': {
      backgroundColor: extra?.selected ? '#D7F6EE' : '#D7F6EE',
      color: extra?.selected ? "#1b9474" : undefined
    },
  }),

  Arrow: (base, { open }) => ({
    ...base,

    'svg': {
      width: 16,
      height: 16,
    }
  }),
};


export function Deposits() {
  const [view, setView] = useState("all");

  return  <div style={{padding: '20px'}}>
    <Helmet>
      <title>Deposits</title>
    </Helmet>

    <div style={{marginBottom: '20px', display: 'flex', alignItems: 'center'}}>
      <h1 style={{marginTop: 0, marginBottom: '0px'}}>Deposits</h1> &nbsp;&nbsp;&nbsp;
      <Button size={"tiny"} to={"https://dapp.tbtc.network/deposit"}>Make</Button>
    </div>

    <Paper padding>
      <div style={{
        marginBottom: '15px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
      }}>
        <div className={css`
          display: inline-block;
          width: 180px;
        `}>
          <Dropdown
              style={style}
              value={view}
              onChange={(value) => {
                setView(value.value);
              }}
              optionItemRenderer={item => {
                return <span>{item.option.title}</span>
              }}
              options={[
                { value: 'all', title: 'All' },
                { value: 'active', title: 'Active Only' },
                { value: 'liquidations', title: 'Liquidations' },
                { value: 'redeemable', title: 'Redeemable' },
                { value: 'unminted', title: 'Unminted TDTs' }
              ]}
          />
        </div>
      </div>

      <DepositsTable
          view={view as any}
      />
    </Paper>
  </div>
}
