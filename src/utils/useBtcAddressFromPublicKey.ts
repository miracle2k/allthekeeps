import BitcoinHelpers from "./BitcoinHelpers";

export function useBtcAddressFromPublicKey(publicKey: string) {
  return publicKey ? BitcoinHelpers.Address.publicKeyToP2WPKHAddress(publicKey.slice(2), "main") : "";
}