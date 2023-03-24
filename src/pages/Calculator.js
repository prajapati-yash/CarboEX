import React from 'react'
import TaditionalBodyCalc from '../components/calculator/bodycalc/TraditionalBodyCalc'
import HeadCalculator from '../components/calculator/headcalc/HeadCalculator'
import TraditionalMain from '../components/calculator/maincalc/TraditionalMain'
import MainCalc from '../components/calculator/maincalc/TraditionalMain'
import Navbar from '../components/navbar/Navbar'
import '../styles/calculator/calculator.css'



function Calculator() {
    return (
        // <div style={{ height: '100vh', backgroundColor: 'lightgreen' }}>
        <>
            {/* <Navbar /> */}
            {/* <div className='calcMain1'> */}

            <TraditionalMain />
            {/* </div> */}
        </>
    )
}
export default Calculator