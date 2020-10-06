/**
 * As long as at least one instance of this hooks mounted, we keep a connection to an electrum server open.
 * We close the connection once no component needs it anymore.
 */
import { useEffect, useState } from "react";
import BitcoinHelpers from "./BitcoinHelpers";
import ElectrumClient from "./ElectrumClient";


BitcoinHelpers.setElectrumConfig({
  "server": "electrumx-server.tbtc.network",
  "port": 8443,
  "protocol": "wss"
})


const State: {
  refCount: number,
  state: 'connecting'|'connected'|'disconnected',
  connectingPromise: Promise<any>|null,
  client: ElectrumClient|null,
  scheduledDisconnect?: number
} = {
  refCount: 0,
  state: 'disconnected',
  client: null,
  connectingPromise: null
}

/**
 * Will return the current connection, or start a new one if necessary.
 */
async function acquireConnection() {
  if (State.scheduledDisconnect) {
    window.clearTimeout(State.scheduledDisconnect);
  }

  if (!State.client) {
    if (BitcoinHelpers.electrumConfig === null) {
      throw new Error("Electrum client not configured.")
    }
    State.client = new ElectrumClient(BitcoinHelpers.electrumConfig);
  }

  State.refCount += 1;

  // Connect the first time
  if (State.state === 'disconnected') {
    State.state = 'connecting';
    State.connectingPromise = State.client.connect();
  }

  if (State.state === 'connecting') {
    await State.connectingPromise;
    if (State.state === 'connecting') {
      State.state = 'connected';
    }
  }

  return State.client;
}


function releaseConnection() {
  State.refCount -= 1;

  if (State.refCount == 0) {
    State.scheduledDisconnect = window.setTimeout(() => {
      // TODO: It seems if you try to reconnect immediately after this, it will not work. Enforce a timeout.
      State.client?.close();
      State.state = 'disconnected';
      State.scheduledDisconnect = undefined;
    }, 10000);
  }
}


export function useElectrumClient() {
  const [client, setClient] = useState<null|ElectrumClient>(null);

  useEffect(() => {
    acquireConnection().then(client => {
      setClient(client);
    });
    return () => {
      releaseConnection();
    }
  }, [])

  return client;
}