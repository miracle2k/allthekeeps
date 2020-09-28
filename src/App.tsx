import React from 'react';
import {ApolloProvider, useQuery} from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { css, cx } from 'emotion'
import {Operators} from "./pages/Operators";
import {Operator} from "./pages/Operator";
import {Index} from "./pages/Deposits";
import {Deposit} from "./pages/Deposit";
import {NavigationButton} from "./design-system/NavigationButton";
import 'tippy.js/dist/tippy.css';
import {About} from "./pages/About";
import {Redirect} from "react-router";
import {Helmet} from "react-helmet";
import {Governance} from "./pages/Governance";
import { UseWalletProvider } from 'use-wallet'


const client = new ApolloClient({
  // DEV:
  //uri: 'https://api.thegraph.com/subgraphs/name/miracle2k/keep-network',
  // LIVE
  uri: 'https://api.thegraph.com/subgraphs/name/miracle2k/all-the-keeps',
  cache: new InMemoryCache()
});

// function getLibrary(provider: any, connector: any) {
//   return new ethers.providers.Web3Provider(provider, ethers.providers.getNetwork("main"));
// }

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
                  <Index />
                </Route>
                <Route path="/about" exact>
                  <About />
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

    <div style={{flex: 1}} />

    <NavigationButton to={"/about"}>
      About
    </NavigationButton>

  </div>
}