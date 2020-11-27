import {Address, BitcoinAddress} from "../../components/Address";
import React from "react";
import BitcoinHelpers from "../../utils/BitcoinHelpers";
import { gql } from '@apollo/client';
import {GetDepositLogsQuery} from "../../generated/graphql";
import {useQueryWithTimeTravel} from "../../TimeTravel";
import {AuctionDetailsFragment, getAuctionDetailsFromDeposit} from "../../utils/getAuctionDetails";
import {ETHValue} from "../../components/ETHValue";
import {LogTitle, LogEntry} from "../../components/Log";

export function Log(props: {
  depositId: string
}) {
  const {loading, error, data} = useQueryWithTimeTravel<GetDepositLogsQuery>(gql`
      query GetDepositLogs($depositId: String!, $block: Block_height)
      {
          events(where: {deposit: $depositId}, orderBy: timestamp, orderDirection: desc, block: $block) {
              __typename,
              id,
              transactionHash,
              submitter,
              timestamp,

              ...on RegisteredPubKeyEvent {
                  signingGroupPubkeyX,
                  signingGroupPubkeyY
              }
              
              ...on StartedLiquidationEvent {
                  cause
              },

              ...on RedemptionRequestedEvent {
                  redeemerOutputScript,
                  requestedFee
              },

              ...on LiquidatedEvent {
                  deposit {
                      ...AuctionDetails
                  }
              },

              ...on SetupFailedEvent {
                  reason,
                  deposit {
                      bondedECDSAKeep {
                          pubkeySubmissions { address },
                          members { address }
                      }
                  }
              }
          }
      }
      
      ${AuctionDetailsFragment}
  `, {variables: {depositId: props.depositId}});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {"" + error}</p>;

  return <>
    {data!.events.map((logEntry: any) => {
      return <LogEntry key={logEntry.id} event={logEntry} Components={LogComponents} />
    })}
  </>
}


const LogComponents = {
  'CreatedEvent': CreatedEvent,
  'RegisteredPubKeyEvent': RegisteredPubKeyEvent,
  'FundedEvent': FundedEvent,
  'StartedLiquidationEvent': StartedLiquidationEvent,
  'RedemptionRequestedEvent': RedemptionRequestedEvent,
  'GotRedemptionSignatureEvent': GotRedemptionSignatureEvent,
  'RedeemedEvent': RedeemedEvent,
  'SetupFailedEvent': SetupFailedEvent,
  'LiquidatedEvent': LiquidatedEvent,
  'CourtesyCalledEvent': CourtesyCalledEvent,
  'ExitedCourtesyCallEvent': ExitedCourtesyCallEvent,
};


function CreatedEvent(props: {
  event: any
}) {
  return <div>
    <LogTitle>Deposit created</LogTitle>
    <div>
      <Address address={props.event.submitter}/> created a new deposit.
    </div>
    <div style={{color: 'gray', fontSize: '0.9em', marginTop: '7px'}}>
      A random group of nodes (called the signers) will now be selected to collateralize and hold the
      Bitcoin.
    </div>
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
    <div>
      Signers have provided a Bitcoin address to receive the funds: <BitcoinAddress address={address}/>
    </div>
    <div style={{color: 'gray', fontSize: '0.9em', marginTop: '7px'}}>
      The depositor must now send the chosen amount of Bitcoin to this address, then provide proof that they did so.
    </div>
  </div>
}

function FundedEvent(props: {
  event: any
}) {
  return <div>
    <LogTitle>Funded</LogTitle>
    <div>
      Proof has been submitted that the Bitcoin have been sent to the address provided, and the deposit is now active.
    </div>
  </div>
}

// Triggered via VM.tbtcToBtc(), or Deposit.transferAndRequestRedemption()
function RedemptionRequestedEvent(props: {
  event: any
}) {
  const address = BitcoinHelpers.Address.fromScript(props.event.redeemerOutputScript);

  return <div>
    <LogTitle>Redemption Requested</LogTitle>
    <div>
      <Address address={props.event.submitter}/> paid back the TBTC tokens to the system and is asking for
      the deposited bitcoin to be sent to <BitcoinAddress address={address} />.
    </div>
  </div>
}

