import React from 'react'
import '../../styles/DAOMember/ProposalData.css'


const proposalData = {
    id: 1,
    name: "Example Name",
    // publicAddress: "0x301",
    publicAddress: "0x3013bjh9yjhnk90h06D69C10710EaE148C8410E1",
    summary: "The Carbon Trading Platform Using Blockchain is a decentralised application that aims to facilitate carbon credit trading by creating an unchangeable and tamper-proof record of transactions. It will enable buyers and sellers of carbon credits to conduct safe, open transactions.",
    certificateImage: "Certificate image here",
    type: "Type Name",
    value: "500",
}


function ProposalData() {
    return (
        <>
            <div className='container-fluid PDataPageBg'>
                <div className='PDataPage-content pb-4'>
                    {/* <div className="PDataPage-head py-3 py-sm-4 d-flex justify-content-center">
                        <p>PROPOSAL DATA</p>
                    </div> */}
                    <div className='PDataPage-content-MainBody py-4'>
                        <div className="PDataPage-box-bg ">
                            <div className='PDataPage-content-box d-lg-flex align-items-center justify-content-around row d-block d-md-flex'>
                                <div className='PDataPage-content-TD mb-lg-0 mb-sm-4 mb-4 align-self-stretch py-5 px-4 col'>
                                    <div className='PDataPage-content-title d-flex justify-content-center pb-3'>ACTIVE PROPOSAL</div>
                                    <div className='PDataPage-content-dataBody'>
                                        <div className='PDataPage-content-dataItem row'>

                                            <div className="PDataPage-wrapper col">
                                                <div className="">
                                                    <p className="scrollEffect">
                                                        <span className="proposalInfoLabel"> Name: </span>
                                                        <p className="proposalInfoDataBg " > {proposalData.name}</p>
                                                    </p>
                                                    <p className="proposalData-public-address scrollEffect">
                                                        <span className="proposalInfoLabel">Public Address:</span>
                                                        <p className="proposalInfoDataBg">
                                                            <div className='allproposalData'>
                                                                {proposalData.publicAddress}
                                                            </div>
                                                            {/* <p className=" to-copy-pub-add">
                                                            <div className='allproposalData'>
                                                                {proposalData.publicAddress}</div> */}
                                                            {/* <button class="copy-field-input-button" >
                                                                <div class="copy-field-button-visible">
                                                                    <i class="fa-solid fa-copy mr-1" style={{ color: '#2effaf' }} width="20px" height="20px" ></i>
                                                                </div>
                                                            </button> */}
                                                        </p>
                                                    </p>
                                                    <p className=" ">
                                                        <span className="proposalInfoLabel"> Summary:</span>
                                                        <p className="proposalInfoDataBg proposal-summary summary-scroll-bar ">{proposalData.summary}</p>
                                                    </p>
                                                    <p className="proposal-certificate-image">
                                                        <span className="proposalInfoLabel"> Certificate: </span>
                                                        <p className="proposalInfoDataBg">{proposalData.certificateImage}</p>
                                                    </p>
                                                    <p className="proposal-type">
                                                        <span className="proposalInfoLabel">Type:</span> <p className="proposalInfoDataBg">{proposalData.type}</p>
                                                    </p>
                                                    <p className="proposal-value">
                                                        <span className="proposalInfoLabel">Value:</span> <p className="proposalInfoDataBg">{proposalData.value}</p>
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className='PDataPage-content-Btns-body d-flex justify-content-center align-items-center col-8 mx-auto'>
                                    <div className='PDataPage-content-Btns '>
                                        <div className='PDataPage-RA-Btns d-flex justify-content-center align-items-center'>
                                            <button className='PData-reject-btn  rounded-pill'>REJECT</button>
                                        </div>
                                        <div>
                                            <button className='PData-approve-btn  rounded-pill'>APPROVE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>

    )
}

export default ProposalData