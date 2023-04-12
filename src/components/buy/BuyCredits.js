import React from "react";
import "../../styles/buy/BuyCarbonCredits.css";

const companyData = [
  {
    id: 1,
    name: "Tata Power Solar",
    description: "The Carbon Trading Platform Using Blockchain is a decentralised application that aims to facilitate carbon credit trading by creating an unchangeable and tamper-proof record of transactions. It will enable buyers and sellers of carbon credits to conduct safe, open transactions.",
    publicAddress: "Public Address for Company A",
    credits: "9",
    price: "900",
  },
  {
    id: 2,
    name: "Renewable Energy",
    description: "Description for Company B",
    publicAddress: "Public Address for Company B",
    credits: "5",
    price: "500",
  },
  {
    id: 3,
    name: "Wind Energy Association",
    description: "Description for Company B",
    publicAddress: "Public Address for Company B",
    credits: "8",
    price: "800",
  },
  {
    id: 4,
    name: "Power Plant Association",
    description: "Description for Company B",
    publicAddress: "Public Address for Company B",
    credits: "10",
    price: "1000",
  },
];

function BuyCredits() {
  return (
    <>
      <div className="buyBg">
        <div className="buyHead text-center" >BUY</div>
        <div className="companies">
          {companyData.map((company) => (
            <div key={company.id} className="company-wrapper">
              <div className="company ">
                <div className="company-info">

                  <p className="company-name scrollEffect"> <span className="companyInfoLabel"> Company Name: </span> <p className="allBuyBg " > {company.name}</p></p>
                  <p className=" ">
                    <span className="companyInfoLabel"> Descirption:</span>
                    <p className="allBuyBg company-description scroll-bar ">{company.description}</p>
                  </p>
                  <p className="company-public-address scrollEffect">
                    <span className="companyInfoLabel">Public Address:</span>
                    <p className="allBuyBg">{company.publicAddress}</p>
                  </p>
                  <p className="company-credits">
                    <span className="companyInfoLabel"> Credits: </span> <p className="allBuyBg">{company.credits}</p>
                  </p>
                  <p className="company-price">
                    <span className="companyInfoLabel">Price:</span> <p className="allBuyBg"> {company.price}</p>
                  </p>
                  <button className=" rounded-pill buy-button mt-3">Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BuyCredits;
