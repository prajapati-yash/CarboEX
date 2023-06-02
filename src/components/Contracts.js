import { ethers } from "ethers";
import companyABI from "../../src/contract/artifacts/Companyabi.json"
import daoABI from "../../src/contract/artifacts/Daoabi.json"
import ercTokenABI from "../../src/contract/artifacts/ErcTokenabi.json"
export const COMPANY_ADDRESS = "0x72e6d982Fd46FfB0BB697D0C21A9d0cC9A6cB1b9";
export const DAO_MEMBER_ADDRESS = "0xB2e93e6fd9b87715CaeA467875D9Adca99DF7D1C";
export const ERC_TOKEN_ADDRESS = "0x9955a6b3b0025bc9B00246B38C94CFb42999E6d1";

export const companyInstance = async () => {
    const { ethereum } = window;
    if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        if (!provider) {
            console.log("Metamask is not installed, please install!");
        }
        const con = new ethers.Contract(
            COMPANY_ADDRESS,
            companyABI,
            signer
        );
        // console.log(con);
        return con;
    } else {
        console.log("error");
    }
};

export const daoInstance = async () => {
    const { ethereum } = window;
    if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        if (!provider) {
            console.log("Metamask is not installed, please install!");
        }
        const con = new ethers.Contract(
            DAO_MEMBER_ADDRESS,
            daoABI,
            signer
        );
        // console.log(con);
        return con;
    } else {
        console.log("error");
    }
};

export const ercTokenInstance = async () => {
    const { ethereum } = window;
    if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        if (!provider) {
            console.log("Metamask is not installed, please install!");
        }
        const con = new ethers.Contract(
            ERC_TOKEN_ADDRESS,
            ercTokenABI,
            signer
        );
        // console.log(con);
        return con;
    } else {
        console.log("error");
    }
};