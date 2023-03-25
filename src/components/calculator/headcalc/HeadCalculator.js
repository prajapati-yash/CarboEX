import React from 'react'
import '../../../styles/calculator/headcalc/HeadCalculator.css'
import { NavLink } from 'react-router-dom'

function HeadCalculator() {
    return (

        <div className='mainLI d-flex justify-content-center'>
            <ul className="navigation-list">
                <div className='lItems'>
                    <NavLink to='/calculator/traditionalenergy'>Traditional Energy</NavLink>
                    <NavLink to='/calculator/publictransit'>Public Transit</NavLink>
                    <NavLink to='/calculator/cleanenergy'>Clean Energy</NavLink>
                    <NavLink to='/calculator/fueltoco2'>Fuel to CO2</NavLink>
                    <NavLink to='/calculator/cartravel'>Car Travel</NavLink>
                    <NavLink to='/calculator/flight'>Flight</NavLink>
                    <NavLink to='/calculator/motorbike'>Motorbike</NavLink>
                    <NavLink to='/calculator/finalresult'>Result</NavLink>
                </div>
            </ul>
        </div>

    )
}

export default HeadCalculator