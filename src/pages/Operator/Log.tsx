import {SortableHeader, Table, useSort} from "../../components/Table";
import React from "react";
import {gql} from "@apollo/client";
import {getNiceStateLabel, getStateBoxStyle, NiceStateLabel} from "../../utils/depositStates";
import {useQueryWithTimeTravel} from "../../TimeTravel";
import {GetOperatorKeepsQuery, GetOperatorLogQuery} from "../../generated/graphql";
import {LogEntry, LogTitle} from "../../components/Log";
import {Address} from "../../components/Address";
import {ETHValue} from "../../components/ETHValue";
import {keepFormatter} from "../../components/KeepValue";

const OPERATOR_LOG_QUERY = gql`
    query GetOperatorLog($id: String!, $orderBy: BondedECDSAKeep_orderBy, $orderDirection: OrderDirection, $block: Block_height) {
        events(where: {operator: $id}, orderBy: timestamp, orderDirection: desc, block: $block) {
            __typename,
            id,
            transactionHash,
            submitter,
            timestamp,
            
            ... on UnbondedValueDepositedEvent {
                amount,
                beneficiary
            },

            ... on UnbondedValueWithdrawnEvent {
                amount,
                beneficiary
            },
            
            ... on BondSeizedEvent {
                amount,
                destination,
                referenceId
            },
            
            ...on TokensSeizedEvent {
                amount
            },

            ...on TopUpInitiatedEvent {
                amount
            }

            ...on TopUpCompletedEvent {
                newAmount
            },
            ...on OperatorAuthorizationEvent {
                authorizationType,
                isDeauthorization
            }
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
    {data?.events.map((event, idx) => {
      return <LogEntry key={event.id} event={event} Components={LogComponents} />
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
  'UndelegatedEvent': UndelegatedEvent,
  'OperatorStakedEvent': OperatorStakedEvent,
  'OperatorAuthorizationEvent': OperatorAuthorizationEvent
}


function UnbondedValueDepositedEvent(props: {
  event: any
}) {
  return <div>
    <LogTitle>ETH Collateral Deposited</LogTitle>
    <div>
      <ETHValue wei={props.event.amount} /> ETH of additional collateral was deposited.
    </div>
  </div>
}

function UnbondedValueWithdrawnEvent(props: {
  event: any
}) {
  return <div>
    <LogTitle>ETH Collateral Withdrawn</LogTitle>
    <div>
      <ETHValue wei={props.event.amount} /> ETH of collateral was withdrawn.
    </div>
  </div>
}

function BondSeizedEvent(props: {
  event: any
}) {
  return <div>
    <LogTitle>Bond Seized</LogTitle>
    <div>
      <ETHValue wei={props.event.amount} /> ETH of bonded collateral was seized by the system (and sent to <Address address={props.event.destination} />).
    </div>
  </div>
}

function TokenGrantStakedEvent(props: {
  event: any
}) {
  return <div>
    <LogTitle>Token Grant Staked</LogTitle>
  </div>
}

function OperatorStakedEvent(props: {
  event: any
}) {
  return <div>
    <LogTitle>Staked</LogTitle>
  </div>
}

function TopUpInitiatedEvent(props: {
  event: any
}) {
  return <div>
    <LogTitle>Topup initiated</LogTitle>
    <div>
      A topup of {keepFormatter.format(props.event.amount / (10**18))} KEEP was initiated.
    </div>
  </div>
}

function TopUpCompletedEvent(props: {
  event: any
}) {
  return <div>
    <LogTitle>Topup Completed</LogTitle>
    <div>
      The topup completed. The total amount staked is now {keepFormatter.format(props.event.newAmount / (10**18))} KEEP.
    </div>
  </div>
}

function TokensSeizedEvent(props: {
  event: any
}) {
  return <div>
    <LogTitle>Tokens Seized</LogTitle>
    <div>
      {keepFormatter.format(props.event.amount / (10**18))} KEEP were seized.
    </div>
  </div>
}


function UndelegatedEvent(props: {
  event: any
}) {
  return <div>
    <LogTitle>Undelegated</LogTitle>
  </div>
}


function OperatorAuthorizationEvent(props: {
  event: any
}) {
  return <div>
    <LogTitle>Contract {props.event.isDeauthorization ? "Deauthorized" : "Authorized"}</LogTitle>
    <div>
      The {props.event.authorizationType} contract has been {props.event.isDeauthorization ? "deauthorized" : "authorized"}.
    </div>
  </div>
}