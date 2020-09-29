import React from "react";
import {Paper} from "../design-system/Paper";

export function About() {
  return <div style={{
    padding: '20px'
  }}>
    <Paper padding>
      <h3>The Idea</h3>
      <p>
        Provide insight into the workings of the Keep and tBTC systems - deposits, redemptions,
        who bonds for what, governance actions, etc. It does <strong>not</strong> desire to track ownership and
        transfers of the KEEP and tBTC tokens themselves - for that you may want to have a look at
        {" "} <a href={"https://keep-explorer.herokuapp.com/"}>KeepExplorer</a> or even
        {" "} <a href={"https://etherscan.io/token/0x85eee30c52b0b379b046fb0f85f4f3dc3009afec"}>Etherscan</a>.
      </p>

      <h3>Code etc.</h3>
      <p>
        The source code is available <a href={"https://github.com/miracle2k/allthekeeps"}>on Github</a>. The backend
        is provided by <a href={"https://thegraph.com/"}>The Graph</a>, and specifically
        {" "} <a href={"https://thegraph.com/explorer/subgraph/miracle2k/keep-network"}>this subgraph</a>. The graph is
        currently still evolving, and will likely change in backwards-incompatible ways. You can contribute to it
        {" "} <a href={"https://github.com/miracle2k/allthekeeps-graph"}>on Github</a>.
      </p>
      <p>
        <a href={"https://github.com/miracle2k/keep-pricefeed"}>A second subgraph</a> is providing the on-chain
        price feed.
      </p>
      <p>
        Built by <a href={"http://twitter.com/elsdoerfer/"}>@elsdoerfer</a>
      </p>

      <h3>Todos</h3>
      <p>
        <em>Still working on this...</em>
      </p>
      <ul>
        <li>FRT Tokens, signer Fees</li>
        <li>More bonding data</li>
        <li>Global Event Log</li>
        <li>Use <a href={"https://www.apollographql.com/docs/react/data/subscriptions/"}>subscriptions</a> to live-udpate.</li>
        <li>Filter & Sort lists</li>
        <li>Switch to ropsten</li>
      </ul>
    </Paper>

  </div>
}