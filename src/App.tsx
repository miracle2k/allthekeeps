import React from 'react';
import {ApolloProvider, HttpLink, split, useQuery} from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { css, cx } from 'emotion'
import {Operators} from "./pages/Operators";
import {Operator} from "./pages/Operator";
import {Deposits} from "./pages/Deposits";
import {Deposit} from "./pages/Deposit";
import {NavigationButton} from "./design-system/NavigationButton";
import 'tippy.js/dist/tippy.css';
import {About} from "./pages/About";
import {Redirect} from "react-router";
import {Helmet} from "react-helmet";
import {Governance} from "./pages/Governance";
import { UseWalletProvider } from 'use-wallet'
import {WebSocketLink} from "@apollo/client/link/ws";
import {getMainDefinition} from "@apollo/client/utilities";
import {ZksyncTorch} from "./pages/tBTCzkSyncTorch";


// DEV:
//const uri = 'api.thegraph.com/subgraphs/name/miracle2k/all-the-keeps-ropsten'
//const uri = 'api.thegraph.com/subgraphs/name/miracle2k/keep-network';
// LIVE
const uri = 'api.thegraph.com/subgraphs/name/miracle2k/all-the-keeps';


const httpLink = new HttpLink({
  uri: 'https://' + uri
});

const wsLink = new WebSocketLink({
  uri: `wss://` + uri,
  options: {
    reconnect: true
  }
});

const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink,
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink
});

function App() {
  return (
      <ApolloProvider client={client}>
        <UseWalletProvider
            chainId={1}
        >
          <Router>
            <Header />
            <Helmet titleTemplate="%s | AllTheKeeps">
            </Helmet>
            <div className={css`            
            `}>
              <Switch>
                <Route path="/" exact>
                  <Redirect to="/deposits" />
                </Route>
                <Route exact path="/deposits">
                  <Deposits />
                </Route>
                <Route path="/about" exact>
                  <About />
                </Route>
                <Route path="/torch" exact>
                  <ZksyncTorch />
                </Route>
                <Route path="/governance" exact>
                  <Governance />
                </Route>
                <Route path="/operators" exact>
                  <Operators />
                </Route>
                <Route path="/operator/:operatorId" exact>
                  <Operator />
                </Route>
                <Route path="/deposit/:depositId" exact>
                  <Deposit />
                </Route>
              </Switch>
            </div>
          </Router>
        </UseWalletProvider>
      </ApolloProvider>
  );
}

export default App;


