import '../../../styles/calculator/storecalculation/StoreCalculation.css'
// import TraditionalBodyCalc from '../bodycalc/TraditionalBodyCalc'
// import PublicTransitCalc from '../bodycalc/PublicTransitCalc'
// import Navbar from '../../navbar/Navbar';
// import Footer from '../../footer/Footer';
import React, { useEffect, useState } from 'react'
import ResultCalculation from './ResultCalculation'; // import the Modal component

// import React, { useEffect, useState } from 'react';
// import Modal from './Modal'; // import your Modal component


function StoreCalculation({ values }) {
    const [sum, setSum] = useState(0);
    const [showModal, setShowModal] = useState(false); // add state to control the visibility of the modal
    let newSum;
    const [latestValues, setLatestValues] = useState({});
    useEffect(() => {
        const updatedValues = { ...latestValues };
        let updatedFlag = false;
        Object.keys(values).forEach((component) => {
            const value = values[component];
            if (value !== latestValues[component]) {
                updatedFlag = true;
                updatedValues[component] = value;
            }
        });
        if (updatedFlag) {
            setLatestValues(updatedValues);
        }
    }, [values, latestValues]);


    const calculateSum = async () => {
        newSum = await Object.values(latestValues).reduce(
            (accumulator, currentValue) => accumulator + Number(currentValue),
            0
        );
        setSum(newSum);
        console.log(latestValues)

        console.log(newSum)
        // alert()
        setShowModal(true); // show the modal when the sum is calculated
    };

    useEffect(() => {
        // setSum(newSum)
        console.log(sum)
    }, [sum])
    return (
        <>
            <div className='storeCalc'>
                <div className='house-form-landing'>
                    <div className='form-content1-landing'>
                        {/* <div className='calculator-landing-label-main'>
                            <b className='title-calc-main'>Calculate your Emissions</b>
                        </div> */}
                        <div className='formMain-landing'>
                            {/* <div className='form-group-landing bottom35'>
                                <p className='house-form__label1'>Measure emissions to reduce emissions and transition to cleaner energy sources.</p>
                            </div> */}
                            {/* <div className='use-of-calc'>What is the use of Carbon Emission Calculator?</div> */}
                            <div className='calc-instruction-list-class'>
                                {/* <ul>
                                    <li>Individual can use the calculator to identify areas to reduce their carbon emissions.</li>
                                    <li>Calculator helps users estimate CO2 emissions based on input details.</li>
                                    <li>User inputs details to calculate estimated CO2 emissions in kg.</li>
                                    <li>The result field provides an estimate of safe CO2 emissions.</li>
                                    <li>The user can compare their emissions to the global limit to determine if they are contributing to the environment.</li>
                                </ul> */}
                                <p><b>Hello there!</b></p>
                                <p>Thank you for using our Carbon Calculator. To view your carbon emissions, simply click on the Result button.</p>
                                <p>If your carbon emissions exceed the global limit (5000 tons), <span style={{ borderBottom: "3px solid #4caf50" }}><b>Don't Worry!</b></span><br /></p><p><b>We have a solution for you.💡</b></p>
                                <p>After completing the calculation, you will be given the option to buy carbon credits to offset your excess emissions. By doing so, you can contribute to a more sustainable future and reduce your carbon footprint.👣</p>
                                <p>We encourage you to take responsibility for your carbon emissions and join us in the fight against climate change.🌳</p>Thank you for your support!🙏<br />
                                <div className='text-center'>

                                    <button className='storeCalcBtn' onClick={calculateSum} >Result</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >



                {/* Your total emission till now, {sum} KG CO2. */}
                <ul>
                    {/* <div>Sum value: {sum}</div> */}
                    {/* <button className='storeCalcBtn' onClick={calculateSum} >Result</button> */}
                </ul>
            </div>
            {showModal && <ResultCalculation sum={sum} onClose={() => setShowModal(false)} />}
        </>
    )
}

export default StoreCalculation;
// export default React.memo(StoreCalculation);

