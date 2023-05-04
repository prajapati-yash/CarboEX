import companyABI from "../contracts/artifacts/Companyabi.json";
import daoABI from "../contracts/artifacts/Daoabi.json";
import ercTokenABI from "../contracts/artifacts/ErcTokenabi.json";
import Web3 from "web3";
import { connector } from "./WalletConnectExperience";

export const COMPANY_ADDRESS = "0x41057cB44bdcc927a0e9FeA6e0C5da47F9c5B97E";
export const DAO_MEMBER_ADDRESS = "0x9b324829D71ffD688Eb4C8B61e3583E247dB1420";
export const ERC_TOKEN_ADDRESS = "0xa44CD252520891cf84c8f555dd06D3cfe3c8893E";

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
