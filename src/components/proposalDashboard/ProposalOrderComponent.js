import React from "react";
import "../../styles/proposal/ProposalOrder.css";
import { ethers } from "ethers";
import { companyInstance } from "../Contracts";
import { useAccount } from 'wagmi';
import { useState } from "react";


function ProposalOrderComponent() {
  const [userOrders, setUserOrders] = useState([]);
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
        console.log(address)
        const getUserOrId = await con.OrderstructId(address);
        console.log(getUserOrId)
        return getUserOrId
        // let arr = []
        // for (let i = 0; i < getUserID.length; i++) {
        //   const getUserData = await con.getProposal(getUserID[i]._hex);
        //   arr.push(getUserData);
        //   console.log(getUserData)
        // }
        // setUserProp(arr);
        // setAllData(getUserID);
        // return getUserID
      }
    } catch (error) {
      console.log(error);
    }
  }

  const proposalOrderData = [
    {
      id: 1,
      totalCredits: 10,
      pricePerCredit: 10,
      totalPrice: 100,
      orderDate: "03-02-2023",
      create: "04-02-2023",
      completeDate: "09-04-2023",
    },
  ]

  return (
    <>
      <div className="orderContainer">
        <div className="POrders-head py-3 py-sm-4 d-flex justify-content-center">
          <p>ORDERS</p>
        </div>
        <div className="orderDetails">
          {proposalOrderData.map((details) => (
            <div key={details.id} className="proposal-order-wrapper">
              <div className="proposal-order-dash">
                <div className="proposal-order-dash-info">
                  <div className="">
                    {" "}
                    <span className="proposal-order-dash-label">Sr No.: </span>{" "}
                    <p className="proposal-order-dash-output-Bg "> {details.id}</p>
                  </div>
                  <div className=" ">
                    <span className="proposal-dash-label">Total Credits: </span>
                    <p className="proposal-order-dash-output-Bg proposal-order-dash-title scroll-bar ">
                      {details.totalCredits}
                    </p>
                  </div>

                  <div className="">
                    <span className="proposal-dash-label">Price Per Credit: </span>{" "}
                    <p className="proposal-order-dash-output-Bg">{details.pricePerCredit}</p>
                  </div>
                  <div className="">
                    <span className="proposal-dash-label">Total Price:</span>{" "}
                    <p className="proposal-order-dash-output-Bg">{details.totalPrice}</p>
                  </div>
                  <div className="">
                    <span className="proposal-dash-label">Order Date:</span>{" "}
                    <p className="proposal-order-dash-output-Bg">{details.orderDate}</p>
                  </div>
                  <div className="">
                    <span className="proposal-dash-label">Create:</span>{" "}
                    <p className="proposal-order-dash-output-Bg">{details.create}</p>
                  </div>
                  <div className="">
                    <span className="proposal-dash-label">Complete Date:</span>{" "}
                    <p className="proposal-order-dash-output-Bg">{details.completeDate}</p>
                  </div>

                  <div className="">
                    <span className="proposal-dash-label">Status:</span>{" "}<br />
                    <button className=" btn btn-success">Active</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => sellingCredits()}>Click</button>
    </>
  );
}

export default ProposalOrderComponent;
