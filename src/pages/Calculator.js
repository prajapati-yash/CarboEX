import React from 'react'
import TaditionalBodyCalc from '../components/calculator/bodycalc/TraditionalBodyCalc'
import HeadCalculator from '../components/calculator/headcalc/HeadCalculator'
import MainCalc from '../components/calculator/maincalc/MainCalc'
import '../styles/calculator/calculator.css'


function Calculator() {
    return (
        // <div style={{ height: '100vh', backgroundColor: 'lightgreen' }}>
        <div className='calcMain1'>
            <MainCalc />
        </div>
    )
}
export default Calculator