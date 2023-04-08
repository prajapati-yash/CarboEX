import React from "react";
import "../../styles/about/About.css";

function AboutVision() {
  return (
    <>
      <div className="">
        <div className="visionBg d-flex align-items-center">
          <div className="d-flex all-vision-content align-items-center">
            <div className=" col-md-3 d-flex vision-head my-4 my-md-5 align-items-center">
              <div className="for-vm-desktop">
                {" "}
                Our
                <br /> Vision{" "}
              </div>
              <div className="for-vm-mob"> Our Vision </div>
            </div>
            <div className="col-md-6 vision-content d-flex align-items-center justify-content-center">
              Our vision at CarboEx is to build a sustainable future by making
              businesses and governments accountable for their carbon footprint.
              Our ultimate goal is to achieve net-zero emissions, where our
              platform plays a key role in reducing the carbon footprint of
              society. We strive to be a leader in the carbon credit trading
              industry, promoting social responsibility and sustainability to
              drive a positive impact on the planet for future generations.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutVision;
