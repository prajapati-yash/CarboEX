import React from 'react'
import '../../../styles/calculator/maincalc/MainCalc.css'
import Navbar from '../../navbar/Navbar'
import HeadCalculator from '../headcalc/HeadCalculator'
import MotorBikeCalc from '../bodycalc/MotorBikeCalc'

function MotorBikeMain() {
    return (
        <>
            <Navbar />
            <div className='mainCalclass'>

                <HeadCalculator />
                <MotorBikeCalc />
            </div>
        </>
    )
}

export default MotorBikeMain