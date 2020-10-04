import {gql, useQuery} from "@apollo/client";
import React from "react";
import {Paper} from "../design-system/Paper";
import {css} from "emotion";
import { Address } from "../components/Address";
import {ExternalLinkIcon} from "../components/ExternalLinkIcon";
import {InfoTooltip} from "../components/InfoTooltip";
import {Helmet} from "react-helmet";
import { Table } from "../components/Table";
import {usePriceFeed} from "../components/PriceFeed";
import {Box} from "../components/Box";

const OPERATOR_QUERY = gql`
    query GetOperators {
        stats(id: "current") {
            availableToBeBonded,
            totalBonded
        }
        operators(first: 1000, orderBy: activeKeepCount, orderDirection: desc) {
            id,
            address,
            bonded,
            unboundAvailable,
            totalKeepCount,
            activeKeepCount,
            stakedAmount
        }
    }
`;


export function Operators() {
  const { loading, error, data } = useQuery(OPERATOR_QUERY);
  const price = usePriceFeed();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {""+ error}</p>;

  const remainingCapacityBTC = price?.val ? parseFloat(data.stats.availableToBeBonded) / 1.5 * price.val : null;

  return  <div style={{padding: '20px'}}>
    <Helmet>
      <title>Operators</title>
    </Helmet>
    <h1 style={{marginTop: 0}}>Operators</h1>
    <div className={css`
      display: flex;
      flex-direction: row;
      & > * {
        margin-right: 20px;
      }
  `}>
      <Box
        label={"total bonded"}
        tooltip={"The amount of collateral backing active deposits."}
      >
        <div>{formatterSimple.format(data.stats.totalBonded)} <span style={{fontSize: '0.8em'}}>ETH</span></div>
      </Box>
      <Box
        label={"available for bonding"}
        tooltip={`The amount of collateral put up by signers still available for new deposits. BTC value is based on a 150% collateralization ratio.`}
      >
        <div>{formatterSimple.format(data.stats.availableToBeBonded)} <span style={{fontSize: '0.8em'}}>ETH</span></div>
        {remainingCapacityBTC !== null ? <div style={{fontSize: '20px', color: 'gray'}}>
          capacity ~{formatter.format(remainingCapacityBTC)} BTC
        </div> : null}
      </Box>
    </div>
    <Paper padding>
      <OperatorsTable data={data} />
    </Paper>
  </div>
}


const formatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2
});

const formatterSimple = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0
});


export function OperatorsTable(props: {
  data: any
}) {
  const {data} = props;

  return <Table
      style={{width: '100%'}}>
    <thead>
    <tr>
      <th>Address</th>
      <th>
        # Keeps <InfoTooltip>Number of keeps/deposits this operator is securing.</InfoTooltip>
      </th>
      <th>
        Amount Bonded <InfoTooltip>Total amount bounded, and bonding capacity level.</InfoTooltip>
      </th>
      <th>
        Amount Staked <InfoTooltip>To stake will be seized in case of fraud.</InfoTooltip>
      </th>
    </tr>
    </thead>
    <tbody>
    {data.operators.map((member: any) => {
      const total = (parseFloat(member.unboundAvailable) + parseFloat(member.bonded));
      const bonded = parseFloat(member.bonded);

      return  <tr key={member.id}>
        <td>
          <Address address={member.address} to={`/operator/${member.address}`} />
          <a title={"Open on Etherscan"} href={`https://etherscan.io/address/${member.address}`} className={css`
                font-size: 0.8em;
                padding-left: 0.2em;
               `}>
            <ExternalLinkIcon />
          </a>
        </td>
        <td>{member.activeKeepCount}<span style={{color: 'gray', fontSize: '0.8em'}}> / {member.totalKeepCount}</span></td>
        <td>
          <span style={{color: 'gray', fontSize: '0.8em'}}>ETH</span> {formatter.format(bonded)}
          {" "}
          {total > 0 ? <span title={`Total: ${formatter.format(member.unboundAvailable)}`} style={{color: 'gray', fontSize: '0.8em'}}>
            ({formatterSimple.format(bonded / total * 100)}%)
          </span> : null}
        </td>
        <td>
          <span style={{color: 'gray', fontSize: '0.8em'}}>KEEP</span> {formatter.format(member.stakedAmount)}
        </td>
      </tr>
    })}
    </tbody>
  </Table>
}