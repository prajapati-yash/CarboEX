import companyABI from "../contracts/artifacts/Companyabi.json";
import daoABI from "../contracts/artifacts/Daoabi.json";
import ercTokenABI from "../contracts/artifacts/ErcTokenabi.json";
import Web3 from "web3";
import { connector } from "./WalletConnectExperience";

export const COMPANY_ADDRESS = "0xCE0f23D5547e93a33D5f67b4E13a7dE4054c68D4";
export const DAO_MEMBER_ADDRESS = "0x8894Df7cC26DB1A2459a6Ec3d90689f0b4b3c41F";
export const ERC_TOKEN_ADDRESS = "0x9AC4A2B494C509de39C1eEB493AbA82B6a00A7De";

export const companyInstance = async () => {
  if (!connector.connected) {
    console.log("WalletConnect not connected");
    return;
  }
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
