import React from "react";
import {Paper} from "../../design-system/Paper";
import {DepositsTable} from "./DepositsTable";
import {Helmet} from "react-helmet";
import { Button } from "../../design-system/Button";


export function Index() {
  return  <div style={{padding: '20px'}}>
    <Helmet>
      <title>Deposits</title>
    </Helmet>

    <div style={{marginBottom: '20px', display: 'flex', alignItems: 'center'}}>
      <h1 style={{marginTop: 0, marginBottom: '0px'}}>Deposits</h1> &nbsp;&nbsp;&nbsp;
      <Button size={"tiny"} to={"https://dapp.tbtc.network/deposit"}>Make</Button>
    </div>

    <Paper padding>
      <DepositsTable />
    </Paper>
  </div>
}
