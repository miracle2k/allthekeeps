import {getNiceStateLabel, getStateTooltip, useTimeRemaining} from "../../utils/depositStates";
import {css} from "emotion";
import {InfoTooltip} from "../../components/InfoTooltip";
import {hasDepositBeenUsedToMint} from "../../utils/contracts";
import {TBTCIcon} from "../../design-system/tbtcIcon";
import {ExternalLinkIcon} from "../../components/ExternalLinkIcon";
import {Loading} from "../../components/Loading";
import {Box} from "../../components/Box";
import React, {useState} from "react";
import {useBitcoinTxState} from "../../utils/useBitcoinTxState";
import {useBlockchainBaseUrl, useDAppDomain} from "../../NetworkContext";
import {useBtcAddressFromPublicKey} from "../../utils/useBtcAddressFromPublicKey";
import {useWallet} from "use-wallet";
import {Button} from "../../design-system/Button";
import {getLiquidationCauseAsString} from "./log";
import {formatSeconds} from "../../components/FormattedTime";
import {useIsTimeTravel} from "../../TimeTravel";

/**
 * Displays the deposit status in a <Box />.
 */
export function StatusBox(props: {
  deposit: any
}) {
  const {deposit} = props;
  const blockChainBaseUrl = useBlockchainBaseUrl();
  const dAppDomain = useDAppDomain();
  const btcAddress = useBtcAddressFromPublicKey(deposit.bondedECDSAKeep.publicKey);
  const isTimeTravel = useIsTimeTravel();
  const shouldShowConfirmationInfo = !isTimeTravel && deposit.currentState == 'AWAITING_BTC_FUNDING_PROOF';
  const btcTxState = useBitcoinTxState(btcAddress, deposit.lotSizeSatoshis, shouldShowConfirmationInfo)
  const timing = useTimeRemaining(deposit);

  // Secondary information/actions shown below the status.
  let secondLine: any;
  if (['LIQUIDATED', 'LIQUIDATION_IN_PROGRESS', 'FRAUD_LIQUIDATION_IN_PROGRESS'].indexOf(deposit.currentState) > -1) {
      secondLine = <span style={{fontSize: 20, flex: 1, color: 'gray'}}>
        {getLiquidationCauseAsString(deposit.depositLiquidation.cause)}
      </span>;
  }

  else if (shouldShowConfirmationInfo) {
    if (!btcTxState) {
      // wait until it is loaded
      secondLine = null;
    }
    else {
      let action: any;
      if (btcTxState.hasTransaction && btcTxState.numConfirmations >= 6) {
        action = <Button size={"tiny"} to={`https://${dAppDomain}/deposit/${deposit.contractAddress}/pay/confirming`}>Go to dApp</Button>;
      }
      else if (timing === undefined) {
        action = null;
      }
      else if ((timing?.remaining ?? 0) > 0) {
        action = <span style={{fontSize: 20, flex: 1, color: 'gray', textAlign: 'right'}}>
          {formatSeconds(timing?.remaining!)} <InfoTooltip size={0.8}>When this timer reaches zero, anyone can close the deposit, returning the bonded funds to the signers.</InfoTooltip>
        </span>
      }
      else {
        action = <NotifyButton deposit={deposit} />;
      }
      secondLine = <>
        <span style={{fontSize: 20, flex: 1, color: 'gray'}}>
          {btcTxState.hasTransaction
              ? <>{btcTxState?.numConfirmations} confirmations</>
              : <>waiting for transaction</>}

          <a
              title={"Open on blockchain.com"}
              href={
                btcTxState.transactionHash
                    ? `${blockChainBaseUrl}/tx/${btcTxState.transactionHash}`
                    : `${blockChainBaseUrl}/address/${btcAddress}`
              }
              className={css`
                font-size: 0.8em;
                padding-left: 0.2em;
             `}
          >
            <ExternalLinkIcon/>
          </a>

          <span style={{fontSize: 12, paddingLeft: 5}}><Loading/></span>
        </span>
        {action}
      </>;
    }
  }

  return <Box label={"state"}>
    <LabelWithBackgroundProgress
        progress={timing?.percentage}
    >
      {getNiceStateLabel(deposit)} {getStateTooltip(deposit.currentState)
        ? <span className={css`position: relative; top: -0.5em; font-size: 0.6em;`}><InfoTooltip>{getStateTooltip(deposit.currentState)}</InfoTooltip></span>
        : null}
    </LabelWithBackgroundProgress>

    {
      hasDepositBeenUsedToMint(deposit.tdtToken.owner, deposit.currentState)
          ? <div className={css`
                  font-size: 0.6em;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
              ` }>
            <TBTCIcon /> <span style={{paddingLeft: 5}}>TBTC minted</span>
          </div>
          : null
    }

    {
      <div style={{lineHeight: 1, alignItems: 'center', display: 'flex', flexDirection: 'row', marginTop: '5px'}}>
        {secondLine}
      </div>
    }
  </Box>
}


export function LabelWithBackgroundProgress(props: {
  children: any,
  progress: number|undefined,
}) {
  if (props.progress === undefined) {
    return props.children;
  }

  let color: string = '';
  if (props.progress <= 0.5) {
    color = '#d3f7ce';
  }
  else if (props.progress <= 0.8) {
    color = '#f7e4ce';
  }
  else {
    color = '#f7cece';
  }

  return <div style={{
    position: 'relative',
    zIndex: 1
  }}>
    {props.children}
    <div style={{
      position: 'absolute',
      backgroundColor: color,
      left: 0,
      top: 0,
      bottom: 0,
      width: `${props.progress * 100}%`,
      zIndex: -4
    }}>
    </div>
  </div>
}


const depositAbi = [
  "function notifyFundingTimedOut()",
  "function notifySignerSetupFailed()"
];


/**
 * Show a notification button for this deposit.
 */
function NotifyButton(props: {
  deposit: any
}) {
  const isTimeTravel = useIsTimeTravel();
  const wallet = useWallet()
  const deposit = props.deposit;
  const [isBusy, setBusy] = useState(false);

  if (isTimeTravel) {
    return null;
  }

  let func: string;
  if (deposit.currentState == 'AWAITING_SIGNER_SETUP') {
    func = 'notifySignerSetupFailed';    
    if (deposit?.bondedECDSAKeep?.publicKey) {
      // Here, we have to call retrieveSignerPubkey first
      return null;
    }
  } else if (deposit.currentState == 'AWAITING_BTC_FUNDING_PROOF') {    
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

      const contract = new ethers.Contract(deposit.contractAddress, depositAbi, provider);
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