export function getLiquidationCauseAsString(cause: string) {
  return ({
    'FRAUD': 'Signer Fraud',
    'PROOF_TIMEOUT': 'Signer Timeout',
    'SIGNATURE_TIMEOUT': 'Signer Timeout',
    'UNDERCOLLATERIZED': 'Undercollaterialized',
    'COURTESY_CALL_EXPIRED': 'Undercollaterialized'
  } as any)[cause] || cause;
}

function StartedLiquidationEvent(props: {
  event: any
}) {
  const {cause} = props.event;
  const title: string = getLiquidationCauseAsString(cause);

  const description: string = ({
    'FRAUD': 'One of the signers submitted a fraudulent signature.',
    'PROOF_TIMEOUT': 'The signing group failed to submit proof that their transaction, releasing the deposited Bitcoin, was included in the blockchain.',
    'SIGNATURE_TIMEOUT': 'The signing group failed to provide a signature for a transaction releasing the Bitcoin.',
    'UNDERCOLLATERIZED': 'The deposit became undercollateralized due to the value of the backing ETH bond falling.',
    'COURTESY_CALL_EXPIRED': 'The deposit became undercollateralized due to the value of the backing ETH bond falling. It was courtesy called earlier, but the courtesy call expired.'
  } as any)[cause];

  return <div>
    <LogTitle>Liquidation Started: {title}</LogTitle>
    <div>
      {description}
    </div>
    <div style={{color: 'gray', fontSize: '0.9em', marginTop: '7px'}}>
      The system now runs a falling-price auction, selling the ETH collateral backing the deposit.
    </div>
  </div>
}

function LiquidatedEvent(props: {
  event: any
}) {
  const details = getAuctionDetailsFromDeposit(props.event.deposit);
  return <div>
    <LogTitle>Liquidated</LogTitle>
    <div>
      <Address address={props.event.submitter}/> bought {details.percentage}% (<ETHValue wei={details.value} /> ETH) of the collateral.
    </div>
  </div>
}


function CourtesyCalledEvent(props: {
  event: any
}) {
  return <div>
    <LogTitle>Courtesy Call</LogTitle>
    {/*submitted by XXX */}
    <div>
      The deposit has been notified that is undercollateralized.
    </div>
    <div style={{color: 'gray', fontSize: '0.9em', marginTop: '7px'}}>
      The value of the backing collateral has fallen, and now covers less than the required 125% of
      the Bitcoin deposited. Anyone is now able to start the redemption process. If the deposit is not redeemed
      within 6 hours, or regains the required collaterialization ratio, liquidation proceedings will be started.
    </div>
  </div>
}

function ExitedCourtesyCallEvent(props: {
  event: any
}) {
  return <div>
    <LogTitle>Courtesy Call Exited</LogTitle>
    <div>
      The deposit regained the required collaterialization ratio and is no longer in danger
      of being liquidated.
    </div>
  </div>
}

function SetupFailedEvent(props: {
  event: any
}) {
  let content: any;
  if (props.event.reason == 'FUNDING_TIMEOUT' || props.event.reason == 'SIGNER_SETUP_FAILED_DEPOSITOR') {
    content = <>
      <LogTitle>Failed: Not funded</LogTitle>
      <div>
        The depositor did not send the required amount of Bitcoin to the deposit address,
        and the deposit has now timed out.
      </div>
      {/*<div style={{color: 'gray', fontSize: '0.9em'}}>*/}
      {/*  The depositor has 3 hours to send the desired amount of Bitcoins to the address provided by the signers.*/}
      {/*  Failure to do so, as*/}
      {/*</div>*/}
    </>
  }
  else if (props.event.reason == 'SIGNER_SETUP_FAILED') {
    const allSigners = props.event.deposit.bondedECDSAKeep.members.map((s: any) => s.address);
    const goodSigners = new Set(props.event.deposit.bondedECDSAKeep.pubkeySubmissions.map((s: any) => s.address));
    const badSigners: string[] = allSigners.filter((s: any) => !goodSigners.has(s));

    content = <>
      <LogTitle>Failed: Signer Setup</LogTitle>
      <div>
        The signers failed to coordinate to provide a Bitcoin deposit address. Specifically, nothing was
        submitted by the following signer(s): {badSigners.map(address => <Address to={`/operator/${address}`} address={address} />).reduce((prev, curr) => [prev, ', ', curr] as any, "")}
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