import companyABI from "../contracts/artifacts/Companyabi.json";
import daoABI from "../contracts/artifacts/Daoabi.json";
import ercTokenABI from "../contracts/artifacts/ErcTokenabi.json";
import { useWalletConnect } from "@walletconnect/react-native-dapp";

export const COMPANY_ADDRESS = "0x9BF762b943b0eBdC0413C4B4eE73407D659fe7dD";
export const DAO_MEMBER_ADDRESS = "0xF526be3099084401103e9ef205f0D08749A0ce2B";
export const ERC_TOKEN_ADDRESS = "0x211e127c03AbE404744EA333D45FBE4177c2EEF4";

export const companyInstance = async () => {
  const { connector } = useWalletConnect();

  if (!connector.connected) {
    console.log("WalletConnect not connected");
    return;
  }

  const provider = new Web3(connector.ethereum);
  const accounts = await provider.eth.getAccounts();
  const conn = new provider.eth.Contract(companyABI, COMPANY_ADDRESS, {
    from: accounts[0],
  });
  return conn;  
};

/* export const daoInstance = async () => {
  const { connector } = useWalletConnect();

  if (!connector.connected) {
    console.log("WalletConnect not connected");
    return;
  }
};

export const ercTokenInstance = async () => {
  const { connector } = useWalletConnect();

  if (!connector.connected) {
    console.log("WalletConnect not connected");
    return;
  }
}; */
