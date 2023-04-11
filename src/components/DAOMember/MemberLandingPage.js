import React, { useState } from 'react'
import '../../styles/DAOMember/MemberLandingPage.css'



function MemberLandingPage() {
    const [numOfTokens, setNumOfTokens] = useState("");
    const [tknAmtResult, setTknAmtResult] = useState("");
    const tokenPrice = 100;
    function handleCalculation() {
        setTknAmtResult(numOfTokens * tokenPrice);
    }

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
                                            onChange={(e) => { setNumOfTokens(e.target.value) }}
                                        />
                                    </div>

                                </div>
                                <div className="form-group-MLPage row mb-4">

                                    <div className='col-12 col-md-6 MLPage-LabelTitle'>
                                        <label for="formGroupExampleInput2">Total Amount:</label>
                                    </div>
                                    <div className='col-12 col-md-6 '>
                                        {/* <p className='TknAmtResult-class' >{`$${tknAmtResult}`}</p> */}
                                        <input
                                            type="text"
                                            class="form-control-plaintext"
                                            id="formGroupExampleInput2"
                                            value={`$${tknAmtResult}`}
                                            readOnly />
                                    </div>

                                </div>
                                <div className='MemberBuyTknBtn-class'>
                                    <div className="MemberBuyTknBtn row">
                                        <button
                                            type="button"
                                            className="MemberBuyTknBtn1 col-12 col-md-5"
                                            onClick={handleCalculation}>Calculate</button>
                                        <button
                                            type="button"
                                            className="MemberBuyTknBtn2 col-12 col-md-5"
                                            onClick={() => window.location.href = '/daoMemberProposals'}>Buy Tokens</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MemberLandingPage