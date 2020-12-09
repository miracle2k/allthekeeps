/**
 * We use a special subgraph that gives us access to the the on-chain price feed.
 */

import {useMemo} from 'react';
import {gql, useQuery, useSubscription} from "@apollo/client";
import {useTimeTravelBlock} from "../TimeTravel";


const WATCH_QUERY = gql`
  subscription WatchPrice {
    priceFeed(id: "0x81a679f98b63b3ddf2f17cb5619f4d6775b3c5ed") {
      val,
      timestamp,
      blockNumber,
      transactionHash
    }
  }
`;

const QUERY_FOR_BLOCK = gql`
    query GetBlockPrice($block: Block_height) {
        priceFeed(id: "0x81a679f98b63b3ddf2f17cb5619f4d6775b3c5ed", block: $block) {
            val,
            timestamp,
            blockNumber,
            transactionHash
        }
    }
`;


export type PriceData = {
  val: number,  // btcPerEth
  satPerWei: number,
  weiPerSat: number,

  timestamp: string,
  blockNumber: number,
  transactionHash: string
}

/**
 * This is the price of 1 ETH in BTC.
 */
export function usePriceFeed() {
  const timeTravelBlock = useTimeTravelBlock();
  const sResult = useSubscription(WATCH_QUERY, {skip: !!timeTravelBlock});
  const qResult = useQuery(QUERY_FOR_BLOCK, {skip: !timeTravelBlock, variables: {block: {number: timeTravelBlock}}});

  const result = timeTravelBlock ? qResult : sResult;
  const {data, loading, error} = result;

  return useMemo<PriceData>(() => {
    if (!data) { return null; }
    const price = data.priceFeed;
    if (!data.priceFeed) { // i.e. when block too early
      return null;
    }

    const convertedPrices = convertPriceFeedVal(price.val);

    return {
      ...price,
      ...convertedPrices,
      val: convertedPrices.btcPerEth,
    };
  }, [data]);
}

// Convert the rate given in the price feed (price of 1 ETH in BTC) into other useful units.
export function convertPriceFeedVal(val: string) {
  // Given with 18 decimal places
  const btcPerEth = parseInt(val) / 10 ** 18;
  const satPerWei = btcPerEth * 100000000 * 0.000000000000000001;
  const weiPerSat = 1 / satPerWei;

  return {
    weiPerSat,
    satPerWei,
    btcPerEth
  }
}