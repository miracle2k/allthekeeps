import {useElectrumClient} from "./useElectrumClient";
import {useCallback, useEffect, useState} from "react";
import BitcoinHelpers from "./BitcoinHelpers";


// A bug:
// - first findScript() does return null even though findorWaitfor() finds one.
export function useBitcoinTxState(address: string, lotSizeSatoshis: number|string, isEnabled: boolean) {
  const client = useElectrumClient();
  const [txHash, setTxHash] = useState("");
  const [isInitialized, setInitialized] = useState(false);
  const [confirmations, setConfirmations] = useState(0);
  const lotSizeSatoshisInt = typeof lotSizeSatoshis === 'string' ? parseInt(lotSizeSatoshis) : lotSizeSatoshis;

  const waitForTxAndConfirmations = useCallback(async (cancelToken: { set: boolean }) => {
    let tx = await BitcoinHelpers.Transaction.findWithClient(client!, address, lotSizeSatoshisInt);
    if (cancelToken.set) {
      return;
    }

    if (!tx) {
      setInitialized(true);

      // Would be much nicer to get a cancel token from those helper functions
      tx = await BitcoinHelpers.Transaction.findOrWaitFor(
          client,
          address,
          lotSizeSatoshisInt
      )
    }
    if (cancelToken.set) {
      return;
    }

    setTxHash(tx.transactionID);

    // Now ensure we have enough confirmations
    let confirmations = await BitcoinHelpers.Transaction.checkForConfirmations(client, tx.transactionID, 0);
    if (cancelToken.set) {
      return;
    }

    setConfirmations(confirmations!);
    setInitialized(true);

    return BitcoinHelpers.Transaction.waitForConfirmations(
        client,
        tx.transactionID,
        6,
        ({transactionID, confirmations, requiredConfirmations}) => {
          setConfirmations(confirmations);
        });
  }, [address, lotSizeSatoshisInt, setConfirmations, setTxHash, client]);

  useEffect(() => {
    if (!address || !lotSizeSatoshisInt || !isEnabled || !client) {
      return;
    }

    const cancelToken: any = {set: false, unsubscribe: null};
    waitForTxAndConfirmations(cancelToken).then(unsubscribe => {
      cancelToken.unsubscribe = unsubscribe;
    });
    return () => {
      cancelToken.set = true;
      if (cancelToken.unsubscribe) {
        cancelToken.unsubscribe();
      }
    }
  }, [address, lotSizeSatoshisInt, client]);

  // isInitialized makes sure we do not return "no tx" if we really don't know yet.
  return isInitialized ? {
    hasTransaction: !!txHash,
    transactionHash: txHash,
    numConfirmations: confirmations
  } : null;
}