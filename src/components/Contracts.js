import { ethers } from "ethers";
import companyABI from "../../src/contract/artifacts/Companyabi.json"
import daoABI from "../../src/contract/artifacts/Daoabi.json"
import ercTokenABI from "../../src/contract/artifacts/ErcTokenabi.json"
export const COMPANY_ADDRESS = "0xDA3eDCceC98A38d09b7cdc9f33f027D6ccaf5250";
export const DAO_MEMBER_ADDRESS = "0x63488b17c0577C5f77aF8980752Ea42a3aaa5649";
export const ERC_TOKEN_ADDRESS = "0xcA3379b9B8cC7a1895DA45F258297F4B0bD0e139";

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