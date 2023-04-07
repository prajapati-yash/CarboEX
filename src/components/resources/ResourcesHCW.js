import React from 'react'
import '../../styles/resources/ResourcesHCW.css'

function ResourcesHCW() {
    return (
        <div className=''>
            <div className='resHcw-main-div' >

                <div className='container-fluid px-4 px-md-5 pb-4'>

                    <div className="resHcw-about-head py-3 py-sm-4 d-flex justify-content-center">
                        <p>HOW CARBON TRADING WORKS ?</p>
                    </div>

                    <div className='d-lg-flex row pb-4 align-items-center resHcw-about-text-content justify-content-around '>
                        <div className=" resHcw-box-bg mb-lg-0 mb-sm-4 mb-4 align-self-stretch py-5 px-4" ><p>The CarboEx trading platform provides users with certain CarboEx Tokens based on their Renewable Energy Certificate (REC).</p>
                            <p>An individual or organization with an RE certificate obtains the tokens to operate their business. It is with an oath that they shall abide by the carbon emissions limit. Each token represents a digital allowance, i.e. each token allows one to expend a certain amount of GHGs into the atmosphere as you run your business/ organization/ factory.</p>
                            <p>If and when an organization or an individual spends less than their allowance, they can sell it to other companies who require the credits. This further leads to a marketplace where a company buys credits from a seller and uses them to expend energy and release Carbon into the atmosphere.</p>
                        </div>
                    </div>



                    <div className="resHcw-about-head py-3 py-sm-4 d-flex justify-content-center">
                        <p>WHO CAN USE CARBOEX ?</p>
                    </div>

                    <div className='d-lg-flex row pb-4 align-items-center resHcw-about-text-content justify-content-around '>
                        <div className=" resHcw-box-bg mb-lg-0 mb-sm-4 mb-4 align-self-stretch py-5 px-4" ><p>Organizations, Regulatory bodies, and NGOs who maintain, manage and monitor Carbon emissions can use CarboEx.</p>
                            <p>If you're into green, clean energy and a sustainable environment, you can participate too!
                                As an individual or as a member you can use CarboEx to buy, sell and trade CarboEx tokens.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ResourcesHCW