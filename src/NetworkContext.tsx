/**
 * React context that determines the current network (mainnet or testnet).
 */
import React, { useContext } from "react";

export enum Network {
  ROPSTEN,
  MAINNET
}

export type NetworkContextType = {
  network: Network
}
export const NetworkContext = React.createContext<NetworkContextType>({
  network: Network.MAINNET
});

export function SetNetwork(props: {
  network: Network
  children: any
}) {
  return <NetworkContext.Provider value={{network: props.network}}>
    {props.children}
  </NetworkContext.Provider>
}

export function useNetwork(): Network {
  const context = useContext(NetworkContext);
  return context.network;
}

export function useIsRopsten(): boolean {
  return useNetwork() == Network.ROPSTEN;
}

export function useEtherscanDomain(): string {
  const isRopsten = useIsRopsten();
  return isRopsten ? 'ropsten.etherscan.io' : 'etherscan.io';
}

export function useDAppDomain(): string {
  const isRopsten = useIsRopsten();
  return isRopsten ? 'dapp.test.tbtc.network' : 'dapp.tbtc.network';
}

export function useBlockchainBaseUrl(): string {
  const isRopsten = useIsRopsten();
  return isRopsten ? 'https://www.blockchain.com/btc-testnet' : 'https://www.blockchain.com/btc';
}
