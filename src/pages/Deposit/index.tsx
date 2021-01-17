import {gql} from "@apollo/client";
import React from "react";
import {useParams} from 'react-router';
import {getSatoshisAsBitcoin} from "../../utils/getSatoshisAsBitcoin";
import {TimeToNow} from "../../components/FormattedTime";
import {css} from "emotion";
import {Address, BitcoinAddress, Hash} from "../../components/Address";
import {Paper} from "../../design-system/Paper";
import {NiceStateLabel} from "../../utils/depositStates";
import {
  getTDTTokenAddress,
  getVendingMachineAddress,
  hasDepositBeenUsedToMint,
  isVendingMachine,
} from "../../utils/contracts";
import {InfoTooltip} from "../../components/InfoTooltip";
import {Helmet} from "react-helmet";
import {getWeiAsEth} from "../../utils/getWeiAsEth";
import {
  CollaterizationStatusWithPrice, getPriceAtCollateralizationRatio,
} from "../../components/CollateralizationStatus";
import {Box} from "../../components/Box";
import {Button} from "../../design-system/Button";
import {Log} from "./log";
import {useDAppDomain, useEtherscanDomain} from "../../NetworkContext";
import {useBtcAddressFromPublicKey} from "../../utils/useBtcAddressFromPublicKey";
import {StatusBox} from "./StatusBox";
import {usePriceFeed} from "../../components/PriceFeed";
import {useQueryWithTimeTravel, useTimeTravelSafeSubscription} from "../../TimeTravel";
import {PageHeader} from "../../components/PageHeader";
import {HeaderBoxes} from "../../components/HeaderBoxes";
import {PageHeaderMenu} from "../../components/PageHeaderMenu";
import {AuctionDetailsFragment, getAuctionDetailsFromDeposit} from "../../utils/getAuctionDetails";
import {ETHValue} from "../../components/ETHValue";
import {PropertyTable} from "../../components/PropertyTable";


const DEPOSIT_QUERY = gql`
    query GetDeposit($id: ID!, $block: Block_height) {
        deposit(id: $id, block: $block) {
            id,
            contractAddress,
            currentState,
            createdAt,
            keepAddress,
            lotSizeSatoshis,
            endOfTerm,
            index,

            currentStateTimesOutAt,
            
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
                pubkeySubmissions { address },
            },
            
            depositLiquidation {
                cause
            }
            
            ...NiceStateLabel,
            ...AuctionDetails
        }
    }
  
    ${NiceStateLabel}
    ${AuctionDetailsFragment}
`;

