import {gql, useQuery, useSubscription} from "@apollo/client";
import React, {useCallback, useEffect, useState} from "react";
import {useParams} from 'react-router';
import {getSatoshisAsBitcoin} from "../../utils/getSatoshisAsBitcoin";
import {TimeToNow} from "../../components/FormattedTime";
import {css} from "emotion";
import {Address, BitcoinAddress} from "../../components/Address";
import {Paper} from "../../design-system/Paper";
import {getNiceStateLabel, getStateTooltip} from "../../utils/depositStates";
import {
  getTDTTokenAddress,
  getVendingMachineAddress,
  hasDepositBeenUsedToMint,
  isVendingMachine,
} from "../../utils/contracts";
import {InfoTooltip} from "../../components/InfoTooltip";
import {TBTCIcon} from "../../design-system/tbtcIcon";
import {Helmet} from "react-helmet";
import BitcoinHelpers from "../../utils/BitcoinHelpers";
import {getWeiAsEth} from "../../utils/getWeiAsEth";
import {CollaterizationStatus} from "../../components/CollateralizationStatus";
import {Box} from "../../components/Box";
import {Button} from "../../design-system/Button";
import {useWallet} from 'use-wallet'
import {Loading} from "../../components/Loading";
import {ExternalLinkIcon} from "../../components/ExternalLinkIcon";
import {useElectrumClient} from "../../utils/useElectrumClient";
import {Log} from "./log";


const DEPOSIT_QUERY = gql`
    query GetDeposit($id: String!) {
        deposit(id: $id) {
            id,
            contractAddress,
            currentState,
            createdAt,
            keepAddress,
            lotSizeSatoshis,
            endOfTerm,

            tbtcSystem,
            tdtToken {
                id,
                tokenID,
                owner,
                minter
            }

            initialCollateralizedPercent,
            undercollateralizedThresholdPercent,
            severelyUndercollateralizedThresholdPercent,
            
            bondedECDSAKeep {
                id,
                keepAddress,
                totalBondAmount,
                publicKey,
                status,
                honestThreshold,
                members {
                    id,
                    address
                }
            }
        }
    }
`;

const DEPOSIT_SUBSCRIPTION = gql`
    subscription WatchDeposit($id: String!) {
        deposit(id: $id) {
            id
            currentState
        }
    }
`;

const formatter = new Intl.NumberFormat("en-US", {
  style: 'percent',
  maximumFractionDigits: 2
});


export function Deposit() {
  return <div className={css`
      padding: 1em;
    `}>
    <Helmet>
      <title>Deposit</title>
    </Helmet>
    <Content />
  </div>
}


const depositAbi = [
  "function notifyFundingTimedOut()",
  "function notifySignerSetupFailed()"
];



