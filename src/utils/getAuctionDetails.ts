import {DateTime} from "luxon";
import {dateTimeFrom, formatSeconds} from "../components/FormattedTime";
import {getSatoshisAsBitcoin} from "./getSatoshisAsBitcoin";
import {getWeiAsEth} from "./getWeiAsEth";
import {CoinPrices} from "./useCoinPrices";

/**
 * Note: The real `auctionValue` function uses address(this), which could be different than the registered bond value?
 */
const AUCTION_DURATION = 24 * 60 * 60; // seconds


/**
 * Calculate the liquidation auction details. This reproduces the math from within the contract.
 *
 * Returns the state of the auction either at the current time, or the given `endDate`.
 */
export function getAuctionDetails(opts: {
  bondValue: number,
  liquidationInitiated: number,
  initialCollateralizedPercent: number,
  endDate?: number
}) {
  const endDate = opts?.endDate ? dateTimeFrom(opts.endDate) : DateTime.utc();
  const elapsed = endDate.diff(dateTimeFrom(opts.liquidationInitiated)).as('seconds');
  const available = opts.bondValue;

  if (elapsed > AUCTION_DURATION) {
    return {value: available, percentage: 100};
  }

  // This should make a smooth flow from base% to 100%
  const basePercentage = Math.floor(10000 / opts.initialCollateralizedPercent);
  const elapsedPercentage = Math.floor((100 - basePercentage) * elapsed / AUCTION_DURATION);
  const percentage = basePercentage + elapsedPercentage;

  return {
    percentage,
    value: available * percentage / 100,

    // Return the next jump in bond on auction.
    nextValue: percentage == 100 ? null : available * (percentage + 1) / 100,
    //nextTime: 0,
  }
}
export type AuctionDetails = ReturnType<typeof getAuctionDetails>;


/**
 * Return the details of the auction based on a standard deposit query object.
 */
export function getAuctionDetailsFromDeposit(deposit: any, coinPrices: any) {
  return getAuctionDetails({
    initialCollateralizedPercent: deposit.initialCollateralizedPercent,
    liquidationInitiated: deposit.depositLiquidation.initiatedAt,
    bondValue: deposit.bondedECDSAKeep.totalBondAmount,
    endDate: deposit.depositLiquidation.liquidatedAt
  });
}

export function calculateAuctionUSDValues(value: AuctionDetails, coinPrices: CoinPrices, opts: {lotSizeSatoshis: number}) {
  const btcPrice = coinPrices.bitcoin;
  const ethPrice = coinPrices.ethereum;
  const cost = getSatoshisAsBitcoin(opts.lotSizeSatoshis) * btcPrice;
  const income = ethPrice * getWeiAsEth(value.value);
  const nextIncome = ethPrice * getWeiAsEth(value.nextValue ?? 0);

  return {
    usdProfit: income - cost,
    usdProfitNext: nextIncome - cost,
    yieldPercent: (income - cost) / cost
  }
}

const COURTESY_CALL_DURATION = 6 * 60 * 60; // seconds

export function getCourtesyCallExpiryDate(deposit: any) {
  if (!deposit.depositLiquidation?.courtesyCallInitiatedAt) {
    return "";
  }
  const endDate = dateTimeFrom(parseInt(deposit.depositLiquidation?.courtesyCallInitiatedAt) + COURTESY_CALL_DURATION);
  const d = DateTime.utc().diff(endDate);
  return formatSeconds(d.as('seconds'));
}