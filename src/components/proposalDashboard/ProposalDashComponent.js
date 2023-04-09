import React, { useState } from "react";
import "../../styles/proposal/proposalDashboard.css";

const proposalDashboardData=[
  {
    id:1,
    title:"Wind ENergy ",
    image:"assets/about/teamImages/yash.jpg",
    result:"Approved",
    stake:"5 BTTC",
    returnStake:"0 BTTC",
  },
  {
    id:2,
    title:"Solar Energy",
    image:"assets/about/teamImages/purvik.jpeg",
    result:"Approved",
    stake:"5 BTTC",
    returnStake:"0 BTTC",
  },
  {
    id:3,
    title:"Solar Plant",
    image:"assets/about/teamImages/abhishek.png",
    result:"Not Approved",
    stake:"0 BTTC",
    returnStake:"5 BTTC",
  },
  {
    id:4,
    title:"Afforestation",
    image:"assets/about/teamImages/isha.jpeg",
    result:"Approved",
    stake:"5 BTTC",
    returnStake:"0 BTTC",
  },
]

function ProposalDashComponent() {
  const [showModal, setShowModal] = useState(false);
  const [enlargedImageSrc, setEnlargedImageSrc] = useState("0");

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
        <div className="proposalDetails">
        {proposalDashboardData.map((details) => (
          <div key={details.id} className="proposal-company-wrapper">
            <div className="proposal-dash">
              <div className="proposal-dash-info">
                <p className="">
                  {" "}
                  <span className="proposal-dash-label">Sr No.: </span>{" "}
                  <p className="proposal-dash-output-Bg "> {details.id}</p>
                </p>
               <p className=" ">
                  <span className="proposal-dash-label">Title: </span>
                  <p className="proposal-dash-output-Bg proposal-dash-title scroll-bar ">
                    {details.title}
                  </p>
                </p>
                <p className="">
                  <span className="proposal-dash-label">Image:</span>
                  <div
                    className="proposal-dash-output-Bg proposal-dash-image"
                    style={{ width: "fit-content" }}
                  >
                    {" "}
                    <a
                      href="#"
                      onClick={() =>
                        handleImageClick({image: details.image})
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
                </p>
                <p className="">
                  <span className="proposal-dash-label">Result: </span>{" "}
                  <p className="proposal-dash-output-Bg">{details.result}</p>
               </p>
                <p className="">
                  <span className="proposal-dash-label">Stake:</span>{" "}
                  <p className="proposal-dash-output-Bg">{details.stake}</p>
                </p>
                <p className="">
                  <span className="proposal-dash-label">Return Stake:</span>{" "}
                  <p className="proposal-dash-output-Bg">{details.returnStake}</p>
                </p>
                <p className="">
                  <span className="proposal-dash-label">Credit Issue</span>{" "}<br/>
                  <button className=" btn btn-primary">Claim</button>
                </p>
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
        </div>
      </div>
    </>
  );
}

export default ProposalDashComponent;
