import React from "react";
import {Paper} from "../../design-system/Paper";
import {DepositsTable} from "./DepositsTable";
import {Helmet} from "react-helmet";


export function Index() {
  return  <div style={{padding: '20px'}}>
    <Helmet>
      <title>Deposits</title>
    </Helmet>
    <h1 style={{marginTop: 0}}>Deposits</h1>
    <Paper padding>
      <DepositsTable />
    </Paper>
  </div>
}
