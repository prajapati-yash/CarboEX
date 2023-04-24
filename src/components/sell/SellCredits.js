import React, { useState } from "react";
import "../../styles/sell/SellCarbonCredits.css"
import { useAccount } from 'wagmi';
import { ethers } from "ethers";
import { companyInstance } from "../Contracts";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function SellCredits() {
  const navigate = useNavigate();
  const [btnloading, setbtnloading] = useState(false)
  const [credits, setCredits] = useState("0");
  const [price, setPrice] = useState("0"); // define price value here
  const [total, setTotal] = useState(0);
  const [btndisable, setbtndisable] = useState(false);
  const { address } = useAccount();

  const sellingCredits = async () => {
    try {
      if (credits === null || credits <= 0 || price <= 0 || price === null) {
        toast.error('Enter the required details!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        setbtnloading(true)
        setbtndisable(true)

        toast.info('Process is in Progress', {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        const { ethereum } = window;
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          if (!provider) {
            console.log("Metamask is not installed, please install!");
          }
          const con = await companyInstance()
          console.log(credits, ethers.utils.parseEther(price), address);
          const sellCreditsUser = await con.createOrder(credits, ethers.utils.parseEther(price), address)
          await sellCreditsUser.wait();
          setbtndisable(false)
          setbtnloading(false)
          navigate("/user-dashboard")
          return sellCreditsUser;
        }
      }
    } catch (error) {
      setbtndisable(false)
      console.log(error);
      setbtnloading(true)
    }
  }

  const handleCreditsChange = (event) => {
    setCredits(event.target.value);
    // setTotal(event.target.value * price);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
    // setTotal(event.target.value * price);
  };

  useEffect(() => {
    setTotal(credits * price);
  }, [credits, price])


  return (
    <>
      <div className="sellBg">
        <div className="text-center mb-4 mb-sm-5  sellHead">SELL CARBON CREDITS</div>
        <div className="row sellContainerBg justify-content-center">
          <div className="col-md-6">
            <div className="form-group mb-3 mb-sm-4">
              <label htmlFor="credits" className="mb-sm-2 sellLabel">Number of Credits to Sell:</label>
              <input
                type="number"
                className="form-control"
                id="credits"
                value={credits}
                onChange={handleCreditsChange}
              />
            </div>
            <div className="form-group mb-3 mb-sm-4" >
              <label htmlFor="price" className="mb-sm-2 sellLabel">Price per Credit (in ETH):</label>
              <input
                type="number"
                className="form-control"
                id="price"
                value={price}
                onChange={handlePriceChange}
              />
            </div>
            <div className="form-group" >
              <label htmlFor="total" className="mb-sm-2 sellLabel">Total (in ETH):</label>
              <input
                type="number"
                className="form-control"
                id="total"
                value={total}
                readOnly
              />
            </div>

            <button className=" rounded-pill buy-button mt-4 mt-sm-5" disabled={btndisable} onClick={() => sellingCredits()}>
              {btnloading ? (
                <svg
                  className="animate-spin button-spin-svg-pic"
                  version="1.1"
                  id="L9"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  style={{ width: "20%", fill: "#fff" }}
                >
                  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"></path>
                </svg>
              ) : (<>SELL</>)}
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
}

export default SellCredits;
