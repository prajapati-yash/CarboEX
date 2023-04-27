import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import { companyInstance } from "./components/Contracts";
import { useAccount } from 'wagmi';
import { useNavigate } from 'react-router-dom';
import TraditionalBodyCalc from "./components/calculator/bodycalc/TraditionalBodyCalc";
// import { useState } from "react";


function App() {
  const { address } = useAccount();
  // const navigate = useNavigate()
  const verifyUserAccount = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        if (!provider) {
          console.log("Metamask is not installed, please install!");
        }
        const con = await companyInstance();
        const verifyTx = await con.iscompaniesAdd(address)
        // result = verifyTx
        console.log(verifyTx)
        // console.log(con);
        return verifyTx;
      }
    } catch (error) {
      console.log(error);
    }
  }
  // {
  //   useEffect(() => {
  //     if (!verifyUserAccount()) {
  //       return navigate('/about')
  //     }
  //   })
  // }

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
          <Route path='/calculator/home' element={<Calculator />} />
          <Route path='/calculator/*' element={<Calculator />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/buy-carbon-credits' element={<BuyCarbonCredits />} />
          <Route path='/sell-carbon-credits' element={<SellCarbonCredits />} />
          <Route path='/certificate-validation-proposal' element={<CertificateValidationProposal />} />
          <Route path='/*' element={<Home />} />
          <Route path="/become-member" element={<BecomeMember />} />
          <Route path="/dao-member-proposals" element={<DAOMemberProposals />} />
          <Route path="/proposalData" element={<ProposalDataMain />} />
          <Route path="/proposal-dashboard" element={<ProposalDashboard />} />
          <Route path="/proposal-orders" element={<ProposalOrders />} />
          <Route path="/user-dashboard" element={<MainProposalDashboard />} />
          <Route path="/user-dashboard/*" element={<MainProposalDashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter >
    </>
  );
}

export default App;
