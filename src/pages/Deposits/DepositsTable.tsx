import Tippy, {useSingleton} from "@tippyjs/react";
import {css} from "emotion";
import {InfoTooltip} from "../../components/InfoTooltip";
import {TimeToNow} from "../../components/FormattedTime";
import {Link} from "../../components/Link";
import {ExternalLinkIcon} from "../../components/ExternalLinkIcon";
import {getSatoshisAsBitcoin} from "../../utils/getSatoshisAsBitcoin";
import {
  getNiceStateLabel,
  getStateBoxStyle,
  useTimeRemaining
} from "../../utils/depositStates";
import {hasDepositBeenUsedToMint} from "../../utils/contracts";
import {TBTCIcon} from "../../design-system/tbtcIcon";
import React from "react";
import {CollaterizationStatusWithPrice} from "../../components/CollateralizationStatus";
import {usePriceFeed} from "../../components/PriceFeed";
import { Table } from "../../components/Table";
import {useEtherscanDomain} from "../../NetworkContext";
import {useBitcoinTxState} from "../../utils/useBitcoinTxState";
import {useBtcAddressFromPublicKey} from "../../utils/useBtcAddressFromPublicKey";
import {LabelWithBackgroundProgress} from "../Deposit/StatusBox";
import {BTCTag} from "../../components/CurrencyTags";
import {UseDepositQuery, useDepositQuery} from "./Views";


export function DepositsTable(props: {
  query: UseDepositQuery
}) {
  const {loading, error, dateColumn, view, data} = props.query;
  const [source, target] = useSingleton();
  const price = usePriceFeed();
  const etherscan = useEtherscanDomain();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {""+ error}</p>;

  return <>
    <Tippy singleton={source} delay={500} />
    <Table
        style={{width: '100%'}}
    >
      <thead>
      <tr>
        {
          (dateColumn == "updatedAt") ? <th>Updated <InfoTooltip>
            When this deposit last changed state, during the funding, redemption or liquidation processes.
          </InfoTooltip></th>
              :
              (dateColumn == "redemptionStartedAt") ? <th>Started <InfoTooltip>
                When the redemption process, or liquidation, started.
              </InfoTooltip></th>
                  : <th>Created <InfoTooltip>
                    When this deposit was created.
                  </InfoTooltip></th>
        }

        <th>
          Contract <InfoTooltip>
          Every deposit is represented on-chain by a contract.
        </InfoTooltip>
        </th>
        <th>Lot Size</th>
        <th>State</th>
      </tr>
      </thead>
      <tbody>
      {data.deposits.map((deposit: any) => {
        return <DepositRow
          deposit={deposit}
          key={deposit.id}
          dateColumn={dateColumn}
          etherscan={etherscan}
          price={price}
          target={target}
        />
      })}
      </tbody>
    </Table>
  </>;
}

const DepositRow = React.memo((props: {
  deposit: any,
  dateColumn: string,
  etherscan: string,
  price: any,
  target: any
}) => {
  const {deposit, dateColumn, etherscan, price, target} = props;
  return  <tr key={deposit.id}>
    <td>
      <TimeToNow time={deposit[dateColumn]} />
    </td>
    <td>
      <Link to={`/deposit/${deposit.contractAddress}`}>
        {deposit.contractAddress}
      </Link>
      <a title={"Open on Etherscan"} href={`https://${etherscan}/address/${deposit.contractAddress}`} className={css`
                font-size: 0.8em;
                padding-left: 0.2em;
               `}>
        <ExternalLinkIcon />
      </a>
    </td>
    <td>
      <BTCTag />&nbsp;{getSatoshisAsBitcoin(deposit.lotSizeSatoshis ?? 0)}
    </td>
    <td className={css`
            display: flex;
            align-items: center;
          `}>
      <div className={css`
              display: inline-block;
              width: 1.2em;
              height: 1.2em;
              border-radius: 2px;
              padding: 0.2em;
              box-sizing: border-box;
            `} style={getStateBoxStyle(deposit.currentState)}>
      </div>
      &nbsp;
      {hasDepositBeenUsedToMint(deposit.tdtToken.owner, deposit.currentState)
          ? <><Tippy content="TBTC was minted" singleton={target}><TBTCIcon /></Tippy>&nbsp;</>
          : ""
      }
      <StateLabelWithProgressBar deposit={deposit} />

      <FundingStatus deposit={deposit}/>
    </td>
    <td>
      <CollaterizationStatusWithPrice deposit={deposit} price={price} />
    </td>
  </tr>
});


export function StateLabelWithProgressBar(props: {
  deposit: any
}) {
  const timing = useTimeRemaining(props.deposit, 5);
  return <LabelWithBackgroundProgress
      progress={timing?.percentage}
  >
    {getNiceStateLabel(props.deposit)}
  </LabelWithBackgroundProgress>
}


function FundingStatus(props: {
  deposit: any
}) {
  const btcAddress = useBtcAddressFromPublicKey(props.deposit.bondedECDSAKeep.publicKey);
  const isEnabled = !!btcAddress && props.deposit.currentState == 'AWAITING_BTC_FUNDING_PROOF'
  const state = useBitcoinTxState(btcAddress, props.deposit.lotSizeSatoshis ?? 0, isEnabled);
  return isEnabled ? <>
    {state?.hasTransaction ? <>
      <span style={{color: 'silver', fontSize: '.8em', paddingLeft: '5px'}}>({state.numConfirmations}/6)</span>
    </>: null}
  </> : null;
}