import React from "react";
import "../../styles/proposal/ProposalOrder.css";

const proposalOrderData=[
  {
    id:1,
    totalCredits:10,
    pricePerCredit:10,
    totalPrice:100,
    orderDate:"03-02-2023",
    create:"04-02-2023",
    completeDate:"09-04-2023",
  },
  {
    id:2,
    totalCredits:10,
    pricePerCredit:10,
    totalPrice:100,
    orderDate:"03-02-2023",
    create:"04-02-2023",
    completeDate:"09-04-2023",
  },
  {
    id:3,
    totalCredits:10,
    pricePerCredit:10,
    totalPrice:100,
    orderDate:"03-02-2023",
    create:"04-02-2023",
    completeDate:"09-04-2023",
  },
  {
    id:4,
    totalCredits:10,
    pricePerCredit:10,
    totalPrice:100,
    orderDate:"03-02-2023",
    create:"04-02-2023",
    completeDate:"09-04-2023",
  },
  
]

function ProposalOrderComponent() {
  return (
    <>
      <div className="orderContainer">
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
                  <span className="proposal-dash-label">Status:</span>{" "}<br/>
                  <button className=" btn btn-success">Active</button>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProposalOrderComponent;