const DEPOSIT_SUBSCRIPTION = gql`
    subscription WatchDeposit($id: ID!) {
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


export function Content() {
  let { depositId } = useParams<any>();

  // Fix up deposit id
  depositId = depositId.toLowerCase();
  if (depositId.slice(0, 3) != 'dp-') {
    depositId = 'dp-' + depositId;
  }

  const { loading, error, data } = useQueryWithTimeTravel(DEPOSIT_QUERY, {variables: {id: depositId, block: {number: 11058393}}});
  useTimeTravelSafeSubscription(DEPOSIT_SUBSCRIPTION, { variables: { id: depositId }});
  const etherscan = useEtherscanDomain();
  const dAppDomain = useDAppDomain();
  const price = usePriceFeed();

  const btcAddress = useBtcAddressFromPublicKey(data?.deposit?.bondedECDSAKeep.publicKey);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {""+ error}</p>;
  if (!data.deposit) return <p>Not found.</p>;  

  return <div>
    <PageHeader
      label={"Deposit"}
      subtitle={data.deposit.contractAddress}
      buttons={
        <PageHeaderMenu>
          <div><a href={`https://keepscan.com/deposits/${data.deposit.contractAddress}`}>Open in KeepScan</a></div>
          <div><a href={`https://tbtcdeposit.auction/#/liquidations/${data.deposit.contractAddress}`}>Open in Auction Tool</a></div>
          <div><a href={`https://tbtcexplorer.com/detail/${data.deposit.contractAddress}`}>Open in tBTCExplorer</a></div>
          <div><a href={`https://${etherscan}/address/${data.deposit.contractAddress}`}>Find on Etherscan</a></div>
        </PageHeaderMenu>
      }
    >
      <HeaderBoxes>
        <Box label={"lot size"}>
          {getSatoshisAsBitcoin(data.deposit.lotSizeSatoshis)} BTC
        </Box>

        <StatusBox deposit={data.deposit} />

        <Box label={"creation date"}>
          <TimeToNow time={data.deposit.createdAt} />
        </Box>
      </HeaderBoxes>
    </PageHeader>

    <div style={{
      display: "flex",
      flexDirection: "row",
      marginTop: '20px'
    }}>
      <div style={{marginRight: '20px', flex: 1}}>
        <Summary deposit={data.deposit} />

        <Paper style={{marginTop: '20px'}}>
          <div className={css`           
            padding: 20px;
          `}>
            <NextStep deposit={data.deposit} />
            <h3 style={{marginTop: 0}}>Log</h3>
            <Log depositId={data.deposit.id} />
          </div>
        </Paper>
      </div>

      <div style={{flex: 1}}>
        <Paper>
          <div className={css`
            font-weight: bold;
            padding: 20px;
            padding-bottom: 0;
          `}>
            Collateral <InfoTooltip>
              The  BTC is custodied by a group of randomly chosen signing nodes which stake ETH as a security bond.
            </InfoTooltip>
          </div>
          <PropertyTable style={{padding: '15px'}} data={[
            {
              key: 'signers',
              label: "Signers",
              tooltip: "The node operators collectively holding the Bitcoin private key.",
              value: <div>
                {data.deposit.bondedECDSAKeep.members.map((m: any) => {
                  return <div key={m.address}>
                    <Address address={m.address} to={`/operator/${m.address}`} />
                  </div>
                })}
              </div>
            },
            {
              key: 'collateralization',
              label: "Collaterialization",
              tooltip: "If ETH loses value, the keep may become undercollaterized.",
              value: <CollaterizationStatusWithPrice price={price} deposit={data.deposit} highlightNormal={true} style={{fontWeight: 'bold'}} />
            },
            {
              key: 'courtesyCallPrice',
              label: "Liquidation Price",
              tooltip: "If the price of ETH falls to the first level, a courtesy call can be initiated, if it falls to the second, the deposit can be liquidated.",
              value: <div>
                {getPriceAtCollateralizationRatio(data.deposit, data.deposit.undercollateralizedThresholdPercent / 100).toFixed(5)} BTC / {" "}
                {getPriceAtCollateralizationRatio(data.deposit, data.deposit.severelyUndercollateralizedThresholdPercent / 100).toFixed(5)} BTC
              </div>
            },
            {
              key: 'bondedAmount',
              label: "Bond",
              tooltip: "The total value the signers have bonded to guarantee this deposit.",
              value: <span>{getWeiAsEth(data.deposit.bondedECDSAKeep.totalBondAmount).toFixed(2)} ETH</span>
            },
            btcAddress ? {
              key: 'publicKey',
              label: "BTC Address",
              value: <BitcoinAddress address={btcAddress} />
            } : undefined,
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
          ]} />
        </Paper>
        <Paper style={{marginTop: '20px'}}>
          <PropertyTable
              style={{padding: '15px'}}
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
                  value: <Address address={data.deposit.tdtToken.tokenID} to={`https://${etherscan}/token/${getTDTTokenAddress()}?a=${data.deposit.tdtToken.tokenID}`}  />
                },
                {
                  key: 'index',
                  label: "Index",
                  tooltip: "The number of the deposit, counting up since inception of the system.",
                  value: data.deposit.index,
                },
                data.deposit.endOfTerm ? {
                  key: 'endOfTerm',
                  label: "End Of Term",
                  tooltip: "Within the term, only the owner can redeem the deposit or mint TBTC.",
                  value: <TimeToNow time={data.deposit.endOfTerm} />
                } : undefined,
                {
                  key: 'depositContract',
                  label: "Deposit Contract",
                  value: <Address address={data.deposit.contractAddress}  />
                },
                {
                  key: 'keepContract',
                  label: "Keep Contract",
                  tooltip: "The Keep holds the original BTC in custody, and signers stake ETH as a security bond.",
                  value: <Address address={data.deposit.keepAddress}  />
                },
                {
                  key: 'status',
                  label: "Keep Status",
                  value: data.deposit.bondedECDSAKeep.status
                },
              ]}
          />
        </Paper>
      </div>
    </div>
  </div>
}


