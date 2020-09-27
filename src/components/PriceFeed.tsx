/**
 * We use a special subgraph that gives us access to the the on-chain price feed.
 */

import {useEffect, useState} from 'react';
import { SubscriptionClient } from 'subscriptions-transport-ws';


const GRAPHQL_ENDPOINT = 'wss://api.thegraph.com/subgraphs/name/miracle2k/keep-pricefeed';

const query = `
  subscription GetPrice {
    price(id: "0x81a679f98b63b3ddf2f17cb5619f4d6775b3c5ed") {
      val,
      timestamp,
      blockNumber,
      transactionHash
    }
  }
`


const client = new SubscriptionClient(GRAPHQL_ENDPOINT, {
  reconnect: true,
  lazy: true,
  connectionCallback: error => {
    error && console.error(error)
  }
});


const subscription = client.request({query});


export type PriceData = {
  val: number,
  timestamp: string,
  blockNumber: number,
  transactionHash: string
}

export function usePriceFeed() {
  const [data, setData] = useState<PriceData|null>(null);
  useEffect(() => {
    const s = subscription.subscribe({
      next ({data}) {
        if (data) {
          const price = data.price;
          setData({
              ...price,
            // Given with 18 decimal places
            val: parseInt(price.val) / 10**18
          });
        }
      }
    });
    return () => { s.unsubscribe() };
  }, [setData])

  return data;
}