import React, { useEffect } from 'react'
import '../../styles/home/HomeHero.css'
import { ethers } from 'ethers';
import {
    useConnectModal,
    useAccountModal,
    useChainModal,
} from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { useNavigate } from 'react-router-dom';
import { companyInstance } from '../Contracts';


function HomeHero() {
    const navigate = useNavigate()
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
                console.log(con);
                return verifyTx;
            }
        } catch (error) {
            console.log(error);
        }
    }


    const SignupWithWallet = async () => {
        if (address) {
            const test = await verifyUserAccount();
            console.log(test)
            if (test) {
                navigate("/user-dashboard")
            }
            else {
                navigate("/signup")
            }
        }
        else {
            openConnectModal();
        }
    };

    // useEffect(() => {
    //     navigate("/signup")
    // }, [address])
    return (
        <div className='container-fluid px-4 px-md-5'>
            <div className='my-component '>
                <div className="secondContainer d-flex justify-content-center align-items-center">
                    <div className='text-container col-xl-5 col-4'>
                        <p className="text">Transforming carbon credits trading through Blockchain Technology.</p>
                    </div>
                    <div className='col-xl-6 col-7 d-flex box-container justify-content-end px-3'>
                        <div className="img-text">
                            <div className="second-text px-md-5 py-md-5 px-sm-4 py-sm-4 px-3 py-3">
                                <span className=''>
                                    <p>Welcome to CarboEx.</p>
                                    <p>The Carbon Trading Platform that facilitates carbon credit trading for a sustainable future.</p>
                                    <p>Powered by Blockchain Technology.</p>
                                </span>

                                {/* <span className='for-hero-mobile'>Hi! The Carbon Trading Platform using Blockchain aims to facilitate carbon credit trading by creating an unchangeable and tamper-proof record of transactions, automating the exchange of carbon credits, and supporting sustainable development.</span> */}

                            </div>
                            <div className='start-button-div py-sm-2 py-xl-4 '>
                                <button className='main-landing-button-gs btn btn-primary shadow-none border-0 start-button rounded-pill py-2'
                                    onClick={() => SignupWithWallet()} > GET STARTED</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default HomeHero
