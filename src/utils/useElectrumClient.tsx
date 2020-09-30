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
  client: ElectrumClient|null
} = {
  refCount: 0,
  state: 'disconnected',
  client: null
}

async function acquireInstance() {
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
    await State.client.connect();
    State.state = 'connected';
  }

  return State.client;
}


function releaseInstance() {
  State.refCount -= 1;

  if (State.refCount == 0) {
    State.client?.close();
    State.state = 'disconnected';
  }
}


export function useElectrumClient() {
  const [client, setClient] = useState<null|ElectrumClient>(null);

  useEffect(() => {
    acquireInstance().then(client => {
      setClient(client);
    });
    return () => {
      releaseInstance();
    }
  }, [])

  return client;
}