import {css} from "emotion";
import {TimeToNow} from "../../components/FormattedTime";
import {Address, BitcoinAddress, Transaction} from "../../components/Address";
import React from "react";
import BitcoinHelpers from "../../utils/BitcoinHelpers";
import {gql, useQuery} from "@apollo/client";

export function Log(props: {
  depositId: string
}) {
  const {loading, error, data} = useQuery(gql`
      query GetDepositLogs($depositId: ID!)
      {
          events(where: {deposit: $depositId}, orderBy: timestamp, orderDirection:desc) {
              __typename,
              id,
              transactionHash,
              submitter,
              timestamp,

              ...on RegisteredPubKeyEvent {
                  signingGroupPubkeyX,
                  signingGroupPubkeyY
              }

              ...on SetupFailedEvent {
                  reason
              }
          }
      }
  `, {variables: {depositId: props.depositId}});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {"" + error}</p>;

  return data.events.map((logEntry: any) => {
    return <LogEntry key={logEntry.id} event={logEntry}/>
  })
}

function LogEntry(props: {
  event: any
}) {
  const {event} = props;

  let Component = ({
    'CreatedEvent': CreatedEvent,
    'RegisteredPubKeyEvent': RegisteredPubKeyEvent,
    'FundedEvent': FundedEvent,
    'StartedLiquidationEvent': StartedLiquidationEvent,
    'RedemptionRequestedEvent': RedemptionRequestedEvent,
    'GotRedemptionSignatureEvent': GotRedemptionSignatureEvent,
    'RedeemedEvent': RedeemedEvent,
    'SetupFailedEvent': SetupFailedEvent,
    'LiquidatedEvent': LiquidatedEvent,
  } as any)[event.__typename] || UnknownEvent;


  return <div style={{marginBottom: '20px'}}>
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

function LogTitle(props: {
  children: any
}) {
  return <div style={{marginBottom: '0.2em'}}><strong>{props.children}</strong></div>;
}

function UnknownEvent(props: {
  event: any
}) {
  return <div>Unknown Event: {props.event.__typename}</div>
}

function CreatedEvent(props: {
  event: any
}) {
  return <div>
    <LogTitle>Deposit created</LogTitle>
  </div>
}

function RegisteredPubKeyEvent(props: {
  event: any
}) {
  // Triggered when retrieveSignerPubkey() is called
  // TODO: Can we get this earlier?

  const event = props.event;
  const address = BitcoinHelpers.Address.publicKeyPointToP2WPKHAddress(event.signingGroupPubkeyX, event.signingGroupPubkeyY, "main");

  return <div>
    <LogTitle>Bitcoin address provided</LogTitle>
    <div>Signers have provided a Bitcoin address to receive the funds: <BitcoinAddress address={address}/></div>
  </div>
}

function FundedEvent(props: {
  event: any
}) {
  return <div>
    <LogTitle>Funded</LogTitle>
  </div>
}

// Triggered via VM.tbtcToBtc(), or Deposit.transferAndRequestRedemption()
function RedemptionRequestedEvent(props: {
  event: any
}) {

  return <div>
    <LogTitle>Redemption Requested</LogTitle>
    <div>
    </div>
  </div>
}

function StartedLiquidationEvent(props: {
  event: any
}) {
  return <div>
    <LogTitle>Liquidation Started</LogTitle>
  </div>
}

function LiquidatedEvent(props: {
  event: any
}) {
  return <div>
    <LogTitle>Liquidated</LogTitle>
  </div>
}

function SetupFailedEvent(props: {
  event: any
}) {
  let content: any;
  if (props.event.reason == 'FUNDING_TIMEOUT') {
    content = <>
      <LogTitle>Failed: Not funded</LogTitle>
      <div>
        The depositor did not send the required amount of Bitcoin to the deposit address, and the deposit has now timed
        out.
      </div>
      {/*<div style={{color: 'gray', fontSize: '0.9em'}}>*/}
      {/*  The depositor has 3 hours to send the desired amount of Bitcoins to the address provided by the signers.*/}
      {/*  Failure to do so, as*/}
      {/*</div>*/}
    </>
  }
  else {
    content = <>
      <LogTitle>Setup Failed</LogTitle>
      <div>
        Reason: {props.event.reason}
      </div>
    </>
  }
  return <div>
    {content}
  </div>
}

function GotRedemptionSignatureEvent(props: {
  event: any
}) {
  // Signers call provideRedemptionSignature(). They provide a signature over a pay-out transaction that would
  // release the funds.
  return <div>
    <LogTitle>
      Signers provided a redemption signature
    </LogTitle>
    <div>
      The signers provided a signature for the redemption Bitcoin transaction.
    </div>
  </div>
}

function RedeemedEvent(props: {
  event: any
}) {
  // # Triggered when provideRedemptionProof() is called - confirmations
  return <div>
    <LogTitle>Redeemed</LogTitle>
  </div>
}