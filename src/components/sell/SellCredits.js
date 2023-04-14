import React, { useState } from "react";
import "../../styles/sell/SellCarbonCredits.css"
import { useAccount } from 'wagmi';
import { ethers } from "ethers";
import { companyInstance } from "../Contracts";
import { useEffect } from "react";

function SellCredits() {
  const [credits, setCredits] = useState();
  const [price, setPrice] = useState(); // define price value here
  const [total, setTotal] = useState(0);
  const { address } = useAccount();

  const sellingCredits = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        if (!provider) {
          console.log("Metamask is not installed, please install!");
        }
        const con = await companyInstance();
        const sellCreditsUser = await con.createOrder(credits, price, address)
        // console.log(verifyUser)
        return sellCreditsUser;
      }
    } catch (error) {
      console.log(error);
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
        <div className="text-center mb-4 mb-sm-5  sellHead"> Sell Carbon Credits</div>
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
              <label htmlFor="price" className="mb-sm-2 sellLabel">Price per Credit:</label>
              <input
                type="number"
                className="form-control"
                id="price"
                value={price}
                onChange={handlePriceChange}
              />
            </div>
            <div className="form-group" >
              <label htmlFor="total" className="mb-sm-2 sellLabel">Total:</label>
              <input
                type="number"
                className="form-control"
                id="total"
                value={total}
                readOnly
              />
            </div>

            <button className=" rounded-pill buy-button mt-4 mt-sm-5" onClick={() => sellingCredits()}>Sell</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellCredits;
