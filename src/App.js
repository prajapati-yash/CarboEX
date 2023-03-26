import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Calculator from "./pages/Calculator";
import Contact from "./pages/Contact";
// import LandingCalcMain from "./components/calculator/maincalc/LandingCalcMain";
import CleanEnergyCalc from './components/calculator/bodycalc/CleanEnergyCalc'
import FuelToCo2Calc from './components/calculator/bodycalc/FuelToCo2Calc'
import CarTravelCalc from './components/calculator/bodycalc/CarTravelCalc'
import FlightCalc from './components/calculator/bodycalc/FlightCalc'
import MotorBikeMain from './components/calculator/maincalc/MotorBikeMain'
import PublicTransitMain from "./components/calculator/maincalc/PublicTransitMain";
import TraditionalMain from "./components/calculator/maincalc/TraditionalMain";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import StoreCalculation from "./components/calculator/storecalculation/StoreCalculation";
import CalcResult from "./components/calculator/maincalc/CalcResult";
import { Chat } from "@pushprotocol/uiweb";
import { ethers } from "ethers";
import { useEffect, useState } from "react";


function App() {

  const [address, setAddress] = useState();
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
    setAddress(address);
    return address;
  }

  useEffect(() => {
    getAddressFromMetaMask();
  }, []);
  return (
    <>
      {/* <h1 className="mt-5 text-center">Shree Ganeshay Namah</h1> */}
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/calculator/traditionalenergy' element={<TraditionalMain />}></Route>
          <Route path='/calculator/publictransit' element={<PublicTransitMain />}></Route>
          {/* <Route path='/calculator/cleanenergy' element={<CleanEnergyCalc />}></Route >
          <Route path='/calculator/fueltoco2' element={<FuelToCo2Calc />}></Route >
          <Route path='/calculator/cartravel' element={<CarTravelCalc />}></Route >
          <Route path='/calculator/flight' element={<FlightCalc />}></Route >
          <Route path='/calculator/motorbike' element={<MotorBikeMain />}></Route >*/}
          <Route path='/calculator/*' element={<TraditionalMain />}></Route>
          <Route path='/calculator/result' element={<CalcResult />}></Route>
          {/* <Route path='/calculator/*' element={<LandingCalc />}></Route> */}
          <Route path='/*' element={<Home />} />
        </Routes>
      </BrowserRouter >
      <Chat
        account={address} //user address             
        supportAddress="0xF80a1e20826EED14146d08f88E5557805d439d5f" //support address          
      />
      {/* <Footer /> */}
    </>


  );
}

export default App;
