import {gql, useQuery} from "@apollo/client";
import React from "react";
import {Paper} from "../design-system/Paper";
import { Address } from "../components/Address";
import {InfoTooltip} from "../components/InfoTooltip";
import {Helmet} from "react-helmet";
import {SortableHeader, SortState, Table, useSort} from "../components/Table";
import {GetUsersQuery} from "../generated/graphql";
import {useEtherscanDomain} from "../NetworkContext";
import {useQueryWithTimeTravel} from "../TimeTravel";
import {SkeletonTableRow} from "../components/SkeletonLoader";

const USERS_QUERY = gql`
    query GetUsers(
        $orderBy: User_orderBy,
        $direction: OrderDirection,
        $block: Block_height
    ) {
        users(first: 1000, orderBy: $orderBy, orderDirection: $direction, block: $block) {
            id,
            address,
            numDepositsCreated,
            numDepositsUnfunded,
            numDepositsRedeemed,
            numOwnDepositsRedeemed
        }
    }
`;


export function Users() {
  const sortState = useSort("numDepositsCreated");
  const { loading, error, data } = useQueryWithTimeTravel<GetUsersQuery>(USERS_QUERY, {
    variables: {
      orderBy: sortState.column,
      direction: sortState.direction
    }
  });

  if (error) return <p>Error :( {""+ error}</p>;

  return  <div style={{padding: '20px'}}>
    <Helmet>
      <title>Users</title>
    </Helmet>
    <h1 style={{marginTop: 0, marginBottom: 25}}>Users
    </h1>
    <Paper padding>
      <UsersTable data={data} sortState={sortState} loading={loading} />
    </Paper>
  </div>
}


export function UsersTable(props: {
  data: any,
  loading?: boolean,
  sortState: SortState,
}) {
  const {data} = props;

  return <Table
      style={{width: '100%'}}>
    <thead>
    <tr>
      <th>Address</th>
      <th>
        <SortableHeader fieldId={"numDepositsCreated"} state={props.sortState}>
          # Created <InfoTooltip>Number of deposits the address has initiated.</InfoTooltip>
        </SortableHeader>
      </th>
      <th>
        <SortableHeader fieldId={"numDepositsUnfunded"} state={props.sortState}>
          # Unfunded <InfoTooltip>Number of deposits the address has initiated, and then not completed funding.</InfoTooltip>
        </SortableHeader>
      </th>
      <th>
        <SortableHeader fieldId={"numDepositsRedeemed"} state={props.sortState}>
          # Redeemed <InfoTooltip>Number of deposits this address has redeemed.</InfoTooltip>
        </SortableHeader>
      </th>
      <th>
        <SortableHeader fieldId={"numOwnDepositsRedeemed"} state={props.sortState}>
          # Own Redeemed <InfoTooltip>Number of deposits this address has redeemed which were also created by it.</InfoTooltip>
        </SortableHeader>
      </th>
    </tr>
    </thead>
    <tbody>
    {props.loading ? <SkeletonTableRow columns={5} /> : null}
    {data?.users.map((user: any) => {
      return <tr key={user.id}>
        <td>
          <Address long address={user.address} />
        </td>
        <td>{user.numDepositsCreated}</td>
        <td>{user.numDepositsUnfunded}</td>
        <td>{user.numDepositsRedeemed}</td>
        <td>{user.numOwnDepositsRedeemed}</td>
      </tr>
    })}
    </tbody>
  </Table>
}
