import React from 'react'
import '../../styles/resources/ResourcesWIC.css'
// import HomeStrings from '../../utils/strings/HomeStrings'

function ResourcesWIC() {
    return (
        <div className=''>
            <div className='resWic-main-div' >

                <div className='container-fluid px-4 px-md-5 pb-4'>

                    <div className="resWic-about-head py-3 py-sm-4 d-flex justify-content-center">
                        <p>ABOUT CARBON TRADING</p>
                    </div>

                    <div className='d-lg-flex row pb-4 align-items-center resWic-about-text-content justify-content-around '>
                        <div className=" resWic-box-bg mb-lg-0 mb-sm-4 mb-4 align-self-stretch py-5 px-4" ><p>Carbon trading is a market-based approach to reducing greenhouse gas emissions. Certain institutions set a limit on the number of carbon emissions that companies are allowed to emit. </p>
                            <p>The set limit divides into allowances or credits. Companies emitting less carbon than their allotted amount can sell their excess allowances or credits to other entities that require it.</p>
                            <p>Consequently, Carbon credits can be traded on exchanges at a price determined by supply and demand. Carbon trading can take place at both national and international levels. Carbon trading is popular because it allows for controlled and justified emissions of Carbon on the globe.</p>
                            <p>Eventually, there is a responsibility for the human race to expend our resources sustainably and ensure we use our assets and natural reservoirs wisely. Carbon trading allows us to do that on a global scale.
                            </p></div>
                        {/* <div className=" box-bg mb-lg-0 mb-sm-4 mb-4 align-self-stretch py-5 px-4" >{HomeStrings.aboutBoxContent[0].boxContent}</div> */}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ResourcesWIC