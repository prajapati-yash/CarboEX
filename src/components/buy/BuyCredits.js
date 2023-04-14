import React, { useState } from "react";
import "../../styles/buy/BuyCarbonCredits.css";
import { ethers } from "ethers";
import { companyInstance } from "../Contracts";
import { useAccount } from 'wagmi';
import { useEffect } from "react";


function BuyCredits() {
  const [userDetailsById, setUserDetailsById] = useState([]);

  // const companyData = [
  //   {
  //     id: 1,
  //     name: "Tata Power Solar",
  //     description: "The Carbon Trading Platform Using Blockchain is a decentralised application that aims to facilitate carbon credit trading by creating an unchangeable and tamper-proof record of transactions. It will enable buyers and sellers of carbon credits to conduct safe, open transactions.",
  //     publicAddress: "Public Address for Company A",
  //     credits: "9",
  //     price: "900",
  //   },
  // ];

  const address = useAccount();

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
        // console.log(address)
        const getUserOrCount = await con.orderCount();
        const countOfUserOrder = parseInt(getUserOrCount, 16)
        console.log(countOfUserOrder)

        let arr = []
        for (let i = 1; i <= countOfUserOrder; i++) {
          const getUserOrDetail = await con.Orderstruct(i);
          arr.push(getUserOrDetail);
          console.log(getUserOrDetail)
        }
        setUserDetailsById(arr)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    sellingCredits()
  }, [])


  const buyCreditsFunc = async (id) => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        if (!provider) {
          console.log("Metamask is not installed, please install!");
        }
        const con = await companyInstance();
        const buyCredits = await con.buycredit(id, { value: id.credit * id.price })
        console.log(buyCredits);
        return buyCredits
      }
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <>
      <div className="buyBg">
        <div className="buyHead text-center">BUY</div>
        <div className="companies">
          {userDetailsById.map((company, key) => (
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
                    <span className="companyInfoLabel"> Credits: </span> <p className="allBuyBg">{parseInt(company[1]._hex, 16)}</p>
                  </p>
                  <p className="company-price">
                    <span className="companyInfoLabel">Price per credits:</span> <p className="allBuyBg"> {parseInt(company[2]._hex, 16)}</p>
                  </p>
                  <button className=" rounded-pill buy-button mt-3" onClick={() => buyCreditsFunc((company[0]))}>Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <button onClick={sellingCredits}>click</button> */}
    </>
  );
}

export default BuyCredits;
