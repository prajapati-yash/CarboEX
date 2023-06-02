import companyABI from "../contracts/artifacts/Companyabi.json";
import daoABI from "../contracts/artifacts/Daoabi.json";
import ercTokenABI from "../contracts/artifacts/ErcTokenabi.json";
import Web3 from "web3";
import { connector } from "./WalletConnectExperience";

export const COMPANY_ADDRESS = "0x72e6d982Fd46FfB0BB697D0C21A9d0cC9A6cB1b9";
export const DAO_MEMBER_ADDRESS = "0xB2e93e6fd9b87715CaeA467875D9Adca99DF7D1C";
export const ERC_TOKEN_ADDRESS = "0x9955a6b3b0025bc9B00246B38C94CFb42999E6d1";

export const companyInstance = async () => {
  if (!connector.connected) {
    console.log("WalletConnect not connected");
    return;
  }
  // const provider = new Web3("https://rpc.bt.io/");
  const provider = new Web3("https://pre-rpc.bt.io/");
  const conn = new provider.eth.Contract(companyABI, COMPANY_ADDRESS);
  return conn;
};

export const daoInstance = async () => {
  if (!connector.connected) {
    console.log("WalletConnect not connected");
    return;
  }
  const provider = new Web3("https://pre-rpc.bt.io/");
  const conn = new provider.eth.Contract(daoABI, DAO_MEMBER_ADDRESS);
  return conn;
};

export const ercTokenInstance = async () => {
  if (!connector.connected) {
    console.log("WalletConnect not connected");
    return;
  }
  const provider = new Web3("https://pre-rpc.bt.io/");
  const conn = new provider.eth.Contract(ercTokenABI, ERC_TOKEN_ADDRESS);
  return conn;
};
