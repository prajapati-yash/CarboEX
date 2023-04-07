import React from 'react'
import '../../styles/resources/ResourcesCalComp.css'
import Calculator from '../../pages/Calculator';

function ResourcesCalComp() {
    return (
        <div className=''>
            <div className='resCC-main-div' >

                <div className='container-fluid px-4 px-md-5 pb-4'>

                    <div className="resCC-about-head py-3 py-sm-4 d-flex justify-content-center">
                        <p>CALCULATOR</p>
                    </div>
                    {/* <div className="resCC-about-head py-3 py-sm-4 d-flex justify-content-center">
                        <p>Calculate your carbon emissions and make small changes for a big impact.</p>
                    </div> */}

                    <div className='d-lg-flex  row pb-4 align-items-center resCC-about-text-content justify-content-around '>
                        {/* <div className=" resCC-box-bg mb-lg-0 mb-sm-4 mb-4 align-self-stretch py-5 px-4" > */}
                        <p className='resCC-head text-center mb-lg-0 mb-sm-4 align-self-stretch py-5 px-4'>Calculate your carbon emissions and make small changes for a big impact.</p>
                        <button className='resourcesCalcBtn' onClick={() => window.location.href = '/calculator'}> Calculate</button>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ResourcesCalComp