import React from 'react'
import '../../../styles/calculator/bodycalc/LandingCalc.css'
function landingCalc() {
    return (
        <>
            <div className='house-form-landing'>
                <div className='form-content1-landing'>
                    <div className='calculator-landing-label-main'>
                        <label className='house-form__label-landing'>Calculate your Emissions</label>
                    </div>
                    <div className='formMain-landing'>
                        <div className='form-group-landing bottom35'>
                            <label className='house-form__label1'>All in one Calculator to calculate your carbon footprint. Every industry impacts on the environment. Use Carbon calculator to offset yours and go on the road to net-zero emissions.</label>
                        </div>
                        <div className='calc-instruction-list-class'>
                            <ul>
                                <li>Carbon calculator measures carbon footprint and estimates associated emissions based on input details.</li>
                                <li>Result can be compared to global limit to identify areas for change in order to lower impact on the environment.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='landingPageCalc'>
                Calculate your Emissions with our calculator:
            </div>
            <div className="calcList">
                <div className='Calculator-details'>
                    <p>All in one Calculator to calculate your carbon footprint. Every industry impacts on the environment. Use Carbon calculator to offset yours and go on the road to net-zero emissions.</p>
                    <p>Track and measure carbon emissions from shipping routes, vehicles, flights and various transportation modes and Identify how your company can contribute to reducing greenhouse gas emissions in your environment. Track carbon emissions from power plants, and energy sources, including renewable sources like wind and solar energy. Optimize your operations to reduce emissions and transition to cleaner energy sources. Measure carbon emissions from land use practices, such as deforestation and soil management.</p>
                    <p>Carbon calculator  allows individuals to measure their personal carbon emissions and see how they compare to the global standard. By using the calculator, individuals can identify areas where they can reduce their carbon emissions and make changes in their daily lives to lower their impact on the environment.</p>
                    <b>Instructions:</b>
                    <p>The calculator is designed to help users estimate the amount of carbon dioxide (CO2) emissions associated with a particular activity or category. Users can input various details into the calculator, and based on those details, the calculator will provide an output of the estimated CO2 emissions in kilograms (kg).</p>
                    <p>For example, if the user wants to know the estimated CO2 emissions associated with a car journey, they can input details such as the distance travelled, the type of car, and the fuel type. Based on these details, the calculator will provide an output of the estimated CO2 emissions in kg.</p>
                    <p>To get the summation of all the calculated values, the user can see the output in the result field. The result field is based on a global limit, which means it provides an estimate of the total CO2 emissions that are considered safe for the planet. The user can compare their calculated emissions to the global limit to determine if their activity or category is contributing to the reduction of greenhouse gas emissions in the environment.</p>
                </div>
            </div> */}
        </>
    )
}

export default landingCalc