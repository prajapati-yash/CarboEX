import React, { useEffect } from "react";
import "../../styles/proposal/ProposalOrder.css";
import { ethers } from "ethers";
import { companyInstance } from "../Contracts";
import { useAccount } from 'wagmi';
import { useState } from "react";


function ProposalOrderComponent() {
  const [userOrders, setUserOrders] = useState([]);
  const { address } = useAccount();
  const [isPageLoading, setIsPageLoading] = useState(true);

  // const address = account[1];

  const ordersData = async () => {
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
        const getUserOrId = await con.getUserOrders(address);
        console.log(getUserOrId)


        let arr = []
        for (let i = 0; i < getUserOrId.length; i++) {
          const getUserData = await con.Orderstruct(getUserOrId[i]["_hex"]);
          arr.push(getUserData);
        }

        setUserOrders(arr)
        // console.log(userOrders)
      }
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //   ordersData()
  // }, [])

  useEffect(() => {
    async function fetchData() {
      await ordersData();
      setIsPageLoading(false)
    }
    fetchData()
  }, []);

  // const proposalOrderData = [
  //   {
  //     id: 1,
  //     totalCredits: 10,
  //     pricePerCredit: 10,
  //     totalPrice: 100,
  //     orderDate: "03-02-2023",
  //     create: "04-02-2023",
  //     completeDate: "09-04-2023",
  //   },
  // ]

  return (
    <>
      <div className="orderContainer">
        {/* <div className="POrders-head py-3 py-sm-4 d-flex justify-content-center">
          <p>ORDERS</p>
        </div> */}
        <div className="myProposals-head-title py-sm-4 d-flex justify-content-center">
          <p className="myProposals-head-title-name">ORDERS</p>
        </div>
        <div className="orderDetails">
          {isPageLoading ?
            (
              <div className="BuyPage-box-bg mb-lg-0 mb-sm-4 mb-4 mx-auto align-self-stretch py-5 px-4">
                <div className='BuyPage-content-box row'>
                  <div className="d-flex justify-content-center align-items-center">Loading...</div>
                </div>
              </div>
            ) :
            userOrders.length > 0 ?
              userOrders.map((details, key) => (
                <div key={key} className="proposal-order-wrapper">
                  <div className="proposal-order-dash">
                    <div className="proposal-order-dash-info">
                      {/* <div className="">
                    {" "}
                    <span className="proposal-order-dash-label">Sr No.: </span>{" "}
                    <p className="proposal-order-dash-output-Bg "> {details.id}</p>
                  </div> */}
                      <div className=" ">
                        <span className="proposal-dash-label">Credits: </span>
                        <p className="proposal-order-dash-output-Bg proposal-order-dash-title scroll-bar ">
                          {parseInt(details[1])}
                        </p>
                      </div>

                      <div className="">
                        <span className="proposal-dash-label">Price Per Credit (in ETH): </span>{" "}
                        <p className="proposal-order-dash-output-Bg">{parseInt(details[2]) / Math.pow(10, 18)}</p>
                      </div>
                      <div className="">
                        <span className="proposal-dash-label">Total Price (in ETH):</span>{" "}
                        <p className="proposal-order-dash-output-Bg">{(parseInt(details[2]) / Math.pow(10, 18)) * parseInt(details[1])}</p>
                      </div>
                      <div className="">
                        <span className="proposal-dash-label">Address:</span>{" "}
                        <p className="proposal-order-dash-output-Bg">{details[4]}</p>
                      </div>
                      <div className="">
                        <span className="proposal-dash-label">Status:</span>{" "}
                        <p className="proposal-order-dash-output-Bg">{details[3] ? "true" : "false"}</p>
                      </div>
                      {/* <div className="">
                    <span className="proposal-dash-label">Complete Date:</span>{" "}
                    <p className="proposal-order-dash-output-Bg">{details.completeDate}</p>
                  </div> */}

                      {/* <div className="">
                    <span className="proposal-dash-label">Status:</span>{" "}<br />
                    <button className=" btn btn-success">Active</button>
                  </div> */}
                    </div>
                  </div>
                </div>
              )) :
              (<div className="BuyPage-box-bg mb-lg-0 mb-sm-4 mb-4 mx-auto align-self-stretch py-5 px-4">
                <div className='BuyPage-content-box row'>
                  <div className="d-flex justify-content-center align-items-center">No Orders Made</div>
                </div>
              </div>)}
        </div>
      </div>
      {/* <button onClick={ordersData}>Click</button> */}
    </>
  );
}

export default ProposalOrderComponent;
