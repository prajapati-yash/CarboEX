import React from 'react'
import '../../../styles/calculator/headcalc/HeadCalculator.css'

function HeadCalculator() {
    return (

        <div className='mainLI d-flex justify-content-center'>
            <ul className="navigation-list">
                <div className='lItems'>
                    <a href='/calculator/traditionalenergy'>Traditional Energy</a>
                    <a href='/calculator/publictransit'>Public Transit</a>
                    <a href='/calculator/cleanenergy'>Clean Energy</a>
                    <a href='/calculator/fueltoco2'>Fuel to CO2</a>
                    <a href='/calculator/cartravel'>Car Travel</a>
                    <a href='/calculator/flight'>Flight</a>
                    <a href='/calculator/motorbike'>Motorbike</a>
                    <a href='/calculator/finalresult'>Result</a>
                </div>
            </ul>
        </div>

    )
}

export default HeadCalculator