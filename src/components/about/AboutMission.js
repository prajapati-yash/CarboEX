import React from "react";
import "../../styles/about/About.css";

function AboutMission() {
  return (
    <div>
      <div className="main-bg align-items-center">
        <div className="missionBg d-flex align-items-center">
          <div className="d-flex all-mission-content align-items-center ">
            <div className="col-md-6 mission-content mx-auto d-flex align-items-center justify-content-center ">
              At CarboEx, our mission is to provide a secure and transparent
              carbon credit trading platform for buyers and sellers, underpinned
              by blockchain technology and Renewable Energy (RE) certificates
              verified by our Decentralized Autonomous Organization (DAO). Our
              platform uses our own tokens, which are generated and used for
              carbon credit trading, to increase efficiency and accessibility
              while reducing costs.
            </div>
            <div className="col-md-3 mission-head my-4 my-md-5 d-flex align-items-center">
              <div className="for-vm-desktop">
                {" "}
                Our
                <br /> Mission
              </div>
              <div className="for-vm-mob"> Our Mission </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMission;
