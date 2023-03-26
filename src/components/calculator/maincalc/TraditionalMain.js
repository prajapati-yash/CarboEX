import React, { useEffect, useState } from 'react'
import HeadCalculator from '../headcalc/HeadCalculator'
import TraditionalBodyCalc from '../bodycalc/TraditionalBodyCalc'
import '../../../styles/calculator/bodycalc/TraditionalBodyCalc.css'
import '../../../styles/calculator/maincalc/MainCalc.css'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'




function TraditionalMain() {
    // const [resultCalcAll, setResultCalcAll] = useState({});
    return (
        <>
            <Navbar />
            <div className='mainCalclass'>
                <HeadCalculator />
                <TraditionalBodyCalc />

            </div>
            <Footer />

        </>
    )
}

export default TraditionalMain