import companyABI from "../contracts/artifacts/Companyabi.json";
import daoABI from "../contracts/artifacts/Daoabi.json";
import ercTokenABI from "../contracts/artifacts/ErcTokenabi.json";
import Web3 from "web3";
import { connector } from "./WalletConnectExperience";

export const COMPANY_ADDRESS = "0x49c21E94DE2969F07a2a538D4031B41eD3798525";
export const DAO_MEMBER_ADDRESS = "0x65ce02B7e5E6DdEF50Face194efA217572f2bb5b";
export const ERC_TOKEN_ADDRESS = "0x0De38b8f9EdA78C0d8375A67C3cB359264cfbBA4";

export const companyInstance = async () => {

  if (!connector.connected) {
    console.log("WalletConnect not connected");
    return;
  }
  const provider = new Web3('https://pre-rpc.bt.io/');
  const conn = new provider.eth.Contract(companyABI, COMPANY_ADDRESS);
  return conn;
};

export const daoInstance = async () => {

  if (!connector.connected) {
    console.log("WalletConnect not connected");
    return;
  }
  const provider = new Web3('https://pre-rpc.bt.io/');
  const conn = new provider.eth.Contract(daoABI, DAO_MEMBER_ADDRESS);
  return conn;
};

export const ercTokenInstance = async () => {

  if (!connector.connected) {
    console.log("WalletConnect not connected");
    return;
  }
  const provider = new Web3('https://pre-rpc.bt.io/');
  const conn = new provider.eth.Contract(ercTokenABI, ERC_TOKEN_ADDRESS);
  return conn;
};
