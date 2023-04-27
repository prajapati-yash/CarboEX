import React from "react";
import "../../styles/home/HowItWorks.css";
import HomeStrings from "../../utils/strings/HomeStrings";

const howWorksContent = [
  {
    head: "Connect your wallet:",
    content: "Connecting your wallet is the first step to using CarboEx.",
  },
  {
    head: "Get started:",
    content:
      "Click on the 'Get Started' button to be redirected to the sign-up page.",
  },
  {
    head: "Sign Up:",
    content:
      "Fill all the required information and click on 'Submit' button to be redirected to the user dashboard",
  },
  {
    head: "User dashboard:",
    content:
      "User dashboard provides access to proposals, orders, credits, and other important information.",
  },
  {
    head: "Become a DAO member:",
    content:
      "Become a DAO member to make a proposal or validate a certificate of carbon emission and offset.",
  },
  {
    head: "Buy and sell carbon credits:",
    content:
      "DAO members can buy and sell carbon credits by clicking the 'Buy' or 'Sell' buttons.",
  },
];

function HomeAbout() {
  return (
    <div className="">
      {/* CSS of "main-div" class and "boxContent" is inside styles -> home -> HomeAbout.css folder" */}
      <div className="main-div">
        <div className="boxContent container-fluid px-4 px-md-5 pb-5">
          {/* <div className="about-head py-3 py-sm-4 d-flex  justify-content-center">
                        <p>About Project</p>
                   </div>
                    <div className='d-lg-flex row mx-xl-5 all-boxes align-items-center about-text-content justify-content-around '>
                        {HomeStrings.aboutBoxContent.map((item, index) => (
                            <div className=" box-bg mb-lg-0 mb-sm-4 mb-4 align-self-stretch py-5 px-4" key={index}>{item.boxContent}</div>
                        ))}
                    </div> */}

          <div className="work-head py-2">
            <p className=" d-flex justify-content-center">How CarboEx Works?</p>
          </div>

          <div className="main-works-box d-flex">
            <div className="text-center work-instruction-div">
              {" "}
              <div className="work-instruction"> Instructions </div>
            </div>

            <div className="how-works-content align-self-stretch">
              <div>
                {howWorksContent.map((item, key) => (
                  <div className="how-works-mono-content mb-3 d-flex " index={key}>
                    <div className="pt-1"><i class="fa-solid fa-arrow-right"></i> </div> &nbsp; &nbsp; <div><span className="how-works-head">{item.head}</span> &nbsp;
                    <span className="how-works-sub-content">
                      {item.content}
                    </span></div>
                  </div>
                ))}
              </div>
              {/* <div>
              <span>Get started:</span>
              <span>
                {" "}
                Once you've connected your wallet, click on the "Get Started"
                button. If you're already registered, you'll be redirected to
                your user dashboard. If you're not registered yet, you'll be
                redirected to the sign-up page.
              </span>
            </div>
            <div>
              <span>User dashboard:</span>
              <span>
                {" "}
                In your user dashboard, you'll be able to see proposals made by
                you and orders. You'll also be able to see all your credits and
                other important information.
              </span>
            </div>
            <div>
              {" "}
              <span>Become a DAO member:</span>{" "}
              <span>
                To make a proposal or validate a certificate of carbon emission
                and offset, you'll need to become a DAO member. You can do this
                by clicking on the "Become a DAO Member" button and following
                the instructions on the screen.
              </span>
            </div>

            <div>
              <span>Buy and sell carbon credits:</span>
              <span>
                {" "}
                Once you're a DAO member, you'll be eligible to buy and sell
                carbon credits. You can do this by clicking on the "Buy Credits"
                or "Sell Credits" buttons and following the instructions on the
                screen.
              </span>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