export function Content() {
  let { depositId } = useParams<any>();
  const { loading, error, data } = useQuery(DEPOSIT_QUERY, {variables: {id: depositId}});
  useSubscription(DEPOSIT_SUBSCRIPTION, { variables: { id: depositId } });

  const btcAddress = data?.deposit.bondedECDSAKeep.publicKey ?
      BitcoinHelpers.Address.publicKeyToP2WPKHAddress(data.deposit.bondedECDSAKeep.publicKey.slice(2), "main")
      : "";
  const shouldShowConfirmationInfo = data?.deposit.currentState == 'AWAITING_BTC_FUNDING_PROOF';
  const btcTxState = useBitcoinTxState(btcAddress, parseInt(data?.deposit.lotSizeSatoshis), shouldShowConfirmationInfo)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {""+ error}</p>;

  const canBeRedeemed = ['ACTIVE', 'COURTESY_CALL'].indexOf(data.deposit.currentState) > -1;
  const isAtTerm = false;  // XXX still needs to be fixed
  const canBeRedeemedByAnyone = canBeRedeemed && (data.deposit.currentState == 'COURTESY_CALL' || isAtTerm || isVendingMachine(data.deposit.tdtToken.owner));

  return <div>
    <div className={css`
      display: flex;
      flex-direction: row;
      & > * {
        margin-right: 20px;
      }
  `}>
      <Box label={"lot size"}>
        {getSatoshisAsBitcoin(data.deposit.lotSizeSatoshis)} BTC
      </Box>

      <Box label={"state"}>
        <div>
          {getNiceStateLabel(data.deposit.currentState)} {getStateTooltip(data.deposit.currentState)
            ? <span className={css`position: relative; top: -0.5em; font-size: 0.6em;`}><InfoTooltip>{getStateTooltip(data.deposit.currentState)}</InfoTooltip></span>
            : null}
        </div>
        {
          hasDepositBeenUsedToMint(data.deposit.tdtToken.owner, data.deposit.currentState)
              ? <div className={css`
                  font-size: 0.6em;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
              ` }>
                <TBTCIcon /> <span style={{paddingLeft: 5}}>tBTC minted</span>
                </div>
              : null
        }
        {
          <div style={{lineHeight: 1, alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
            {(shouldShowConfirmationInfo && btcTxState) ? <span style={{fontSize: 20, flex: 1, color: 'gray'}}>
              {btcTxState.hasTransaction
                  ? <>{btcTxState?.numConfirmations} confirmations</>
                  : <>waiting for transaction</>
              }
              <a title={"Open on blockchain.info"} href={
                btcTxState.transactionHash
                    ? `https://www.blockchain.com/btc/tx/${btcTxState.transactionHash}`
                    : `https://www.blockchain.com/btc/address/${btcAddress}`
              } className={css`
                  font-size: 0.8em;
                  padding-left: 0.2em;
                 `}>
                <ExternalLinkIcon />
              </a> <span style={{fontSize: 12}}><Loading /></span>
            </span> : null}
            <NotifyButton data={data} />
          </div>
        }
      </Box>

      <Box label={"creation date"}>
        <TimeToNow time={data.deposit.createdAt} />
      </Box>
    </div>

    <div style={{
      display: "flex",
      flexDirection: "row",
      marginTop: '20px'
    }}>
      <div style={{marginRight: '20px', flex: 1}}>
        <Paper padding>
          <div className={css`
            font-weight: bold;
            margin-bottom: 0.5em;
          `}>
            Ownership <InfoTooltip>
              For every deposit, a non-fungible TDT Token is minted. Whoever owns this token, owns the deposit.
            </InfoTooltip>
          </div>
          <div className={css`
          `}>
            {
              hasDepositBeenUsedToMint(data.deposit.tdtToken.owner, data.deposit.currentState)
                  ? <div>
                    This deposit has been used to mint tBTC. The corresponding TDT token is now
                    owned by the <a href={`https://etherscan.io/address/${getVendingMachineAddress()}`}>Vending Machine contract</a>.
                  </div>
                  : (data.deposit.tdtToken.owner == data.deposit.tdtToken.minter) ? <div>
                    The TDT Token representing ownership over this deposit is owned by the original
                    deposit creator, <Address address={data.deposit.tdtToken.owner} />.
                  </div> : <div>
                    The TDT Token representing ownership over this deposit is owned by <Address address={data.deposit.tdtToken.owner} />.
                  </div>
            }
          </div>
          <div className={css`
            font-size: 0.8em;
            margin-top: 10px;
            & a, a:visited {
              color: gray;
            }            
          `}>
            <a href={`https://etherscan.io/token/${getTDTTokenAddress()}?a=${data.deposit.tdtToken.tokenID}`}>TDT Token on Etherscan</a>
          </div>

          {(canBeRedeemedByAnyone) ?
            <div style={{marginTop: 20}}>
              This deposit can be redeemed by anyone, even non-owners. <InfoTooltip>Because it is owned by the Vending Machine, has been courtesy called, or is at-term, anyone can exchange tBTC for the Bitcoin deposited here.</InfoTooltip>
              <div style={{marginTop: '8px'}}><Button size={"small"} to={`https://dapp.tbtc.network/deposit/${data.deposit.contractAddress}/redeem`}>
                Redeem
              </Button></div>
            </div>
          : null }
        </Paper>

        <div style={{marginTop: '20px'}}>
          <Paper>
            <PropertyTable
                data={[
                  {
                    key: 'tokenOwner',
                    label: "Current Owner",
                    tooltip: "Deposit owner as represented by ownership over the TDT token.",
                    value: <Address address={data.deposit.tdtToken.owner} />
                  },
                  {
                    key: 'tokenMinter',
                    label: "Creator",
                    tooltip: "Original creator of this deposit.",
                    value: <Address address={data.deposit.tdtToken.minter}  />
                  },
                  {
                    key: 'tokenId',
                    label: "Token ID",
                    value: <Address address={data.deposit.tdtToken.tokenID} to={`https://etherscan.io/token/${getTDTTokenAddress()}?a=${data.deposit.tdtToken.tokenID}`}  />
                  },
                  data.deposit.endOfTerm ? {
                    key: 'endOfTerm',
                    label: "End Of Term",
                    tooltip: "Within the term, only the owner can redeem the deposit or mint tBTC.",
                    value: <TimeToNow time={data.deposit.endOfTerm} />
                  } : undefined,
                  {
                    key: 'depositContract',
                    label: "Deposit Contract",
                    value: <Address address={data.deposit.contractAddress}  />
                  }
                ]}
            />
          </Paper>
        </div>
      </div>

      <div style={{flex: 1}}>
        <Paper>
          <div className={css`
            font-weight: bold;
            padding: 20px;
            padding-bottom: 0;
          `}>
            Keep <InfoTooltip>
              The Keep holds the original BTC in custody, and signers stake ETH as a security bond.
            </InfoTooltip>
          </div>
          <PropertyTable data={[
            {
              key: 'signers',
              label: "Signers",
              tooltip: "The node operators collectively holding the Bitcoin private key",
              value: <div>
                {data.deposit.bondedECDSAKeep.members.map((m: any) => {
                  return <div key={m.address}>
                    <Address address={m.address} to={`/operator/${m.address}`} />
                  </div>
                })}
              </div>
            },
            {
              key: 'bondedAmount',
              label: "Bond",
              tooltip: "The total value the signers have bonded to guarantee this deposit.",
              value: <span>{getWeiAsEth(data.deposit.bondedECDSAKeep.totalBondAmount).toFixed(2)} ETH</span>
            },
            {
              key: 'collateralization',
              label: "Collaterialization",
              tooltip: "If ETH loses value, the keep may become undercollaterized",
              value: <CollaterizationStatus deposit={data.deposit} highlightNormal={true} style={{fontWeight: 'bold'}} />
            },
            {
              key: 'thresholds',
              label: "Thresholds",
              tooltip: "The collateralization requirements for this deposit: Initial / Courtesy Call / Liquidation",
              value: <span>
                {formatter.format(data.deposit.initialCollateralizedPercent / 100)}<span style={{color: 'silver'}}> / </span>{formatter.format(data.deposit.undercollateralizedThresholdPercent / 100)}<span style={{color: 'silver'}}> / </span>{formatter.format(data.deposit.severelyUndercollateralizedThresholdPercent / 100)}
              </span>
            },
            {
              key: 'honestThreshold',
              label: "Honest Threshold",
              tooltip: "How many signers must be honest for the bond not be lost.",
              value: <span>{formatter.format(data.deposit.bondedECDSAKeep.honestThreshold / data.deposit.bondedECDSAKeep.members.length)}</span>
            },
            {
              key: 'keepAddress',
              label: "Contract Address",
              tooltip: "The contract managing the keep",
              value: <Address address={data.deposit.keepAddress} />
            },
            btcAddress ? {
              key: 'publicKey',
              label: "BTC Address",
              value: <BitcoinAddress address={btcAddress} />
            } : undefined,
            {
              key: 'status',
              label: "Status",
              value: data.deposit.bondedECDSAKeep.status
            }
          ]} />
        </Paper>
      </div>
    </div>

    <Paper>
      <div className={css`           
        padding: 20px;
      `}>
        <h3 style={{marginTop: 0}}>Log</h3>
        <Log depositId={data.deposit.id} />
      </div>
    </Paper>
  </div>
}


function NotifyButton(props: {
  data: any
}) {
  const wallet = useWallet()
  const data = props.data;
  const [isBusy, setBusy] = useState(false);

  let func: string;
  if (data.deposit.currentState == 'AWAITING_SIGNER_SETUP') {
    func = 'notifySignerSetupFailed';
  } else if (data.deposit.currentState == 'AWAITING_BTC_FUNDING_PROOF') {
    func = 'notifyFundingTimedOut';
  }
  else {
    return null;
  }

  return <Button size={"tiny"} onClick={async () => {
    setBusy(true)
    try {
      const ethers = await import("ethers");

      // This is what shoes the metamask popup (could support different providers)
      // await returns only when the user took action, but unfortunately it does not tell us the result
      // (we'd have to wait for a state update).
      await wallet.connect("injected")

      // TODO: We should use wallet.ethereum here I think, but again, it is not filled until the
      // component re-renders.
      const provider = new ethers.providers.Web3Provider((window as any).ethereum as any);

      const contract = new ethers.Contract(data.deposit.contractAddress, depositAbi, provider);
      const daiWithSigner = contract.connect(provider.getSigner());

      // gas estimation fails, why?
      //alert(await daiWithSigner.estimateGas.notifyFundingTimedOut());

      // limit based on: https://etherscan.io/tx/0x35d1a7e9d25bb1aefb4a0ed5237854a12440a4748091b9f16474b7a2d5ac5251, but can vary widely, I also saw 246,750
      const tx = await daiWithSigner[func]({gasLimit: 593800})
      const receipt = await tx.wait();
    }
    finally {
      setBusy(false)
    }
  }}>
    Notify Timeout {isBusy ? <Loading /> : <InfoTooltip>
    If the deposit process was not completed in time. Notifying the contract of this will release
    the bonded funds back to the signers.
  </InfoTooltip>}
  </Button>
}


function PropertyTable(props: {
  data: (undefined|{
    key: string,
    label: string,
    tooltip?: string,
    value: any
  })[]
}) {
  return <table className={css`
      color: #0A0806;
      padding: 15px;
      
      & td, th {
        font-weight: normal;
        padding: 5px;
        text-align: left;
        vertical-align: top;
      }
    `}>
      <tbody>
      {props.data.map(row => {
        if (!row) { return null; }
        return <tr key={row.key}>
          <th>
            {row.label} {row.tooltip ? <InfoTooltip>{row.tooltip}</InfoTooltip> : null}
          </th>
          <td>{row.value}</td>
        </tr>
      })}
      </tbody>
    </table>
}


// A bug:
// - first findScript() does return null even though findorWaitfor() finds one.
function useBitcoinTxState(address: string, lotSizeSatoshis: number, isEnabled: boolean) {
  const client = useElectrumClient();
  const [txHash, setTxHash] = useState("");
  const [isInitialized, setInitialized] = useState(false);
  const [confirmations, setConfirmations] = useState(0);

  const waitForTxAndConfirmations = useCallback(async (cancelToken: {set: boolean}) => {
    let tx = await BitcoinHelpers.Transaction.findWithClient(client!, address, lotSizeSatoshis);
    if (cancelToken.set) { return; }

    if (!tx) {
      setInitialized(true);

      // Would be much nicer to get a cancel token from those helper functions
      tx = await BitcoinHelpers.Transaction.findOrWaitFor(
          client,
          address,
          lotSizeSatoshis
      )
    }
    if (cancelToken.set) { return; }

    setTxHash(tx.transactionID);

    // Now ensure we have enough confirmations
    let confirmations = await BitcoinHelpers.Transaction.checkForConfirmations(client, tx.transactionID, 0);
    if (cancelToken.set) { return; }

    setConfirmations(confirmations!);
    setInitialized(true);

    confirmations = await BitcoinHelpers.Transaction.waitForConfirmations(
        client,
        tx.transactionID,
        6,
        ({ transactionID, confirmations, requiredConfirmations }) => {
          // Stop watching by returning a positive value.
          if (cancelToken.set) {
            return true;
          }
        });
    if (cancelToken.set) { return; }

    setConfirmations(confirmations);
  }, [address, lotSizeSatoshis, setConfirmations, setTxHash, client]);

  useEffect(() => {
    if (!address || !lotSizeSatoshis || !isEnabled || !client) {
      return;
    }

    const cancelToken = {set: false};
    waitForTxAndConfirmations(cancelToken);
    return () => {
      cancelToken.set = true;
    }
  }, [address, lotSizeSatoshis, client]);

  // isInitialized makes sure we do not return "no tx" if we really don't know yet.
  return isInitialized ? {
    hasTransaction: !!txHash,
    transactionHash: txHash,
    numConfirmations: confirmations
  } : null;
}

// TODO: This would happen multiple times if a fee increase is requested via increaseRedemptionFee()


