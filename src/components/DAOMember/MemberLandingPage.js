import React, { useState } from 'react'
import '../../styles/DAOMember/MemberLandingPage.css'
import { ethers } from 'ethers';
import { daoInstance, ercTokenInstance } from '../Contracts';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function MemberLandingPage() {
    const navigate = useNavigate()
    const [numOfTokens, setNumOfTokens] = useState("");
    const [tknAmtResult, setTknAmtResult] = useState("");
    const [tokenPrice, setTokenPrice] = useState("");

    const ercTokenFunc = async () => {
        try {
            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                if (!provider) {
                    console.log("Metamask is not installed, please install!");
                }
                const conToken = await ercTokenInstance();
                const tokenPrice = await conToken.gettokenPrice();
                const hexValue = tokenPrice._hex;
                const decimalValue = parseInt(hexValue, 16);
                setTokenPrice(decimalValue);
                const conDAO = await daoInstance();
                // console.log(conDAO)
                const addMemberFunc = await conDAO.addmember(numOfTokens, { value: numOfTokens * hexValue });
                navigate("/daoMemberProposals")
                console.log(addMemberFunc)
                // setTknAmtResult(decimalValue * numOfTokens)
                console.log(addMemberFunc.value)
                // console.log(con);
                // console.log(tokenPrice);
                // console.log(tokenPrice._hex);
                // console.log(decimalValue)
                // return decimalValue;
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getTokenPrice = async () => {
        try {
            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                if (!provider) {
                    console.log("Metamask is not installed, please install!");
                }
                const conToken = await ercTokenInstance();
                const tokenPrice = await conToken.gettokenPrice();
                const hexValue = tokenPrice._hex;
                const decimalValue = parseInt(hexValue, 16);
                console.log(decimalValue);
                setTokenPrice(decimalValue);
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        setTknAmtResult(numOfTokens ? (tokenPrice * numOfTokens) / Math.pow(10, 18) : "0");
        // to convert value into ETH from wei 

    }, [numOfTokens])

    useEffect(() => {
        getTokenPrice()
    }, [])

    return (
        <>
            <div className='container-fluid MLPageBg'>
                <div className='MLPage-content pb-4'>
                    <div className="MLPage-head py-3 py-sm-4 d-flex justify-content-center">
                        <p>BECOME A MEMBER</p>
                    </div>
                    <div className='d-lg-flex row pb-4 align-items-center MLPage-form-content justify-content-around'>
                        <div className="MLPage-box-bg mb-lg-0 mb-sm-4 mb-4 align-self-stretch py-5 px-4">
                            <form className='MLPage-form-main' >
                                <div className="form-group-MLPage row mb-4">

                                    <div className='col-12 col-md-6 MLPage-LabelTitle'>
                                        <label for="formGroupExampleInput">No. of Tokens:</label>
                                    </div>
                                    <div className='col-12 col-md-6 '>
                                        <input
                                            type="number"
                                            class="TknAmtInput-class"
                                            id="formGroupExampleInput"
                                            placeholder="Enter your tokens"
                                            value={numOfTokens}
                                            onChange={(e) => { setNumOfTokens(e.target.value); }}
                                        />
                                    </div>

                                </div>
                                <div className="form-group-MLPage row mb-4">

                                    <div className='col-12 col-md-6 MLPage-LabelTitle'>
                                        <label for="formGroupExampleInput2">Total Amount:</label>
                                    </div>
                                    <div className='col-12 col-md-6 '>
                                        {/* <p className='TknAmtResult-class' >{`$${tknAmtResult}`}</p> */}
                                        {tknAmtResult ? <input
                                            type="text"
                                            class="form-control-plaintext"
                                            id="formGroupExampleInput2"
                                            value={tknAmtResult + " ETH"}
                                            readOnly /> : ""}
                                    </div>

                                </div>
                                <div className='MemberBuyTknBtn-class'>
                                    <div className="MemberBuyTknBtn row">
                                        {/* <button
                                            type="button"
                                            className="MemberBuyTknBtn1 col-12 col-md-5"
                                            onClick={handleCalculation}>Calculate</button> */}
                                        <button
                                            type="button"
                                            className="MemberBuyTknBtn2 col-12 col-md-5"
                                            onClick={ercTokenFunc}>
                                            {/* onClick={() => window.location.href = '/daoMemberProposals'}> */}
                                            Buy Tokens</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <button onClick={ercTokenFunc}>click to get the erc token instance</button> */}
            </div>
        </>
    )
}

export default MemberLandingPage