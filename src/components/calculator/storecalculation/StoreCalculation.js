import React, { useEffect, useState } from 'react'
import TraditionalBodyCalc from '../bodycalc/TraditionalBodyCalc'
import PublicTransitCalc from '../bodycalc/PublicTransitCalc'
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import HeadCalculator from '../headcalc/HeadCalculator';

function StoreCalculation() {
    const [resultCalcAll, setResultCalcAll] = useState({});

    useEffect(() => {
        console.log(resultCalcAll);
    }, [resultCalcAll]);

    return (
        <>

            {/* <PublicTransitCalc /> */}
            {/* <TraditionalBodyCalc setResultCalcAll={setResultCalcAll} />
            <PublicTransitCalc setResultCalcAll={setResultCalcAll} /> */}
            {/* {setResultCalcAll = { setResultCalcAll }} */}
            <button onClick={() => {
                console.log(resultCalcAll)
            }}>Print Values</button>

        </>
    )
}

export default StoreCalculation
