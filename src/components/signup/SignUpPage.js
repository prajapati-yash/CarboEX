import React from "react";
import { useState } from "react";
import "../../styles/signup/Signup.css";

function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    username: "",
    companyName: "",
    email: "",
    country: "",
    image:null
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
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
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                  onChange={handleChange}
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
                      onChange={handleChange}
                    />
                  </div>
              </div> 
              </div>
              <div className="text-center">
                <button type="submit" className="btn rounded-pill my-2 signUpBtn">
                  Create
                </button>
              </div>
            </form>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
