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
    let message, button, message2, message3;

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
                const verifyTx = await con.isCompaniesAddMapping(address)
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
        message = <> You emitted total {sum} KG CO2. <br /> Your carbon emissions are higher than the global limit, simply click on the <span style={{ borderBottom: "2px solid red" }}><b>Buy Credits</b></span> button below to purchase carbon credits and offset your carbon footprint. These credits are verified and certified, and your purchase will contribute to a more sustainable future.<br /> Let's work together to protect our Planet! 🌏</>;
        button = <button className='button-32' onClick={buyOrSignup}>Buy Credits</button>;
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
