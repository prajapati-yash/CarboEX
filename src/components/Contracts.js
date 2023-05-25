import { ethers } from "ethers";
import companyABI from "../../src/contract/artifacts/Companyabi.json"
import daoABI from "../../src/contract/artifacts/Daoabi.json"
import ercTokenABI from "../../src/contract/artifacts/ErcTokenabi.json"
export const COMPANY_ADDRESS = "0xCE0f23D5547e93a33D5f67b4E13a7dE4054c68D4";
export const DAO_MEMBER_ADDRESS = "0x8894Df7cC26DB1A2459a6Ec3d90689f0b4b3c41F";
export const ERC_TOKEN_ADDRESS = "0x9AC4A2B494C509de39C1eEB493AbA82B6a00A7De";

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