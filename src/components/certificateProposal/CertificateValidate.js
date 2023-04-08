import React from "react";
import { useState } from "react";
import "../../styles/certificate/CertificateValidation.css"

function CertificateValidate() {
  const [certificate, setCertificate] = useState("");
  const [domain, setDomain] = useState("");
  const [emission, setEmission] = useState("");
  const [proposol, setProposol] = useState("");

  const handleCertificateChange = (e) => {
    setCertificate(e.target.value);
  };

  const handleDomainChange = (e) => {
    setDomain(e.target.value);
  };

  const handleEmissionChange = (e) => {
    setEmission(e.target.value);
  };

  const handleProposolChange = (e) => {
    setProposol(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      certificate,
      domain,
      emission,
      proposol,
    });
  };

  return (
    <>
      <div className="certiPageBg">
        <div className="certiBg">
          <div className="text-center certiHead">Certificate Validation</div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="certificate" className="form-label certiLabel">
                Upload your certificate
              </label>
              <input
                type="file"
                className="form-control certiInput"
                id="certificate"
                onChange={handleCertificateChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="domain" className="form-label certiLabel">
                Select your domain:
              </label>
              <select
                className="form-select certiInput"
                id="domain"
                onChange={handleDomainChange}
                value={domain}
              >
                <option value="">Select domain</option>
                <option value="Emission">Emission</option>
                <option value="Offset">Offset</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="emission" className="form-label certiLabel">
                Enter the value of emission
              </label>
              <input
                type="text"
                className="form-control certiInput emissionInput"
                placeholder="tons"
                id="emission"
                onChange={handleEmissionChange}
                value={emission}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="proposol" className="form-label">
                <span className="proposalText"> For Proposol </span> <br/> <span className="detailsText">Enter your details</span>
              </label>
              <textarea
                className="form-control certiInput"
                placeholder="Description"
                id="proposol"
                rows="3"
                onChange={handleProposolChange}
                value={proposol}
              ></textarea>
            </div>
            <button type="submit" className=" rounded-pill certiSubmit mt-3">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CertificateValidate;
