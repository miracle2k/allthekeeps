import {SortableHeader, Table, useSort} from "../../components/Table";
import React from "react";
import {gql} from "@apollo/client";
import {getNiceStateLabel, getStateBoxStyle, NiceStateLabel} from "../../utils/depositStates";
import {useQueryWithTimeTravel} from "../../TimeTravel";
import {GetOperatorKeepsQuery, GetOperatorLogQuery} from "../../generated/graphql";
import {LogEntry, LogTitle} from "../../components/Log";
import {Address} from "../../components/Address";

const OPERATOR_LOG_QUERY = gql`
    query GetOperatorLog($id: String!, $orderBy: BondedECDSAKeep_orderBy, $orderDirection: OrderDirection, $block: Block_height) {
        events(where: {operator: $id}, orderBy: timestamp, orderDirection: desc, block: $block) {
            __typename,
            id,
            transactionHash,
            submitter,
            timestamp
        }
    }

    ${NiceStateLabel}
`;


export function OperatorLog(props: {
  operatorId: string
}) {
  const sortState = useSort("createdAt");

  const { loading, error, data } = useQueryWithTimeTravel<GetOperatorLogQuery>(OPERATOR_LOG_QUERY, {variables: {
      id: props.operatorId,
      orderBy: sortState.column,
      orderDirection: sortState.direction
    }});

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error :( {""+ error}</p>;

  return <div>
    {data?.events.map(event => {
      return <LogEntry event={event} Components={LogComponents} />
    })}
  </div>
}

const LogComponents = {
  'UnbondedValueDepositedEvent': UnbondedValueDepositedEvent,
  'UnbondedValueWithdrawnEvent': UnbondedValueWithdrawnEvent,
  'BondSeizedEvent': BondSeizedEvent,
  'TokenGrantStakedEvent': TokenGrantStakedEvent,
  'TokensSeizedEvent': TokensSeizedEvent,
  'TopUpInitiatedEvent': TopUpInitiatedEvent,
  'TopUpCompletedEvent': TopUpCompletedEvent,
  'UndelegatedEvent': UndelegatedEvent
}


function UnbondedValueDepositedEvent(props: {
  event: any
}) {
  return <div>
    <LogTitle>ETH Collateral Deposited</LogTitle>
  </div>
}

function UnbondedValueWithdrawnEvent(props: {
  event: any
}) {
  return <div>
    <LogTitle>ETH Collateral Withdrawn</LogTitle>
  </div>
}

function BondSeizedEvent(props: {
  event: any
}) {
  return <div>
    <LogTitle>Bond Seized</LogTitle>
  </div>
}

function TokenGrantStakedEvent(props: {
  event: any
}) {
  return <div>
    <LogTitle>Token Grant Staked</LogTitle>
  </div>
}

function TopUpInitiatedEvent(props: {
  event: any
}) {
  return <div>
    <LogTitle>Topup initiated</LogTitle>
  </div>
}

function TopUpCompletedEvent(props: {
  event: any
}) {
  return <div>
    <LogTitle>Topup Completed</LogTitle>
  </div>
}

function TokensSeizedEvent(props: {
  event: any
}) {
  return <div>
    <LogTitle>Tokens Seized</LogTitle>
  </div>
}


function UndelegatedEvent(props: {
  event: any
}) {
  return <div>
    <LogTitle>Undelegated</LogTitle>
  </div>
}