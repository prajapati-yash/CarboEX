import React from 'react';
import '../../../styles/calculator/storecalculation/ResultCalculation.css'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import {
    useConnectModal,
    useAccountModal,
    useChainModal,
} from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { companyInstance } from '../../Contracts';

function ResultCalculation({ sum, onClose }) {
    const navigate = useNavigate();
    let message, button;

    const { address } = useAccount();
    const { openConnectModal } = useConnectModal();

    const verifyUserAccount = async () => {
        try {
            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                if (!provider) {
                    console.log("Metamask is not installed, please install!");
                }
                const con = await companyInstance();
                const verifyTx = await con.iscompaniesAdd(address)
                // result = verifyTx
                console.log(verifyTx)
                // console.log(con);
                return verifyTx;
            }
        } catch (error) {
            console.log(error);
        }
    }

    const buyOrSignup = async () => {
        if (address) {
            const test = await verifyUserAccount();
            console.log(test)
            if (test) {
                navigate("/buy-carbon-credits")
                window.location.reload();
            }
            else {
                navigate("/signup")
            }
        }
        else {
            openConnectModal();
        }
    };


    if (sum === 0) {
        message = "Please calculate your emission first.";
    } else if (sum > 1000) {
        message = `You emitted total ${sum} KG CO2. You exceed the global limit. Here in our platform you can buy carbon credits and contribute towards greener environment.`;
        button = <button className='button-32' onClick={buyOrSignup}>Buy</button>;
    }
    else if (sum < 1000 && sum > 0) {
        message = `You emitted total ${sum} KG CO2. Your Carbon Emission is under global limit. `;
    }
    // else if (sum < 1000 && sum > 0) {
    //     message = `You emitted total ${sum} KG CO2. You are eligible to sell credits.`;
    //     button = <button className='button-33'>Sell</button>;
    // } 
    // else {
    //     message = `Emission is between 4000 to 7000`
    // }

    return (
        <>
            {/* <div> */}
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={onClose}>&times;</span>
                    <div className='messAndBtn'>
                        <p>{message}</p>
                        {button && <div>{button}</div>}
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    );
}

export default ResultCalculation;
