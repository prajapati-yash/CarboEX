import { useState } from 'react';
import React from 'react'
import { NavLink } from 'react-router-dom';
import CleanEnergyCalc from '../components/calculator/bodycalc/CleanEnergyCalc';
import FuelToCo2Calc from '../components/calculator/bodycalc/FuelToCo2Calc';
import CarTravelCalc from '../components/calculator/bodycalc/CarTravelCalc';
import FlightCalc from '../components/calculator/bodycalc/FlightCalc';
import MotorBikeCalc from '../components/calculator/bodycalc/MotorBikeCalc';
import '../styles/calculator/calculator.css'
import TraditionalBodyCalc from '../components/calculator/bodycalc/TraditionalBodyCalc';
import PublicTransitCalc from '../components/calculator/bodycalc/PublicTransitCalc';
import StoreCalculation from '../components/calculator/storecalculation/StoreCalculation';
// import LandingCalc from '../components/calculator/bodycalc/LandingCalc'

function Calculator() {

    const [values, setValues] = useState([]);

    const handleValueChange = (value) => {
        setValues([...values, value]);
    };

    const [activeComponent, setActiveComponent] = useState('traditionalEnergy');
    const renderComponent = () => {
        switch (activeComponent) {
            // case 'landingPage':
            //     return <LandingCalc />;
            case 'traditionalEnergy':
                return <TraditionalBodyCalc onValueChange={handleValueChange} />;
            case 'publicTransit':
                return <PublicTransitCalc onValueChange={handleValueChange} />;
            case 'cleanEnergy':
                return <CleanEnergyCalc onValueChange={handleValueChange} />;
            case 'fuelToCo2':
                return <FuelToCo2Calc onValueChange={handleValueChange} />;
            case 'carTravel':
                return <CarTravelCalc onValueChange={handleValueChange} />;
            case 'flight':
                return <FlightCalc onValueChange={handleValueChange} />;
            case 'motorBike':
                return <MotorBikeCalc onValueChange={handleValueChange} />;
            case 'calcResult':
                return <StoreCalculation values={values} />
            default:
                return <TraditionalBodyCalc onValueChange={handleValueChange} />;
            // return <LandingCalc />;
        }
    };
    return (
        <>
            <div className='mainCalclass1 mx-auto'>
                <div className='mainLI d-flex justify-content-center'>
                    <ul className='navigation-list'>
                        <div className='lItems'>
                            <NavLink
                                to='/calculator/traditionalenergy'
                                isActive={() => activeComponent === 'traditionalEnergy'}
                                onClick={() => setActiveComponent('traditionalEnergy')}
                            >
                                Traditional Energy
                            </NavLink>
                            <NavLink
                                to='/calculator/publictransit'
                                isActive={() => activeComponent === 'publicTransit'}
                                onClick={() => setActiveComponent('publicTransit')}
                            >
                                Public Transit
                            </NavLink>
                            <NavLink
                                to='/calculator/cleanenergy'
                                isActive={() => activeComponent === 'cleanEnergy'}
                                onClick={() => setActiveComponent('cleanEnergy')}
                            >
                                Clean Energy
                            </NavLink>
                            <NavLink
                                to='/calculator/fueltoco2'
                                isActive={() => activeComponent === 'fuelToCo2'}
                                onClick={() => setActiveComponent('fuelToCo2')}
                            >
                                Fuel to CO2
                            </NavLink>
                            <NavLink
                                to='/calculator/cartravel'
                                isActive={() => activeComponent === 'carTravel'}
                                onClick={() => setActiveComponent('carTravel')}
                            >
                                Car Travel
                            </NavLink>
                            <NavLink
                                to='/calculator/flight'
                                isActive={() => activeComponent === 'flight'}
                                onClick={() => setActiveComponent('flight')}
                            >
                                Flight
                            </NavLink>
                            <NavLink
                                to='/calculator/motorbike'
                                isActive={() => activeComponent === 'motorBike'}
                                onClick={() => setActiveComponent('motorBike')}
                            >
                                Motorbike
                            </NavLink>
                            <NavLink
                                to='/calculator/result'
                                isActive={() => activeComponent === 'calcResult'}
                                onClick={() => setActiveComponent('calcResult')}
                            >
                                Result
                            </NavLink>
                        </div>
                    </ul>
                </div>
                {renderComponent()}
            </div>
        </>
    );
}


export default Calculator;
