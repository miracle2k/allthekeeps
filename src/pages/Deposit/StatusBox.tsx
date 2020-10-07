import {getNiceStateLabel, getStateTooltip} from "../../utils/depositStates";
import {css} from "emotion";
import {InfoTooltip} from "../../components/InfoTooltip";
import {hasDepositBeenUsedToMint} from "../../utils/contracts";
import {TBTCIcon} from "../../design-system/tbtcIcon";
import {ExternalLinkIcon} from "../../components/ExternalLinkIcon";
import {Loading} from "../../components/Loading";
import {Box} from "../../components/Box";
import React, {useState} from "react";
import {useBitcoinTxState} from "../../utils/useBitcoinTxState";
import {useBlockchainBaseUrl} from "../../NetworkContext";
import {useBtcAddressFromPublicKey} from "../../utils/useBtcAddressFromPublicKey";
import {useWallet} from "use-wallet";
import {Button} from "../../design-system/Button";
import {getLiquidationCauseAsString} from "./log";

export function StatusBox(props: {
  deposit: any
}) {
  const {deposit} = props;
  const blockChainBaseUrl = useBlockchainBaseUrl();
  const btcAddress = useBtcAddressFromPublicKey(deposit.bondedECDSAKeep.publicKey);
  const shouldShowConfirmationInfo = deposit.currentState == 'AWAITING_BTC_FUNDING_PROOF';
  const btcTxState = useBitcoinTxState(btcAddress, deposit.lotSizeSatoshis, shouldShowConfirmationInfo)

  let secondLine: any;
  if (['LIQUIDATED', 'LIQUIDATION_IN_PROGRESS', 'FRAUD_LIQUIDATION_IN_PROGRESS'].indexOf(deposit.currentState) > -1) {
      secondLine = <span style={{fontSize: 20, flex: 1, color: 'gray'}}>
        {getLiquidationCauseAsString(deposit.depositLiquidation.cause)}
      </span>;
  }
  else {
    secondLine = <>
      {
        (shouldShowConfirmationInfo && btcTxState) ?
            <span style={{fontSize: 20, flex: 1, color: 'gray'}}>
              {btcTxState.hasTransaction
                    ? <>{btcTxState?.numConfirmations} confirmations</>
                    : <>waiting for transaction</>}

              <a title={"Open on blockchain.com"} href={
                btcTxState.transactionHash
                    ? `${blockChainBaseUrl}/tx/${btcTxState.transactionHash}`
                    : `${blockChainBaseUrl}/address/${btcAddress}`
              } className={css`
                    font-size: 0.8em;
                    padding-left: 0.2em;
                   `}>
                <ExternalLinkIcon />
              </a>
              <span style={{fontSize: 12}}><Loading /></span>
            </span>
          : null}
      <NotifyButton deposit={deposit} />
    </>;
  }

  return <Box label={"state"}>
    <div>
      {getNiceStateLabel(deposit)} {getStateTooltip(deposit.currentState)
        ? <span className={css`position: relative; top: -0.5em; font-size: 0.6em;`}><InfoTooltip>{getStateTooltip(deposit.currentState)}</InfoTooltip></span>
        : null}
    </div>

    {
      hasDepositBeenUsedToMint(deposit.tdtToken.owner, deposit.currentState)
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
      <div style={{lineHeight: 1, alignItems: 'center', display: 'flex', flexDirection: 'row', marginTop: '5px'}}>
        {secondLine}
      </div>
    }
  </Box>
}


const depositAbi = [
  "function notifyFundingTimedOut()",
  "function notifySignerSetupFailed()"
];


function NotifyButton(props: {
  deposit: any
}) {
  const wallet = useWallet()
  const deposit = props.deposit;
  const [isBusy, setBusy] = useState(false);

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

