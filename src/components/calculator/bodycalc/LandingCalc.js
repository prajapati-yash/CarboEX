import React from 'react';
import '../../../styles/calculator/bodycalc/LandingCalc.css';
import { useNavigate } from "react-router-dom";

function LandingCalc() {
    const navigate = useNavigate();
    return (
        <>
            <div className='house-form-landing'>
                <div className='form-content1-landing'>
                    <div className='calculator-landing-label-main'>
                        {/* <label className='house-form__label-landing'> */}
                        <b className='title-calc-main'>Calculate your Emissions</b>
                        {/* </label> */}
                    </div>
                    <div className='formMain-landing'>
                        <div className='form-group-landing bottom35'>
                            <p className='house-form__label1'>Measure emissions to reduce emissions and transition to cleaner energy sources.</p>
                        </div>
                        <div className='use-of-calc'>What is the use of Carbon Emission Calculator? 🤔</div>
                        <div className='calc-instruction-list-class'>
                            <ul>
                                <li>Individual can use the calculator to identify areas to reduce their carbon emissions.<i class="fa-solid fa-square-down"></i></li>
                                <li>Calculator helps users estimate CO2 emissions based on input details.</li>
                                <li>User inputs details to calculate estimated CO2 emissions in kg.</li>
                                <li>The result field provides an estimate of safe CO2 emissions.</li>
                                <li>The user can compare their emissions to the global limit to determine if they are contributing to the environment.🌳</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button
                    className='start-calc-btn-main'
                    onClick={() => navigate("/approach/calculator/traditionalenergy")}
                >
                    <span> Start </span>
                </button>
            </div >
        </>
    )
}

export default LandingCalc