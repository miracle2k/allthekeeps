import React, {useEffect, useRef, useState} from "react";
import {Paper} from "../../design-system/Paper";
import {DepositsTable} from "./DepositsTable";
import {Helmet} from "react-helmet";
import {Button} from "../../design-system/Button";
import {DropdownStyle, ExtraState} from "react-dropdown-aria/dist/utils/types";
import {css} from "emotion";
import {useDAppDomain} from "../../NetworkContext";
import {useParams} from "react-router";
import Tippy from "@tippyjs/react";
import {useDepositQuery, Views} from "./Views";
import {Pagination, usePagination} from "../../components/Pagination";
import { Link } from "../../components/Link";


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

function Box(props: {children: any, to: string, onClick: any}) {
  return <Link onClick={props.onClick} to={props.to} className={css`
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
         break-inside: avoid;
         
    padding: 10px;
    min-width: 250px;
        
    display: inline-block;
    & strong {}
    & em {
      font-size: 0.9em;
      color: gray;
      font-style: normal;
    }
    
    cursor: pointer;
    &:hover {
      background-color: #f5f5f5;
      text-decoration: none !important;
    }
  `}>
    {props.children}
  </Link>
}


export function Deposits() {
  const {view: viewName} = useParams<any>();
  const dAppDomain = useDAppDomain();
  const tippy = useRef<any>();

  const [pageNumber, setPageNumber] = useState(1);
  const currentView = Views.filter(v => v.id === viewName)[0] || Views[0];

  useEffect(() => {
    setPageNumber(1);
  }, [currentView])

  const depositQuery = useDepositQuery(currentView.id, pageNumber);
  const pagination = usePagination({
    pageNumber,
    setPageNumber,
    numResults: depositQuery.data?.deposits.length,
    perPage: depositQuery.perPage,
  })

  return  <div style={{padding: '20px'}}>
    <Helmet>
      <title>Deposits</title>
    </Helmet>

    <div style={{marginBottom: '20px'}}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Tippy trigger="click" hideOnClick={true} arrow={false} interactive={true} maxWidth={600} className={css`
          background-color: transparent !important;
          padding: 0;
          color: inherit;
        `} onCreate={(instance) => {
          tippy.current = instance;
        }} content={
          <Paper>
            <div className={css`
          column-count: 2;
          column-gap: 0;
          display: inline-block;
          padding: 10px;
        `}>
              {Views.map(view => {
                return <Box to={`/deposits/${view.id}`} onClick={() => {
                  tippy.current.hide();
                }}>
                  <div><strong>{view.label}</strong></div>
                  <div><em>{view.description}</em></div>
                </Box>
              })}
            </div>
          </Paper>
        }>
          <h1 style={{marginTop: 0, marginBottom: '0px', cursor: 'pointer'}} className={css`        
          `}>
            {currentView.label} {" "}
            <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAyNCAyNCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDEyIDAgQyA1LjM3MTA5NCAwIDAgNS4zNzEwOTQgMCAxMiBDIDAgMTguNjI4OTA2IDUuMzcxMDk0IDI0IDEyIDI0IEMgMTguNjI4OTA2IDI0IDI0IDE4LjYyODkwNiAyNCAxMiBDIDI0IDUuMzcxMDk0IDE4LjYyODkwNiAwIDEyIDAgWiBNIDEyIDE4LjUgTCA2LjUgMTIgTCAxMCAxMiBMIDEwIDYgTCAxNCA2IEwgMTQgMTIgTCAxNy41IDEyIFoiPjwvcGF0aD48L3N2Zz4="/>
          </h1>
        </Tippy>

        {currentView.action === "make"
          ?  <div style={{marginLeft: "30px"}}>
                <Button size={"tiny"} to={`https://${dAppDomain}/deposit`}>Make</Button>
              </div>
            : null}
      </div>

      {currentView.id == "" ? <div style={{color: 'gray', visibility: depositQuery.data?.stats?.depositCount ? 'visible' : 'hidden'}}>
        {depositQuery.data?.stats?.depositCount} deposits.
      </div> : null}
    </div>

    <Paper padding>
      <DepositsTable
          query={depositQuery}
      />

      <div style={{marginTop: '30px'}}>
        <Pagination pagination={pagination} />
      </div>
    </Paper>
  </div>
}


//
// <div style={{
//   marginBottom: '15px',
//   display: 'flex',
//   flexDirection: 'row',
//   justifyContent: 'flex-end'
// }}>
//   <div className={css`
//           display: inline-block;
//           width: 180px;
//         `}>
//     <Dropdown
//         style={style}
//         value={view}
//         onChange={(value) => {
//           location.push(`/deposits/${value.value}`);
//         }}
//         optionItemRenderer={item => {
//           return <span>{item.option.title}</span>
//         }}
//         options={[
//           { value: 'all', title: 'All' },
//           { value: 'active', title: 'Active Only' },
//           { value: 'liquidations', title: 'Liquidations' },
//           { value: 'redeemable', title: 'Redeemable' },
//           { value: 'unminted', title: 'Unminted TDTs' }
//         ]}
//     />
//   </div>
// </div>