import React, { useState } from 'react'
import '../../styles/DAOMember/ProposalData.css'
import { useLocation } from 'react-router-dom';
import { daoInstance } from '../Contracts';
import { ethers } from 'ethers';

function ProposalData() {
    const location = useLocation()
    // console.log(location.state.data);
    const proposal = location.state.data ? location.state.data : "";
    const [downvoteProposal, setDownvoteProposal] = useState()


    const daoProposalApprove = async () => {
        try {
            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                if (!provider) {
                    console.log("Metamask is not installed, please install!");
                }
                const con = await daoInstance();
                const upvoteProposal = await con.upvote(proposal[0])
                // console.log(upvoteProposal)
            }
        } catch (error) {
            console.log(error);
        }
    }


    const daoProposalReject = async () => {
        try {
            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                if (!provider) {
                    console.log("Metamask is not installed, please install!");
                }
                const con = await daoInstance();
                const downvoteProposal = await con.downvote(proposal[0])
                // console.log(downvoteProposal)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const [showModal, setShowModal] = useState(false);
    const [enlargedImageSrc, setEnlargedImageSrc] = useState("0");
    const proposalValue = parseInt(proposal[4]._hex, 16)
    const proposalData = {
        id: proposal[0],
        name: proposal[3] ? "Emission" : "Offset",
        publicAddress: proposal[5],
        summary: proposal[1],
        certificateImage: "https://" + `${proposal[2]}` + ".ipfs.w3s.link",
        // type: "Type Name",
        value: proposalValue,
    }

    const handleImageClick = () => {
        setShowModal(true);
        setEnlargedImageSrc(proposalData.certificateImage);
    };

    const handleCloseClick = () => {
        setShowModal(false);
        setEnlargedImageSrc("");
    };

    const modalStyle = {
        display: showModal ? "block" : "none",
    };

    // const downvoteButton = document.getElementById('downvote-button');
    // downvoteButton.addEventListener('click', () => {
    //     console.log(downvoteProposal);
    // });

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
                                                        <span className="proposalInfoLabel"> Type: </span>
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
                                                        <p className="proposalInfoDataBg-Cert">
                                                            <div
                                                                className=""
                                                                style={{ width: "fit-content" }}
                                                            >
                                                                {" "}
                                                                <a
                                                                    // href="#"
                                                                    onClick={() =>
                                                                        handleImageClick({ certificateImage: proposalData.certificateImage })
                                                                    }
                                                                >
                                                                    <img
                                                                        src={proposalData.certificateImage}
                                                                        className="img-thumbnail"
                                                                        alt="thumbnail"
                                                                        style={{ height: "150px", width: "150px" }}
                                                                    />
                                                                </a>
                                                            </div>
                                                            {/* </div> */}
                                                        </p>
                                                    </p>
                                                    {/* <p className="proposal-type">
                                                        <span className="proposalInfoLabel">Type:</span> <p className="proposalInfoDataBg">{proposalData.type}</p>
                                                    </p> */}
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
                                            <button id='downvote-button' className='PData-reject-btn  rounded-pill' onClick={daoProposalReject}>REJECT</button>
                                        </div>
                                        <div>
                                            <button id='upvote-button' className='PData-approve-btn  rounded-pill' onClick={daoProposalApprove}>APPROVE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal" tabIndex="-1" role="dialog" style={modalStyle} >
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <img
                                        src={enlargedImageSrc}
                                        className="certificate-image-enlargedImage"
                                        alt="enlarged"
                                    />
                                    <span
                                        className="close certificate-image-closeStyle"
                                        onClick={handleCloseClick}
                                    >
                                        &times;
                                    </span>
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