import React, { useState, useEffect } from "react";
import "../../styles/buy/BuyCarbonCredits.css";
import { ethers } from "ethers";
import { companyInstance } from "../Contracts";
import { useAccount } from "wagmi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function BuyCredits() {
  const navigate = useNavigate();
  const [userDetailsById, setUserDetailsById] = useState([]);
  const [count, setCount] = useState(1);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [loadingIndex, setLoadingIndex] = useState(null);
  const [btndisable, setbtndisable] = useState(false);
  const [btnloading, setbtnloading] = useState(false);
  const [showText, setShowText] = useState(false);

  const handleMouseEnter1 = () => {
    setShowText(true);
  };
  const handleMouseLeave1 = () => {
    setShowText(false);
  };

  const address = useAccount();

  const sellingCredits = async () => {
    // console.log("first");
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        if (!provider) {
          console.log("Metamask is not installed, please install!");
        }
        const con = await companyInstance();
        // console.log(address)
        const getUserOrCount = await con.orderCount();
        const countOfUserOrder = parseInt(getUserOrCount, 16);
        console.log(countOfUserOrder);

        let arr = [];
        for (let i = 1; i <= countOfUserOrder; i++) {
          const getUserOrDetail = await con.Orderstruct(i);
          if (!getUserOrDetail[3]) {
            arr.push(getUserOrDetail);
          } else {
            // console.log(getUserOrDetail);
          }
          // console.log(getUserOrDetail)
        }
        setUserDetailsById(arr);
        // setbtnloading(false);
      }
    } catch (error) {
      console.log(error);
      setbtnloading(false);
    }
  };

  useEffect(() => {
    async function fetchData() {
      await sellingCredits();
      setIsPageLoading(false)
    }
    fetchData()
  }, []);

  const buyCreditsFunc = async (id, crd, prc, key) => {
    try {
<<<<<<< HEAD
      setLoadingIndex(key)
      setbtndisable(true)
      // toast.info('Process is in Progress', {
      //   position: "top-left",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
      setbtnloading(true)
=======
      setbtndisable(true);
      toast.info("Process is in Progress", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setbtnloading(true);
>>>>>>> 31d9783ec604753e18d59cfc8b2eba21d1854d95
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        if (!provider) {
          console.log("Metamask is not installed, please install!");
        }
        const con = await companyInstance();
        // console.log(id)
        console.log(id, crd, prc);
        const buyCredits = await con.buycredit(id, {
          value: String(crd * prc),
        });
        await buyCredits.wait();
        setCount((prev) => prev + 1);
        // sellingCredits()
        setbtnloading(false);
        setbtndisable(false);
        // return buyCredits;
        navigate("/user-dashboard");
      }
    } catch (error) {
<<<<<<< HEAD
      setbtnloading(false)
      setbtndisable(false)
      console.log(error)
      console.log(error.reason);
      const ErrorReason = error.reason;
      console.log(ErrorReason)
      toast.error(`Error : ${ErrorReason}`, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
=======
      console.log(error);
      setbtnloading(false);
      setbtndisable(false);
>>>>>>> 31d9783ec604753e18d59cfc8b2eba21d1854d95
    }
  };

  return (
    <>
      <div className="buyBg">
        <div className="pb-5"></div>
        <div className=" text-dark text-center d-flex justify-content-center align-items-center mx-auto">
         <div className="buy-head-text bg-white"> BUY CARBON CREDITS</div> &nbsp;&nbsp;{" "}
          <i
            className="fas fa-info-circle buy-head-info"
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          >
            {" "}
          </i>
        </div>
        {showText && (
            <div className="text-center d-flex justify-content-center align-items-center mb-3 mb-sm-4 buy-sub-text">
              Here you can see the list of all the proposals made by sellers offering carbon credits for sale.  {" "}
            </div>
          )}
        <div className="companies">
<<<<<<< HEAD
          {isPageLoading ?
            (
              <div className="BuyPage-box-bg mb-lg-0 mb-sm-4 mb-4 mx-auto align-self-stretch py-5 px-4">
                <div className='BuyPage-content-box row'>
                  <div className="d-flex justify-content-center align-items-center">Loading...</div>
                </div>
              </div>
            ) :
            userDetailsById.length > 0 ?
              // count &&
              userDetailsById.map((company, key) => (
                <div key={key} className="company-wrapper">
                  <div className="company ">
                    <div className="company-info">
                      <p className="company-public-address scrollEffect">
                        <span className="companyInfoLabel">Seller Address:</span>
                        <p className="allBuyBg  companyAddressBg">{company[4]}</p>
                      </p>
                      <p className="company-credits">
                        <span className="companyInfoLabel"> Credits: </span>{" "}
                        <p className="allBuyBg">
                          {parseInt(company[1]._hex, 16)}
                        </p>
                      </p>
                      <p className="company-price">
                        <span className="companyInfoLabel">
                          Price per credits (in ETH):
                        </span>{" "}
                        <p className="allBuyBg">
                          {" "}
                          {parseInt(company[2]._hex, 16) / Math.pow(10, 18)}
                        </p>
                      </p>
                      <p className="company-price">
                        <span className="companyInfoLabel">
                          Total (in ETH):
                        </span>{" "}
                        <p className="allBuyBg">
                          {" "}
                          {(parseInt(company[2]._hex, 16) / Math.pow(10, 18)) * parseInt(company[1]._hex, 16)}
                        </p>
                      </p>

                      <button
                        className=" rounded-pill buy-button mt-3"
                        key={key}
                        disabled={btndisable}
                        onClick={() =>
                          buyCreditsFunc(company[0], parseInt(company[1]._hex, 16), parseInt(company[2]._hex, 16), key)
                        }
                      >
                        {btnloading && loadingIndex === key ? (
                          <svg
                            className="animate-spin button-spin-svg-pic"
                            version="1.1"
                            id="L9"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 100 100"
                            style={{ fill: "#fff" }}
                          >
                            <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"></path>
                          </svg>
                        ) : (
                          <>BUY</>
                        )}
                      </button>
                      <ToastContainer />
                    </div>
                  </div>
                </div>
              )) :
              (<div className="BuyPage-box-bg mb-lg-0 mb-sm-4 mb-4 mx-auto align-self-stretch py-5 px-4">
                <div className='BuyPage-content-box row'>
                  <div className="d-flex justify-content-center align-items-center">No Proposals to buy Carbon Credits</div>
                </div>
              </div>)
          }
=======
          {userDetailsById.length > 0 ? (
            // count &&
            userDetailsById.map((company, key) => (
              <div key={key} className="company-wrapper">
                <div className="company ">
                  <div className="company-info">
                    {/* <p className="company-name scrollEffect"> <span className="companyInfoLabel"> Company Name: </span> <p className="allBuyBg " > {company.name}</p></p>
                  <p className=" ">
                    <span className="companyInfoLabel"> Descirption:</span>
                    <p className="allBuyBg company-description scroll-bar ">{company.description}</p>
                  </p> */}
                    <p className="company-public-address scrollEffect">
                      <span className="companyInfoLabel">Seller Address:</span>
                      <p className="allBuyBg  companyAddressBg">{company[4]}</p>
                    </p>
                    <p className="company-credits">
                      <span className="companyInfoLabel"> Credits: </span>{" "}
                      <p className="allBuyBg">
                        {parseInt(company[1]._hex, 16)}
                      </p>
                    </p>
                    <p className="company-price">
                      <span className="companyInfoLabel">
                        Price per credits (in ETH):
                      </span>{" "}
                      <p className="allBuyBg">
                        {" "}
                        {parseInt(company[2]._hex, 16) / Math.pow(10, 18)}
                      </p>
                    </p>
                    <p className="company-price">
                      <span className="companyInfoLabel">Total (in ETH):</span>{" "}
                      <p className="allBuyBg">
                        {" "}
                        {/* {parseInt(company[2]._hex, 16)} */}
                        {(parseInt(company[2]._hex, 16) / Math.pow(10, 18)) *
                          parseInt(company[1]._hex, 16)}
                      </p>
                    </p>

                    <button
                      className=" rounded-pill buy-button mt-3"
                      disabled={btndisable}
                      onClick={() =>
                        buyCreditsFunc(
                          company[0],
                          parseInt(company[1]._hex, 16),
                          parseInt(company[2]._hex, 16)
                        )
                      }
                    >
                      {btnloading ? (
                        <svg
                          className="animate-spin button-spin-svg-pic"
                          version="1.1"
                          id="L9"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 100 100"
                          style={{ fill: "#fff" }}
                        >
                          <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"></path>
                        </svg>
                      ) : (
                        <>BUY</>
                      )}
                    </button>
                    <ToastContainer />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="BuyPage-box-bg mb-lg-0 mb-sm-4 mb-4 mx-auto align-self-stretch py-5 px-4">
              <div className="BuyPage-content-box row">
                <div className="d-flex justify-content-center align-items-center">
                  No Proposals to buy Carbon Credits
                </div>
              </div>
            </div>
          )}
>>>>>>> 31d9783ec604753e18d59cfc8b2eba21d1854d95
        </div>
      </div>
      {/* <button onClick={sellingCredits}>click</button> */}
    </>
  );
}

export default BuyCredits;
