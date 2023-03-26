import React from 'react'
import '../../../styles/calculator/maincalc/MainCalc.css'
import HeadCalculator from '../headcalc/HeadCalculator'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'
import StoreCalculation from '../storecalculation/StoreCalculation'

function CalcResult() {
    return (
        <>
            <Navbar />
            <div className='mainCalclass'>
                <HeadCalculator />
                <StoreCalculation />

            </div>
            <Footer />

        </>
    )
}

export default CalcResult