import React from 'react'
import '../../styles/DAOMember/MemberLandingPage.css'

function MemberLandingPage() {
    const TknAmtResult = 200;
    return (
        <>
            <div className='container-fluid MLPageBg'>
                <div className='MLPage-content pb-4'>
                    <div className="MLPage-head py-3 py-sm-4 d-flex justify-content-center">
                        <p>BECOME A MEMBER</p>
                    </div>
                    <div className='d-lg-flex row pb-4 align-items-center MLPage-form-content justify-content-around'>
                        <div className="MLPage-box-bg mb-lg-0 mb-sm-4 mb-4 align-self-stretch py-5 px-4">
                            <form className='MLPage-form-main'>
                                <div className="form-group-MLPage row mb-4">

                                    <div className='col-12 col-md-6 MLPage-LabelTitle'>
                                        <label for="formGroupExampleInput">No. of Tokens:</label>
                                    </div>
                                    <div className='col-12 col-md-6 '>
                                        <input type="text" class="TknAmtInput-class" id="formGroupExampleInput" placeholder="Enter your tokens" />
                                    </div>

                                </div>
                                <div className="form-group-MLPage row mb-4">

                                    <div className='col-12 col-md-6 MLPage-LabelTitle'>
                                        <label for="formGroupExampleInput2">Total Amount:</label>
                                    </div>
                                    <div className='col-12 col-md-6 '>
                                        <p className='TknAmtResult-class'>{TknAmtResult}</p>
                                        {/* <input type="text" class="form-control-plaintext" id="formGroupExampleInput2" placeholder="$200" readOnly /> */}
                                    </div>

                                </div>
                                <div className='MemberBuyTknBtn-class'>
                                    <div className="MemberBuyTknBtn row">
                                        <button type="button" class="MemberBuyTknBtn1 col-12 col-md-5">Calculate</button>
                                        <button type="submit" class="MemberBuyTknBtn2 col-12 col-md-5">Buy Tokens</button>
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