function NextStep(props: {
  deposit: any
}) {
  const {deposit} = props;

  let Component: any;
  if (deposit.currentState == 'AWAITING_BTC_FUNDING_PROOF') {
    Component = WaitingForFundingProof;
  }
  if (deposit.currentState == 'AWAITING_SIGNER_SETUP') {
    if (deposit.bondedECDSAKeep.publicKey) {
      Component = WaitingForFundingStart;
    } else {
      Component = WaitingForSignerSetup;
    }
  }

  if (!Component) {
    return null;
  }

  return <div style={{marginBottom: '20px'}} className={css`
    margin-bottom: 20px;
    padding-left: 15px;
    border-left: 1px solid #64c4aa;
  `}>
    <div style={{marginTop: 0, color: '#64c4aa', fontWeight: 'bold', marginBottom: '10px'}}>
      What happens next?
    </div>
    <Component deposit={deposit} />
  </div>
}

function WaitingForFundingStart(props: {
  deposit: any
}) {
  return <div>
    The depositor must notify the contract that the signers have setup the Bitcoin deposit address, and that they want to
    continue the deposit process.
  </div>
}

function WaitingForFundingProof(props: {
  deposit: any
}) {
  return <div>
    The depositor must submit proof of having sent to Bitcoin to the deposit address, once at least 6 confirmations have been reached. <TimeToNow time={props.deposit.currentStateTimesOutAt} /> left to do so.
  </div>
}

function WaitingForSignerSetup(props: {
  deposit: any
}) {
  // Can be tested at: http://localhost:3000/deposit/0x30c717eee21c9362f3ac5606f5db0af9f5aa0c0a?block=11160875
  const allSigners = props.deposit.bondedECDSAKeep.members.map((s: any) => s.address);
  const goodSigners = new Set(props.deposit.bondedECDSAKeep.pubkeySubmissions.map((s: any) => s.address));
  const badSigners: string[] = allSigners.filter((s: any) => !goodSigners.has(s));

  return <div>
    <p>
      The signers chosen to back this deposit will lock up ETH collateral and then submit a Bitcoin deposit address.
    </p>
    <p>
      {props.deposit.bondedECDSAKeep.pubkeySubmissions.length}/3 have done so. We are still waiting for {" "}
      {badSigners
          .map(
              address => <Address key={address} to={`/operator/${address}`} address={address} />)
          .reduce((prev, curr) => [prev, ', ', curr] as any)}.
    </p>
  </div>
}


function Summary(props: {
  deposit: any
}) {
  const {deposit} = props;
  const etherscan = useEtherscanDomain();
  const dAppDomain = useDAppDomain();

  const canBeRedeemed = ['ACTIVE', 'COURTESY_CALL'].indexOf(deposit.currentState) > -1;
  const isAtTerm = false;  // XXX still needs to be fixed
  const canBeRedeemedByAnyone = canBeRedeemed && (deposit.currentState == 'COURTESY_CALL' || isAtTerm || isVendingMachine(deposit.tdtToken.owner));

  let content: any;
  if (deposit.currentState === 'LIQUIDATION_IN_PROGRESS') {
    content = <LiquidationSummary deposit={deposit} />
  } else {
    content = <>
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
        hasDepositBeenUsedToMint(deposit.tdtToken.owner, deposit.currentState)
            ? <div>
              This deposit has been used to mint TBTC. The corresponding TDT token is now
              owned by the <a href={`https://${etherscan}/address/${getVendingMachineAddress()}`}>Vending Machine contract</a>.
            </div>
            : (deposit.tdtToken.owner == deposit.tdtToken.minter) ? <div>
              The TDT Token representing ownership over this deposit is owned by the original
              deposit creator, <Address address={deposit.tdtToken.owner} />.
            </div> : <div>
              The TDT Token representing ownership over this deposit is owned by <Address address={deposit.tdtToken.owner} />.
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
      <a href={`https://${etherscan}/token/${getTDTTokenAddress()}?a=${deposit.tdtToken.tokenID}`}>TDT Token on Etherscan</a>
    </div>

    {(canBeRedeemedByAnyone) ?
      <div style={{marginTop: 20}}>
        This deposit can be redeemed by anyone, even non-owners. <InfoTooltip>Because it is owned by the Vending Machine, has been courtesy called, or is at-term, anyone can exchange TBTC for the Bitcoin deposited here.</InfoTooltip>
        <div style={{marginTop: '8px'}}><Button size={"small"} to={`https://${dAppDomain}/deposit/${deposit.contractAddress}/redeem`}>
          Redeem
        </Button></div>
      </div>
    : null }
    </>;
  }


  return <Paper padding>
     {content}
  </Paper>
}


function LiquidationSummary(props: {deposit: any}) {
  const details = getAuctionDetailsFromDeposit(props.deposit);
  return <>
    <div>
      This deposit is currently in liquidation. <ETHValue wei={details.value} /> ETH are on offer - {details.percentage}% of the total bond.
    </div>
  </>
}

