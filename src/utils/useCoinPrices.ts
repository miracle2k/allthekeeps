import {EventEmitter} from "events";
import {useEffect, useState} from "react";

const fetcher: any = {
  prices: null,
  events: new EventEmitter()
};

function setupInterval() {
  const get = async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd')
    const data = await response.json();
    fetcher.prices = {
      bitcoin: data.bitcoin.usd,
      ethereum: data.ethereum.usd,
    };
    fetcher.events.emit('update');
  }
  fetcher.handle = setInterval(async () => {
    get();
  }, 20000);
  get();
}

setupInterval();

export function useCoinPrices() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const handleUpdate = () => {
      setCounter(x => x+1);
    };
    fetcher.events.on('update', handleUpdate);
    return () => {
      fetcher.events.off('update', handleUpdate);
    }
  }, [])
  return fetcher.prices || {};
}

export type CoinPrices = {
  ethereum: number,
  bitcoin: number
}