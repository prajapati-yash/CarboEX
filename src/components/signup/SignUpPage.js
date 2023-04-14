import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import "../../styles/signup/Signup.css";
import { companyInstance } from "../Contracts";
import { useNavigate } from "react-router-dom";
import { Web3Storage } from "web3.storage";

function SignUpPage() {
  const [btnloading,setbtnloading]=useState(false)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: null,
    username: null,
    companyName: null,
    email: null,
    country: null,
    image: null,
  });

  const client = new Web3Storage({
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEEzNmM2ODkwYTNhZTJEMDRjZkMwNjNERjJjNjliNjY2Y0JlRkY4ZTYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODEzMTIxMDk4OTksIm5hbWUiOiJDYXJib0VYIn0.aR-kLKB8sNL2GAKAwq-iaBI0hoxAkxIW1hnJMsOLzC8",
    // token: process.env.REACT_APP_LOGO_IMG_UPLOAD_TOKEN,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const uploadImage = async () => {
    const fileInput = document.querySelector('input[type="file"]');
    // Pack files into a CAR and send to web3.storage
    const rootCid = await client.put(fileInput.files, {
      name: formData.image.name,
      maxRetries: 3,
    });
    // console.log(img);
    const res = await client.get(rootCid); // Web3Response
    const files = await res.files(formData.image); // Web3File[]
    for (const file of files) {
      // setCid(file.cid)
      console.log(file.cid);
      return file.cid;
    }
  };


  const createUserAccount = async () => {
 
    const c = await uploadImage();
    const cids = c;
    try {
      setbtnloading(true)
      const { ethereum } = window; 
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        if (!provider) {
          console.log("Metamask is not installed, please install!");
        }
        const con = await companyInstance();
        // if (formData.image) {
        //   await uploadImage();
        // }
        console.log(cids);
        const tx = await con.setUser(formData.firstName, formData.username, formData.email, formData.companyName, formData.country, cids);

        console.log(tx)
        await tx.wait();
        setbtnloading(false)
        navigate("/user-dashboard")
        console.log(con);
      }
    } catch (error) {
      console.log(error);
      setbtnloading(false)
    }
  }

  return (
    <>
      <div className="signUpBg">
        <div className="signup-form-Bg ">
          <div className="signup-head text-center mt-3 mt-sm-0">CarboEx</div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="row mt-5 mb-4">
                <div className="col-md-6 mb-4 mb-md-0">
                  <div className="form-group">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="form-control signUpFormInput "
                      placeholder="Full Name"
                      value={formData.firstName}
                      onChange={(e) => { setFormData({ ...formData, firstName: e.target.value }); }}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="form-control signUpFormInput"
                      placeholder="Username"
                      value={formData.username}
                      onChange={(e) => { setFormData({ ...formData, username: e.target.value }); }}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-6 mb-4 mb-md-0">
                  <div className="form-group">
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      className=" signUpFormInput form-control"
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={(e) => { setFormData({ ...formData, companyName: e.target.value }); }}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control signUpFormInput"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => { setFormData({ ...formData, email: e.target.value }); }}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-6 mb-4 mb-md-0">
                  <div className="form-group">
                    <select
                      id="country"
                      name="country"
                      className="form-control signUpFormInput"
                      value={formData.country}
                      onChange={(e) => { setFormData({ ...formData, country: e.target.value }); }}
                      required
                    >
                      <option value="">Country</option>
                      <option value="USA">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="Australia">Australia</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    {/* <input
                      type="file"
                      id="image"
                      name="image"
                      className="signUpFormInput chooseFileBtn form-control-file-label "
                      accept="image/*"
                      onChange={handleChange}
                    /> */}

                    <input
                      type="file"
                      className="form-control signUpFormInput chooseFileBtn form-control-file-label"
                      id="image"
                      // value={formData.image}
                      onChange={(e) => { setFormData({ ...formData, image: e.target.value }); }}
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn rounded-pill my-2 signUpBtn" onClick={createUserAccount}>
                 
                  {btnloading?(
                    <svg
                    className="animate-spin button-spin-svg-pic"
                    version="1.1"
                    id="L9"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                  >
                    <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"></path>
                  </svg>
                  ):(<>Create</>)}
                </button>
              </div>
            </form>{" "}
          </div>
        </div>
      </div>
      {/* <button onClick={userSignup}>Click to check instance</button> */}
    </>
  );
}

export default SignUpPage;
