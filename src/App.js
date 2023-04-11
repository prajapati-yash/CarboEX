import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Calculator from "./pages/Calculator";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp"
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import BuyCarbonCredits from "./pages/BuyCarbonCredits";
import CertificateValidationProposal from "./pages/CertificateValidationProposal";

import { ethers } from "ethers";
import { useEffect } from "react";
import BecomeMember from "./pages/BecomeMember";
import DAOMemberProposals from "./pages/DAOMemberProposals";
import ProposalDataMain from "./pages/ProposalDataMain";
import SellCarbonCredits from "./pages/SellCarbonCredits";
import ProposalDashboard from "./pages/ProposalDashboard";
import ProposalOrders from "./pages/ProposalOrders";
import MainProposalDashboard from "./pages/MainProposalDashboard";
// import { useState } from "react";


function App() {

  // const [address, setAddress] = useState();
  async function getAddressFromMetaMask() {
    // Check if MetaMask is installed
    if (!window.ethereum) {
      throw new Error("MetaMask is not installed");
    }

    // Request access to the user's accounts
    await window.ethereum.request({ method: "eth_requestAccounts" });

    // Create an Ethers.js provider with MetaMask as the signer
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Get the user's address
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    // setAddress(address);
    return address;
  }

  useEffect(() => {
    getAddressFromMetaMask();
  }, []);
  return (
    <>
      {/* <h1 className="mt-5 text-center">Shree Ganeshay Namah</h1> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/calculator/*' element={<Calculator />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/buy-credits' element={<BuyCarbonCredits />} />
          <Route path='/sell-credits' element={<SellCarbonCredits />} />
          <Route path='/certificate-validation-proposal' element={<CertificateValidationProposal />} />
          <Route path='/*' element={<Home />} />
          <Route path="/becomeMember" element={<BecomeMember />} />
          <Route path="/daoMemberProposals" element={<DAOMemberProposals />} />
          <Route path="/proposalData" element={<ProposalDataMain />} />
          <Route path="/proposal-dashboard" element={<ProposalDashboard />} />
          <Route path="/proposal-orders" element={<ProposalOrders />} />
          <Route path="/user-dashboard" element={<MainProposalDashboard />} />
          <Route path="/user-dashboard/*" element={<MainProposalDashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter >
      {/* <Chat
        account={address} //user address             
        supportAddress="0xF80a1e20826EED14146d08f88E5557805d439d5f" //support address          
      /> */}
    </>


  );
}

export default App;
