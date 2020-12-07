import React from "react";
import {css} from "emotion";
import {TimeToNow} from "./FormattedTime";
import {Address, Transaction} from "./Address";

export function LogTitle(props: {
  children: any
}) {
  return <div style={{marginBottom: '0.2em'}}><strong>{props.children}</strong></div>;
}

export function LogEntry(props: {
  event: {
    transactionHash: string,
    submitter: string,
    __typename: string,
    timestamp: string
  },
  Components: any
}) {
  const {event, Components} = props;

  let Component = Components[event.__typename] || UnknownEvent;

  return <div className={css`
    &:not(:last-child) {
       margin-bottom: 20px;
       border-bottom: 1px dotted silver;
       padding-bottom: 20px;
    }     
   `}>
    <div className={css`    
      font-size: 0.85em;
      margin-bottom: 0.4em;
      color: gray;
    `}>
      <TimeToNow time={event.timestamp}/> @ <Transaction tx={event.transactionHash}/> by <Address address={event.submitter}/>
    </div>
    <div>
      <Component event={event}/>
    </div>
  </div>
}

export function UnknownEvent(props: {
  event: any
}) {
  return <div>Unknown Event: {props.event.__typename}</div>
}