function Header() {
  return <div className={css`
    background: #48DBB4;
    border-bottom: 1px #C4C4C4 solid;
    
    display: flex;
    flex-direction: row;
    padding: 0 20px;   
  `}>
    <strong style={{padding: '20px 20px 20px 0'}}>
      AllTheKeeps
    </strong>

    <NavigationButton to={"/"}>
      Deposits
    </NavigationButton>

    <NavigationButton to={"/operators"}>
      Operators
    </NavigationButton>

    <NavigationButton to={"/governance"}>
      Governance
    </NavigationButton>

    <NavigationButton to={'/torch'}>
      <img alt="svgImg" style={{height: '2em'}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxMjggMTI4IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxwYXRoIGZpbGw9IiNmY2NhM2QiIGQ9Ik00MC43LDQyLjlMNDAuNyw0Mi45TDU0LDE0bDUsOEw2OSw0YzAsMCwxNy45LDM3LjgsMTguMiwzOC44bDAsMGMxLjEsMi44LDEuOCw1LjksMS44LDkuMiBjMCwxMy44LTExLjIsMjUtMjUsMjVTMzksNjUuOCwzOSw1MkMzOSw0OC44LDM5LjYsNDUuNyw0MC43LDQyLjl6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmNjE0NCIgZD0iTTc5LDY2LjdjLTAuNiwwLTEuMy0wLjItMS44LTAuNmMtMS4zLTEtMS41LTIuOS0wLjUtNC4yQzc4LjgsNTksODAsNTUuNiw4MCw1MmMwLTItMC40LTMuOS0xLjEtNS44IGMtMC4zLTAuNi0yLjMtNS0xMC40LTIyLjFjLTAuNy0xLjUtMC4xLTMuMywxLjQtNGMxLjUtMC43LDMuMy0wLjEsNCwxLjRjNi41LDEzLjcsMTIsMjEuMiwxMi40LDIyLjNjMCwwLDAsMC4xLDAuMSwwLjEgYzEsMi42LDEuNSw1LjMsMS41LDhjMCw1LTMuNiw5LjYtNi43LDEzLjZDODAuNyw2Ni4zLDc5LjgsNjYuNyw3OSw2Ni43eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02NC42IDY0YzYuOC0uMyAxMi4yLTYuMyAxMS45LTEzLjItLjEtMS4zLS4zLTIuNi0uOC0zLjgtLjMtLjYtLjUtMS4yLS43LTEuNGwtLjItLjR2MGMtLjYtMS4xLTIuMy0uOS0yLjYuNHYwQzcxLjkgNDcgNzAuOCA0OCA2OS40IDQ4Yy0xIDAtMi0uNS0yLjYtMS41TDYyIDM3LjdjLTEuMi0yLjEtNC4zLTItNS4zLjJsLTMuMyA3TDUzIDQ1LjVjLS4yLjQtLjUuOS0uNyAxLjQtLjYgMS41LS45IDMtLjkgNC42QzUxLjUgNTguNiA1Ny40IDY0LjMgNjQuNiA2NHpNNjkgMTI0TDU5IDEyNCA1NCA4OSA3NCA4OXpNNDEgNzdIODdWODlINDF6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzQ0NGI1NCIgZD0iTTg3IDc0aC01LjdDODcuOCA2OC45IDkyIDYwLjkgOTIgNTJjMC0zLjUtLjctNy0yLTEwLjMgMC0uMS0uMS0uMS0uMS0uMi0xLjItMi42LTE0LjEtMjkuOS0xOC4yLTM4LjctLjUtMS0xLjQtMS43LTIuNS0xLjhDNjggLjkgNjcgMS41IDY2LjQgMi41bC03LjUgMTMuNi0yLjMtMy43Yy0uNi0uOS0xLjYtMS41LTIuNy0xLjQtMS4xLjEtMi4xLjctMi41IDEuN0wzOCA0MS42Yy0uMS4xLS4xLjItLjEuNC0xLjIgMy4yLTEuOCA2LjYtMS44IDEwIDAgNS45IDEuOCAxMS41IDUuMiAxNi4yLjkgMS4yIDIuNSAxLjcgMy44IDEuMSAxLjctLjggMi4yLTMgMS4yLTQuNUM0Mi43IDYwIDQxLjMgNTQgNDIuNCA0Ny45Yy4yLTEuNC43LTIuNyAxLjItNGwwIDAgMTAuMS0yMmMuMy0uNyAxLjMtLjggMS44LS4xbDEuMSAxLjdjLjggMS4zIDIuNCAxLjggMy45IDEuMS42LS4zIDEtLjggMS4zLTEuM2w2LjItMTEuMWMuNC0uNyAxLjQtLjcgMS44LjFDNzYuMyAyNi40IDg0LjEgNDMgODQuNSA0My45bDAgLjFjLjMuOC42IDEuNS44IDIuM0M4OSA2MC45IDc4IDc0IDY0IDc0SDQxYy0xLjcgMC0zIDEuMy0zIDN2MTJjMCAxLjcgMS4zIDMgMyAzaDEwLjRsNC42IDMyLjRjLjIgMS41IDEuNSAyLjYgMyAyLjZoMTBjMS41IDAgMi44LTEuMSAzLTIuNkw3Ni42IDkySDg3YzEuNyAwIDMtMS4zIDMtM1Y3N0M5MCA3NS4zIDg4LjcgNzQgODcgNzR6TTY1LjUgMTIxaC0zYy0uNSAwLS45LS40LTEtLjlsLTMuOS0yN2MtLjEtLjYuNC0xLjEgMS0xLjFoMTAuOGMuNiAwIDEuMS41IDEgMS4xbC0zLjkgMjdDNjYuNCAxMjAuNiA2NiAxMjEgNjUuNSAxMjF6TTgzIDg2SDQ1Yy0uNiAwLTEtLjQtMS0xdi00YzAtLjYuNC0xIDEtMWgzOGMuNiAwIDEgLjQgMSAxdjRDODQgODUuNiA4My42IDg2IDgzIDg2ek0zOSAxQTMgMyAwIDEgMCAzOSA3IDMgMyAwIDEgMCAzOSAxeiI+PC9wYXRoPjwvc3ZnPg=="/>
    </NavigationButton>

    <div style={{flex: 1}} />

    <NavigationButton to={"/about"}>
      About
    </NavigationButton>

  </div>
}