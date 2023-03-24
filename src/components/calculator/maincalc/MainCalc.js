import React from 'react'
import HeadCalculator from '../headcalc/HeadCalculator'
import '../../../styles/calculator/maincalc/MainCalc.css'
import TraditionalBodyCalc from '../bodycalc/TraditionalBodyCalc'
import '../../../styles/calculator/bodycalc/TraditionalBodyCalc.css'
import PublicTransitCalc from '../bodycalc/PublicTransitCalc'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingCalc from '../bodycalc/LandingCalc'
import CleanEnergyCalc from '../bodycalc/CleanEnergyCalc'
import FuelToCo2Calc from '../bodycalc/FuelToCo2Calc'
import CarTravelCalc from '../bodycalc/CarTravelCalc'
import FlightCalc from '../bodycalc/FlightCalc'
import MotorBikeCalc from '../bodycalc/MotorBikeCalc'



function MainCalc() {
    return (
        <div className='mainCalclass'>
            <HeadCalculator />
            <BrowserRouter>
                <Routes>
                    {/* <Route path='/calculator' element={<LandingCalc />}></Route> */}
                    <Route path='/calculator' element={<TraditionalBodyCalc />}></Route>
                    <Route path='/calculator/traditionalenergy' element={<TraditionalBodyCalc />}></Route>
                    <Route path='/calculator/publictransit' element={<PublicTransitCalc />}></Route>
                    {/* <Route path='/calculator/cleanenergy' element={<CleanEnergyCalc />}></Route >
                    <Route path='/calculator/fueltoco2' element={<FuelToCo2Calc />}></Route >
                    <Route path='/calculator/cartravel' element={<CarTravelCalc />}></Route >
                    <Route path='/calculator/flight' element={<FlightCalc />}></Route >
                    <Route path='/calculator/motorbike' element={<MotorBikeCalc />}></Route > */}
                    <Route path='/calculator/*' element={<TraditionalBodyCalc />}></Route>
                    {/* <Route path='/calculator/*' element={<LandingCalc />}></Route> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default MainCalc