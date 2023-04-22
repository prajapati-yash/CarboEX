import React, { useState } from "react";
import "../../styles/DAOMember/ProposalData.css";
import { useLocation } from "react-router-dom";
import { daoInstance } from "../Contracts";
import { ethers } from "ethers";

function ProposalData() {
  const location = useLocation();
  console.log(location.state.data);
  const proposal = location.state ? location.state.data : "";
  const [downvoteProposal, setDownvoteProposal] = useState();
  const [rejectbtnloading, setrejectbtnloading] = useState(false);
  const [approvebtnloading, setapprovebtnloading] = useState(false);

  const daoProposalApprove = async () => {
    try {
      setapprovebtnloading(true);
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        if (!provider) {
          console.log("Metamask is not installed, please install!");
        }
        const con = await daoInstance();
        const value = await con.getConfigs()
        console.log(value[1]._hex)
        const upvoteProposal = await con.upvote(proposal[0], { value: String(value[1]._hex) });
        // console.log(upvoteProposal)
        setapprovebtnloading(false);
      }
    } catch (error) {
      console.log(error);
      setapprovebtnloading(false);
    }
  };

  const daoProposalReject = async () => {
    try {
      setrejectbtnloading(true);
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        if (!provider) {
          console.log("Metamask is not installed, please install!");
        }
        const con = await daoInstance();
        const value = await con.getConfigs()
        console.log(value[1]._hex)
        const downvoteProposal = await con.downvote(proposal[0], { value: String(value[1]._hex) });
        setrejectbtnloading(false);
        // console.log(downvoteProposal)
      }
    } catch (error) {
      console.log(error);
      setrejectbtnloading(false);
    }
  };

  const data1 = () => {
    console.log(proposal[0])
    // console.log(value[1])
  }
  const [showModal, setShowModal] = useState(false);
  const [enlargedImageSrc, setEnlargedImageSrc] = useState("0");
  const proposalValue = parseInt(proposal[4]._hex, 16);
  const proposalData = {
    id: proposal[0],
    name: proposal[3] ? "Emission" : "Offset",
    publicAddress: proposal[5],
    summary: proposal[1],
    certificateImage: `https://ipfs.io/ipfs/${proposal[2]}`,
    // type: "Type Name",
    value: proposalValue,
  };

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
      <div className="container-fluid PDataPageBg">
        <div className="PDataPage-content pb-4">
          {/* <div className="PDataPage-head py-3 py-sm-4 d-flex justify-content-center">
                        <p>PROPOSAL DATA</p>
                    </div> */}
          <div className="PDataPage-content-MainBody py-4">
            <div className="PDataPage-box-bg ">
              <div className="PDataPage-content-box d-lg-flex align-items-center justify-content-around row d-block d-md-flex">
                <div className="PDataPage-content-TD mb-lg-0 mb-sm-4 mb-4 align-self-stretch py-5 px-4 col">
                  <div className="PDataPage-content-title d-flex justify-content-center pb-3">
                    ACTIVE PROPOSAL
                  </div>
                  <div className="PDataPage-content-dataBody">
                    <div className="PDataPage-content-dataItem row">
                      <div className="PDataPage-wrapper col">
                        <div className="">
                          <p className="scrollEffect">
                            <span className="proposalInfoLabel"> Type: </span>
                            <p className="proposalInfoDataBg ">
                              {" "}
                              {proposalData.name}
                            </p>
                          </p>
                          <p className="proposalData-public-address scrollEffect">
                            <span className="proposalInfoLabel">
                              Public Address:
                            </span>
                            <p className="proposalInfoDataBg">
                              <div className="allproposalData">
                                {proposalData.publicAddress}
                              </div>
                            </p>
                          </p>
                          <p className=" ">
                            <span className="proposalInfoLabel"> Summary:</span>
                            <p className="proposalInfoDataBg proposal-summary summary-scroll-bar ">
                              {proposalData.summary}
                            </p>
                          </p>
                          <p className="proposal-certificate-image">
                            <span className="proposalInfoLabel">
                              {" "}
                              Certificate:{" "}
                            </span>
                            <p className="proposalInfoDataBg-Cert">
                              <div
                                className=""
                                style={{ width: "fit-content" }}
                              >
                                {" "}
                                <a
                                  // href="#"
                                  onClick={() =>
                                    handleImageClick({
                                      certificateImage:
                                        proposalData.certificateImage,
                                    })
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
                            <span className="proposalInfoLabel">Value:</span>{" "}
                            <p className="proposalInfoDataBg">
                              {proposalData.value}
                            </p>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="PDataPage-content-Btns-body d-flex justify-content-center align-items-center col-8 mx-auto">
                  <div className="PDataPage-content-Btns ">
                    <div className="PDataPage-RA-Btns d-flex justify-content-center align-items-center">
                      <button
                        id="downvote-button"
                        className="PData-reject-btn  rounded-pill"
                        onClick={daoProposalReject}
                      >
                        {rejectbtnloading ? (
                          <svg
                            className="animate-spin button-spin-svg-pic"
                            version="1.1"
                            id="L9"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 100 100"
                            style={{ width: "10%", fill: "#fff" }}

                          >
                            <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"></path>
                          </svg>
                        ) : (
                          <>REJECT</>
                        )}
                      </button>
                    </div>
                    <div>
                      <button
                        id="upvote-button"
                        className="PData-approve-btn  rounded-pill"
                        onClick={daoProposalApprove}
                      >

                        {approvebtnloading ? (
                          <svg
                            className="animate-spin button-spin-svg-pic"
                            version="1.1"
                            id="L9"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 100 100"
                            style={{ width: "10%", fill: "#fff" }}
                          >
                            <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"></path>
                          </svg>
                        ) : (
                          <>APPROVE</>
                        )}

                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal" tabIndex="-1" role="dialog" style={modalStyle}>
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
        {/* <button onClick={data1}>click</button> */}
      </div>
    </>
  );
}

export default ProposalData;
