import React, { useState } from "react";
import "../../styles/sell/SellCarbonCredits.css"

function SellCredits() {
  const [credits, setCredits] = useState();
  const price = 10; // define price value here
  const [total, setTotal] = useState(0);

  const handleCreditsChange = (event) => {
    setCredits(event.target.value);
    setTotal(event.target.value * price);
  };

  return (
    <>
      <div className="sellBg">
        <div className="text-center mb-4 mb-sm-5  sellHead"> Sell Carbon Credits</div>
        <div className="row sellContainerBg justify-content-center">
          <div className="col-md-6">
            <form>
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
                  readOnly
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

              <button className=" rounded-pill buy-button mt-4 mt-sm-5">Sell</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellCredits;
