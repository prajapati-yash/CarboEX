import React from 'react'
import '../../styles/home/HomeAbout.css'

function HomeAbout() {
    return (
        <div className=''>
            <div className='main-div' >
                {/* <div className=' about-banner '>
                    <img src="./assets/home/aboutProject.svg" alt="" className='img-fluid about-image ' />
                </div> */}

                <div className='boxContent container-fluid px-4 px-md-5 pb-5'>
                   <div className="about-head py-4 d-flex  justify-content-center">
                        <p>About Project</p>
                   </div>
                    <div className='d-flex row align-items-center about-text-content justify-content-around '>
                        {aboutBoxContent.map((item, index) => (
                            <AboutBoxes body={item} key={index} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

const aboutBoxContent = [
    {
        boxContent: "The Carbon Trading Platform Using Blockchain is a decentralised application built on top of blockchain technology that aims to facilitate carbon credit trading. By generating an unchangeable and tamper-proof record of carbon credit transactions, the platform intends to provide efficiency and transparency to the market for carbon credits. The platform will make it possible for buyers and sellers of carbon credits to communicate with one another and conduct safe, open transactions."
    },
    {
        boxContent: "The platform will automate the exchange of carbon credits by using smart contracts, eliminating the need for intermediaries and reducing transaction cost. The platform will also provide an incentive mechanism for companies to reduce their carbon emissions. In accordance with the company's carbon emissions and governmental regulations, the platform will provide carbon credits.If a company's carbon credits expire before the allotted time, a penalty must be paid before another batch of carbon credits may be purchased."
    },
    {
        boxContent: "If a company has carbon credits that are unused after a specific amount of time, they can sell those credits to another company. Ultimately, the Carbon Trading Platform Using Blockchain intends to support sustainable development by establishing a more effective and transparent carbon credit market, motivating businesses to cut their carbon emissions, and assisting in the reduction of climate change's adverse consequences."
    }
]

function AboutBoxes({ body }) {
    return (
        <>
            <div className="col-3 box-bg align-self-stretch py-5 px-4" >{body.boxContent}</div>
        </>
    )
}
export default HomeAbout