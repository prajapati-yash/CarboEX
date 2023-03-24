import React from 'react'
import HeadCalculator from '../headcalc/HeadCalculator'
import '../../../styles/calculator/maincalc/MainCalc.css'
import TraditionalBodyCalc from '../bodycalc/TraditionalBodyCalc'
import '../../../styles/calculator/bodycalc/TraditionalBodyCalc.css'
import Navbar from '../../navbar/Navbar'




function TraditionalMain() {
    return (
        <>
            <Navbar />
            <div className='mainCalclass'>
                <HeadCalculator />
                <TraditionalBodyCalc />
            </div>
        </>
    )
}

export default TraditionalMain