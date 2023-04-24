import { ethers } from "ethers";
import companyABI from "../../src/contract/artifacts/Companyabi.json"
import daoABI from "../../src/contract/artifacts/Daoabi.json"
import ercTokenABI from "../../src/contract/artifacts/ErcTokenabi.json"
export const COMPANY_ADDRESS = "0xe3D729969E457B35982961d21b696A8f0FD4F5aB";
export const DAO_MEMBER_ADDRESS = "0xED9063FfE387bA8EcC22cb5BbCE498B9cC457442";
export const ERC_TOKEN_ADDRESS = "0x0f3451aB88Bd010BD52f3095E0C9EDf9DA0fC02F";

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