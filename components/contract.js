import companyABI from "../contracts/artifacts/Companyabi.json";
import daoABI from "../contracts/artifacts/Daoabi.json";
import ercTokenABI from "../contracts/artifacts/ErcTokenabi.json";
import Web3 from "web3";
import { connector } from "./WalletConnectExperience";

export const COMPANY_ADDRESS = "0x49c21E94DE2969F07a2a538D4031B41eD3798525";
export const DAO_MEMBER_ADDRESS = "0x65ce02B7e5E6DdEF50Face194efA217572f2bb5b";
export const ERC_TOKEN_ADDRESS = "0x0De38b8f9EdA78C0d8375A67C3cB359264cfbBA4";

const ACCOUNT_PASSWORD = process.env.ACCOUNT_PASSWORD;

export const companyInstance = async () => {
  // await Web3.eth.personal.unlockAccount(connector.accounts[0], ACCOUNT_PASSWORD);

  if (!connector.connected) {
    console.log("WalletConnect not connected");
    return;
  }

  // console.log("connector....", connector);s
  const provider = new Web3("https://pre-rpc.bt.io/");
  // console.log("Provider.....", provider);
  // const accounts = await provider.getAccounts();
  // console.log(accounts);
  // const account = connector.accounts[0];

  /* const transaction = {
    from: connector.accounts[0],
  };
  const signer = provider.eth.accounts.signTransaction(transaction);
  console.log("Signer------ ", signer); */

  const conn = new provider.eth.Contract(companyABI, COMPANY_ADDRESS, {
    from: connector.accounts[0],
    to: COMPANY_ADDRESS,
  });
  // console.log("Conn:",conn);

  return conn;
};
