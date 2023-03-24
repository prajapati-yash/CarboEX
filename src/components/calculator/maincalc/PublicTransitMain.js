import React from 'react'
import '../../../styles/calculator/maincalc/MainCalc.css'
import Navbar from '../../navbar/Navbar'
import HeadCalculator from '../headcalc/HeadCalculator'
import PublicTransitCalc from '../bodycalc/PublicTransitCalc'

function PublicTransitMain() {
    return (
        <>
            <Navbar />
            <div className='mainCalclass'>

                <HeadCalculator />
                <PublicTransitCalc />

            </div>
        </>
    )
}

export default PublicTransitMain