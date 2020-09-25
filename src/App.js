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
import {Deposits} from "./pages/Deposits";
import {Deposit} from "./pages/Deposit";
import {NavigationButton} from "./design-system/NavigationButton";
import 'tippy.js/dist/tippy.css';
import {About} from "./pages/About";
import {Redirect} from "react-router";

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/miracle2k/keep-network\n',
  cache: new InMemoryCache()
});


function App() {
  return (
      <ApolloProvider client={client}>
        <Router>
          <Header />
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