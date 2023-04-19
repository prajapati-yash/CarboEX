import * as React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { useWalletConnect } from "@walletconnect/react-native-dapp";

const shortenAddress = (address) => {
  return `${address.slice(0, 6)}...${address.slice(
    address.length - 4,
    address.length
  )}`;
};

function Button({ onPress, label }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}
export let connector = "";

export default function WalletConnectExperience() {
  connector = useWalletConnect();

  const connectWallet = async () => {
    return await connector.connect();
    // console.log(connector.accounts[0]);
  };

  const killSession = async () => {
    console.log(connector.accounts[0]);
    return await connector.killSession();
  };

  return (
    <>
      {!connector.connected ? (
        <Button onPress={() => connectWallet()} label="Connect a wallet" />
      ) : (
        <>
          <Text>{shortenAddress(connector.accounts[0])}</Text>
          <Button onPress={() => killSession()} label="Log out" />
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#5A45FF",
    color: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
