import { ethers } from "ethers";
import companyABI from "../../src/contract/artifacts/Companyabi.json"
import daoABI from "../../src/contract/artifacts/Daoabi.json"
import ercTokenABI from "../../src/contract/artifacts/ErcTokenabi.json"
export const COMPANY_ADDRESS = "0xE6Bb955a5B8048a6F5Db91841D4061Ca62ff6D84";
export const DAO_MEMBER_ADDRESS = "0xAe1dDC6CfFa0445C61CB4319808B793C5B88554B";
export const ERC_TOKEN_ADDRESS = "0x6427770a0e43E1349330bD8D65eB8f2ba844f70F";

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