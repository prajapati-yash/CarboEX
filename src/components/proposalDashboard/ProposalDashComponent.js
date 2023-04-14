import React, { useState } from "react";
import "../../styles/proposal/ProposalDashboard.css";
import { ethers } from "ethers";
import { daoInstance } from "../Contracts";
import { useAccount } from 'wagmi';


function ProposalDashComponent() {
  const [showModal, setShowModal] = useState(false);
  const [enlargedImageSrc, setEnlargedImageSrc] = useState("0");
  const { address } = useAccount();
  const [allData, setAllData] = useState();
  const proposalDashboardData = [
    {
      id: 1,
      title: "Wind Energy ",
      image: "assets/about/teamImages/yash.jpg",
      result: "Approved",
      stake: "5 BTTC",
      returnStake: "0 BTTC",
    },
  ]


  const getUserIDs = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        if (!provider) {
          console.log("Metamask is not installed, please install!");
        }
        const con = await daoInstance();
        const getUserID = await con.getUserProposals(address);
        setAllData(getUserID);
        // console.log(allData[0]._hex)
      }
    } catch (error) {
      console.log(error);
    }
  }


  const getUserDataById = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        if (!provider) {
          console.log("Metamask is not installed, please install!");
        }
        const con = await daoInstance();
        const idInDecimal = parseInt(allData[0]._hex, 16)
        // console.log(allData[0]._hex)
        const getUserData = await con.getProposal(idInDecimal);
        console.log(getUserData)
        // const getUserID = await con.getUserProposals(address);
        // setAllData(getUserID);
        // console.log(allData[0]._hex)
      }
    } catch (error) {
      console.log(error);
    }
  }



  const handleImageClick = (src) => {
    setShowModal(true);
    setEnlargedImageSrc(src.image);
  };

  const handleCloseClick = () => {
    setShowModal(false);
    setEnlargedImageSrc("");
  };

  const modalStyle = {
    display: showModal ? "block" : "none",
  };
  return (
    <>
      <div className="proposalContainer">
        <div className="myProposals-head-title py-3 py-sm-4 d-flex justify-content-center">
          <p>PROPOSALS</p>
        </div>
        <div className="proposalDetails">
          {proposalDashboardData.map((details) => (
            <div key={details.id} className="proposal-company-wrapper">
              <div className="proposal-dash">
                <div className="proposal-dash-info">
                  <div className="">
                    {" "}
                    <span className="proposal-dash-label">Sr No.: </span>{" "}
                    <p className="proposal-dash-output-Bg "> {details.id}</p>
                  </div>
                  <div className=" ">
                    <span className="proposal-dash-label">Title: </span>
                    <p className="proposal-dash-output-Bg proposal-dash-title scroll-bar ">
                      {details.title}
                    </p>
                  </div>
                  <div className="mb-3">
                    <span className="proposal-dash-label">Image:</span>
                    <div
                      className="proposal-dash-output-Bg proposal-dash-image"
                      style={{ width: "fit-content" }}
                    >
                      {" "}
                      <a
                        // href="#"
                        onClick={() =>
                          handleImageClick({ image: details.image })
                        }
                      >
                        <img
                          src={details.image}
                          className="img-thumbnail"
                          alt="thumbnail"
                          style={{ height: "150px", width: "150px" }}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="">
                    <span className="proposal-dash-label">Result: </span>{" "}
                    <p className="proposal-dash-output-Bg">{details.result}</p>
                  </div>
                  <div className="">
                    <span className="proposal-dash-label">Stake:</span>{" "}
                    <p className="proposal-dash-output-Bg">{details.stake}</p>
                  </div>
                  <div className="">
                    <span className="proposal-dash-label">Return Stake:</span>{" "}
                    <p className="proposal-dash-output-Bg">{details.returnStake}</p>
                  </div>
                  <div className="">
                    <span className="proposal-dash-label">Credit Issue</span>{" "}<br />
                    <button className=" btn btn-primary">Claim</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* ------ Onclick Enlarged Image ----- */}
          <div className="modal" tabIndex="-1" role="dialog" style={modalStyle} >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <img
                    src={enlargedImageSrc}
                    className="proposal-dash-enlargedImageStyle"
                    alt="enlarged"
                  />
                  <span
                    className="close proposal-dash-closeStyle"
                    onClick={handleCloseClick}
                  >
                    &times;
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* ----------Ends here ---------------- */}
          <button onClick={getUserIDs}>click to get array of id</button>
          <button onClick={getUserDataById}>click to get data by id</button>
        </div>
      </div>
    </>
  );
}

export default ProposalDashComponent;
