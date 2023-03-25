import React from 'react'
import '../../../styles/calculator/maincalc/MainCalc.css'
import Navbar from '../../navbar/Navbar'
import HeadCalculator from '../headcalc/HeadCalculator'
import PublicTransitCalc from '../bodycalc/PublicTransitCalc'
import Footer from '../../footer/Footer'
function PublicTransitMain() {
    return (
        <>
            <Navbar />
            <div className='mainCalclass'>

                <HeadCalculator />
                <PublicTransitCalc />
            </div>
            <Footer />
        </>
    )
}

export default PublicTransitMain