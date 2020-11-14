import React, {useMemo, useRef, useState} from 'react';
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache, split} from '@apollo/client';
import {BrowserRouter as Router, Link, Route, Switch, useHistory, useLocation,} from "react-router-dom";
import {css} from 'emotion'
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
import {UseWalletProvider} from 'use-wallet'
import {WebSocketLink} from "@apollo/client/link/ws";
import {getMainDefinition} from "@apollo/client/utilities";
import {ZksyncTorch} from "./pages/tBTCzkSyncTorch";
import {Network, SetNetwork, useIsRopsten, useNetwork} from "./NetworkContext";
import {Users} from "./pages/Users";
import {Beacon} from "./pages/Beacon";
import {BeaconGroup} from "./pages/Group";
import {TimeTravelState, useTimeTravelBlock} from "./TimeTravel";
import {DateTime} from "luxon";
import {Paper} from "./design-system/Paper";
import Tippy from "@tippyjs/react";
import {Button} from "./design-system/Button";
import {Stakedrop} from "./pages/Stakedrop";


function makeApolloLink(uri: string) {
  const httpLink = new HttpLink({
    uri: 'https://' + uri
  });

  const wsLink = new WebSocketLink({
    uri: `wss://` + uri,
    options: {
      reconnect: true
    }
  });

  return split(
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
}

function AppInternal() {
  const isRopsten = useIsRopsten();

  let url: string;
  if (isRopsten) {
    url = 'api.thegraph.com/subgraphs/name/miracle2k/all-the-keeps-ropsten';
  }
  else {
    // DEV:
    url = 'api.thegraph.com/subgraphs/name/miracle2k/keep-network';
    // LIVE
    //url = 'api.thegraph.com/subgraphs/name/miracle2k/all-the-keeps';
  }

  const client = useMemo(() => {
    return new ApolloClient({
      cache: new InMemoryCache(),
      link: makeApolloLink(url)
    });
  }, []);

  return (
      <Router>
        <ApolloProvider client={client}>
          <TimeTravelState>
            <UseWalletProvider
                chainId={isRopsten ? 3 : 1}
            >
              <Helmet titleTemplate="%s | AllTheKeeps"></Helmet>
              <Header />
              <TimeTravelWarning />
              <div className={css`            
              `}>
                <Switch>
                  <Route path="/" exact>
                    <Redirect to="/deposits" />
                  </Route>
                  <Route exact path="/deposits">
                    <Deposits />
                  </Route>
                  <Route exact path="/deposits/:view">
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
                  <Route path="/users" exact>
                    <Users />
                  </Route>
                  <Route path="/beacon" exact>
                    <Beacon />
                  </Route>
                  <Route path="/group/:id" exact>
                    <BeaconGroup />
                  </Route>
                  <Route path="/operator/:operatorId" exact>
                    <Operator />
                  </Route>
                  <Route path="/deposit/:depositId" exact>
                    <Deposit />
                  </Route>
                  <Route path="/stakedrop" exact>
                    <Stakedrop />
                  </Route>
                </Switch>
              </div>
            </UseWalletProvider>
          </TimeTravelState>
        </ApolloProvider>
      </Router>
  );
}

function App() {
  const network = (window.location.host.indexOf("ropsten") > -1) ? Network.ROPSTEN : Network.MAINNET;
  return <SetNetwork network={network}>
    <AppInternal />
  </SetNetwork>
}

export default App;


function Header() {
  return <div className={css`
    background: #fafafa; /* #48DBB4; */
    border-bottom: 1px #C4C4C4 solid;
    
    display: flex;
    flex-direction: row;
    padding: 0 20px;   
  `}>
    <strong style={{padding: '10px 20px 10px 0'}}>
      <img src={"/logo.png"} height={40} alt={"AllTheKeeps Logo"} />
    </strong>

    <NavigationButton to={"/deposits"}>
      Deposits
    </NavigationButton>

    <NavigationButton to={"/operators"}>
      Operators
    </NavigationButton>

    <NavigationButton to={"/governance"}>
      Governance
    </NavigationButton>

    <NavigationButton to={"/users"}>
      Users
    </NavigationButton>

    <NavigationButton to={"/beacon"}>
      Beacon
    </NavigationButton>

    <NavigationButton to={'/stakedrop'}>
      <img alt="Stakedrop Icon" style={{height: '2em'}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxMjggMTI4IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxwYXRoIGZpbGw9IiNGOUE3QjUiIGQ9Ik0xNCw2OS44djE3LjVjMCw3LjMsNS45LDEzLjIsMTMuMiwxMy4yYzEuNywwLDMuMy0wLjMsNC44LTAuOWwwLDBjOS4yLTMuMSwxOS4zLTIuMSwyNy43LDIuN2w2LjcsMy44aDBjNC44LDMuMiwxMC42LDUsMTYuOCw1YzE3LDAsMzAuNy0xMy43LDMwLjctMzAuN1Y2NC43TDE0LDY5Ljh6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTExMC42LDQ4LjhjMC0wLjEtMC4xLTAuMS0wLjEtMC4yYy0wLjItMC4zLTAuMy0wLjYtMC41LTAuOWMtNi0xMC44LTE4LjctMTkuMi0zNy4zLTE5LjJjLTI4LjksMC00OS41LDI0LjUtNTUuNCwzMi41Yy0wLjcsMC44LTEuMywxLjYtMS44LDIuNWMwLDAsMCwwLDAsMGwwLDBjLTEsMS45LTEuNiw0LTEuNiw2LjNjMCw3LjMsNS45LDEzLjIsMTMuMiwxMy4yYzEuNywwLDMuMy0wLjMsNC44LTAuOWwwLDBjOS4yLTMuMSwxOS4zLTIuMSwyNy43LDIuN2w2LjcsMy44aDBjNC44LDMuMiwxMC42LDUsMTYuOCw1YzE3LDAsMzAuNy0xMy43LDMwLjctMzAuN0MxMTQsNTcuNywxMTIuOCw1MywxMTAuNiw0OC44eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGRjY5N0QiIGQ9Ik04My4zLDg1LjZjLTQuNCwwLTguOC0xLjMtMTIuNS0zLjdsLTAuMi0wLjFsLTctMy45Yy02LjMtMy42LTEzLjUtNS40LTIwLjctNS40Yy00LjUsMC05LDAuNy0xMy40LDIuMmwtMC4yLDAuMWwtMC4zLDAuMWMtMC42LDAuMi0xLjIsMC40LTEuOSwwLjRjLTIuOSwwLTUuMy0yLjQtNS4zLTUuM2MwLTAuOSwwLjItMS43LDAuNi0yLjVsMCwwYzAuMi0wLjMsMC40LTAuNiwwLjctMC45bDAuMi0wLjNsMC4yLTAuM2M1LjEtNi45LDIzLjgtMjkuMyw0OS4xLTI5LjNjMTQsMCwyNS4xLDUuNSwzMC40LDE1LjFjMC4yLDAuMywwLjMsMC41LDAuNCwwLjdsMCwwLjFjMS43LDMuMywyLjUsNi44LDIuNSwxMC41QzEwNi4xLDc1LjMsOTUuOSw4NS42LDgzLjMsODUuNnoiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkZGIiBkPSJNODMuMyA1NEE4LjggOC44IDAgMSAwIDgzLjMgNzEuNkE4LjggOC44IDAgMSAwIDgzLjMgNTRaIj48L3BhdGg+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM0Y0QTU0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSI2IiBkPSJNMTE0LDY0Ljd2MTUuNmMwLDE3LTEzLjcsMzAuNy0zMC43LDMwLjdjLTYuMiwwLTEyLTEuOC0xNi44LTVoMGwtNi43LTMuOGMtOC41LTQuOC0xOC41LTUuNy0yNy43LTIuN2wwLDBjLTEuNSwwLjYtMy4xLDAuOS00LjgsMC45Yy03LjMsMC0xMy4yLTUuOS0xMy4yLTEzLjJWNjkuOGMwLTIuMywwLjYtNC40LDEuNi02LjNsMCwwYzAsMCwwLDAsMCwwYzAuNS0wLjksMS4xLTEuNywxLjgtMi41YzUuOS04LDI2LjYtMzIuNSw1NS40LTMyLjVjMTguNiwwLDMxLjMsOC4zLDM3LjMsMTkuMmMwLjIsMC4zLDAuMywwLjYsMC41LDAuOWMwLDAuMSwwLjEsMC4xLDAuMSwwLjJjMi4xLDQuMiwzLjQsOC45LDMuNCwxNCI+PC9wYXRoPjwvc3ZnPg=="/>
    </NavigationButton>

    <NavigationButton to={'/torch'}>
      <img alt="Torch Icon" style={{height: '2em'}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxMjggMTI4IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxwYXRoIGZpbGw9IiNmY2NhM2QiIGQ9Ik00MC43LDQyLjlMNDAuNyw0Mi45TDU0LDE0bDUsOEw2OSw0YzAsMCwxNy45LDM3LjgsMTguMiwzOC44bDAsMGMxLjEsMi44LDEuOCw1LjksMS44LDkuMiBjMCwxMy44LTExLjIsMjUtMjUsMjVTMzksNjUuOCwzOSw1MkMzOSw0OC44LDM5LjYsNDUuNyw0MC43LDQyLjl6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmNjE0NCIgZD0iTTc5LDY2LjdjLTAuNiwwLTEuMy0wLjItMS44LTAuNmMtMS4zLTEtMS41LTIuOS0wLjUtNC4yQzc4LjgsNTksODAsNTUuNiw4MCw1MmMwLTItMC40LTMuOS0xLjEtNS44IGMtMC4zLTAuNi0yLjMtNS0xMC40LTIyLjFjLTAuNy0xLjUtMC4xLTMuMywxLjQtNGMxLjUtMC43LDMuMy0wLjEsNCwxLjRjNi41LDEzLjcsMTIsMjEuMiwxMi40LDIyLjNjMCwwLDAsMC4xLDAuMSwwLjEgYzEsMi42LDEuNSw1LjMsMS41LDhjMCw1LTMuNiw5LjYtNi43LDEzLjZDODAuNyw2Ni4zLDc5LjgsNjYuNyw3OSw2Ni43eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02NC42IDY0YzYuOC0uMyAxMi4yLTYuMyAxMS45LTEzLjItLjEtMS4zLS4zLTIuNi0uOC0zLjgtLjMtLjYtLjUtMS4yLS43LTEuNGwtLjItLjR2MGMtLjYtMS4xLTIuMy0uOS0yLjYuNHYwQzcxLjkgNDcgNzAuOCA0OCA2OS40IDQ4Yy0xIDAtMi0uNS0yLjYtMS41TDYyIDM3LjdjLTEuMi0yLjEtNC4zLTItNS4zLjJsLTMuMyA3TDUzIDQ1LjVjLS4yLjQtLjUuOS0uNyAxLjQtLjYgMS41LS45IDMtLjkgNC42QzUxLjUgNTguNiA1Ny40IDY0LjMgNjQuNiA2NHpNNjkgMTI0TDU5IDEyNCA1NCA4OSA3NCA4OXpNNDEgNzdIODdWODlINDF6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzQ0NGI1NCIgZD0iTTg3IDc0aC01LjdDODcuOCA2OC45IDkyIDYwLjkgOTIgNTJjMC0zLjUtLjctNy0yLTEwLjMgMC0uMS0uMS0uMS0uMS0uMi0xLjItMi42LTE0LjEtMjkuOS0xOC4yLTM4LjctLjUtMS0xLjQtMS43LTIuNS0xLjhDNjggLjkgNjcgMS41IDY2LjQgMi41bC03LjUgMTMuNi0yLjMtMy43Yy0uNi0uOS0xLjYtMS41LTIuNy0xLjQtMS4xLjEtMi4xLjctMi41IDEuN0wzOCA0MS42Yy0uMS4xLS4xLjItLjEuNC0xLjIgMy4yLTEuOCA2LjYtMS44IDEwIDAgNS45IDEuOCAxMS41IDUuMiAxNi4yLjkgMS4yIDIuNSAxLjcgMy44IDEuMSAxLjctLjggMi4yLTMgMS4yLTQuNUM0Mi43IDYwIDQxLjMgNTQgNDIuNCA0Ny45Yy4yLTEuNC43LTIuNyAxLjItNGwwIDAgMTAuMS0yMmMuMy0uNyAxLjMtLjggMS44LS4xbDEuMSAxLjdjLjggMS4zIDIuNCAxLjggMy45IDEuMS42LS4zIDEtLjggMS4zLTEuM2w2LjItMTEuMWMuNC0uNyAxLjQtLjcgMS44LjFDNzYuMyAyNi40IDg0LjEgNDMgODQuNSA0My45bDAgLjFjLjMuOC42IDEuNS44IDIuM0M4OSA2MC45IDc4IDc0IDY0IDc0SDQxYy0xLjcgMC0zIDEuMy0zIDN2MTJjMCAxLjcgMS4zIDMgMyAzaDEwLjRsNC42IDMyLjRjLjIgMS41IDEuNSAyLjYgMyAyLjZoMTBjMS41IDAgMi44LTEuMSAzLTIuNkw3Ni42IDkySDg3YzEuNyAwIDMtMS4zIDMtM1Y3N0M5MCA3NS4zIDg4LjcgNzQgODcgNzR6TTY1LjUgMTIxaC0zYy0uNSAwLS45LS40LTEtLjlsLTMuOS0yN2MtLjEtLjYuNC0xLjEgMS0xLjFoMTAuOGMuNiAwIDEuMS41IDEgMS4xbC0zLjkgMjdDNjYuNCAxMjAuNiA2NiAxMjEgNjUuNSAxMjF6TTgzIDg2SDQ1Yy0uNiAwLTEtLjQtMS0xdi00YzAtLjYuNC0xIDEtMWgzOGMuNiAwIDEgLjQgMSAxdjRDODQgODUuNiA4My42IDg2IDgzIDg2ek0zOSAxQTMgMyAwIDEgMCAzOSA3IDMgMyAwIDEgMCAzOSAxeiI+PC9wYXRoPjwvc3ZnPg=="/>
    </NavigationButton>

    <div style={{flex: 1}} />

    <SettingsDropdownButton />

    <NavigationButton to={"/about"}>
      About
    </NavigationButton>
  </div>
}


// Estimating block time https://blocklytics.org/blog/ethereum-blocks-subgraph-made-for-time-travel/
// NB: This does not really work at all, why?
const anchor = 10867845;
const anchorTime = 1600188773;
function timeOfBlock(number: number) {
  return DateTime.fromSeconds(anchorTime + ((number - anchor) * 14));
}


function TimeTravelWarning() {
  const block = useTimeTravelBlock();

  const location = useLocation();
  const nonTimeTravelLink = useMemo(() => {
    const query = new URLSearchParams(location.search);
    if (query.has("block")) { query.delete("block"); }
    return `${location.pathname}${query.toString()}`
  }, [location.pathname, location.search]);

  if (!block) {
    return null;
  }

  return <div className={css`
    padding: 8px;
    font-size: 14px;
    background-color: #fff9c4;
  `}>
    You are viewing the state at a block height of <strong>{block}</strong>.
    {" "}<Link to={nonTimeTravelLink} style={{color: '#5519d3'}}>Exit Time Travel</Link>.
  </div>
}


function SettingsDropdownButton() {
  const tippy = useRef<any>();

  return <Tippy
    trigger="manual"
    hideOnClick={true}
    arrow={false}
    interactive={true}
    maxWidth={600}
    className={css`
        background-color: transparent;
        padding: 0;
        color: inherit;
      `}
    onCreate={(instance) => {
      tippy.current = instance;
    }}
    content={
      <Paper>
        <div className={css`
          display: flex;
          flex-direction: column;
        `}
        >
          <NetSwitcher />

          <hr className={css`
            width: 100%;
            border: none;
            border-top: 1px solid silver;
          `} />

          <div className={css`
            display: inline-block;
            padding: 10px;
          `}>
            <div>
              <strong>Time Travel</strong>
              <div style={{color: 'gray'}}>
                Browse state at a specific block time.
              </div>
            </div>
            <div>
              <TimeTravelField />
            </div>
          </div>
        </div>
      </Paper>
    }>
      <NavigationButton onClick={(e: any) => {e.preventDefault(); tippy.current.show() }}>
        <img alt="Preferences Icon" style={{height: '2em'}}  src="data:image/png;base64,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"/>
      </NavigationButton>
  </Tippy>
}

function NetSwitcher() {
  const network = useNetwork();

  const handleClick = () => {
    if (network == Network.MAINNET) {
      window.location.href = "https://ropsten.allthekeeps.com";
    }
    else {
      window.location.href = "https://allthekeeps.com";
    }
  }

  return <div className={css`
    display: inline-block;
    padding: 10px;
  `}>
    <div style={{marginBottom: 5}}>
      <strong>{network == Network.MAINNET ? "Mainnet" : "Ropsten Testnet"}</strong>
    </div>
    <Button size={"tiny"} onClick={handleClick}>
      {network == Network.MAINNET ? "Switch to Ropsten Testnet" : "Switch to Mainnet"}
    </Button>
  </div>
}

function TimeTravelField() {
  const block = useTimeTravelBlock();
  const history = useHistory();
  const location = useLocation();
  const [text, setText] = useState<string>(block?.toString() ?? "");

  const apply = () => {
    const blockNumber = parseInt(text);
    if (!blockNumber || !text) { return; }

    const query = new URLSearchParams(location.search);
    query.set('block', blockNumber.toString());
    history.push(`${location.pathname}?${query.toString()}`);
  }

  const handleKeyPress = (e: any) => {
    if (e.keyCode == 13) {
      apply();
    }
  };
  const handleBlur = (e: any) => {
    apply();
  };

  return <input
    value={text}
    placeholder={"Block Number"}
    className={css`
      padding: 0.4em;
      margin-top: 5px;
    `}
    onChange={(e) => { setText(e.target.value) }}
    onBlur={handleBlur}
    onKeyDown={handleKeyPress}
  />
}