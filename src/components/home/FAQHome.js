import React from 'react'
import '../../styles/home/FAQHome.css'

function FAQHome() {
    return (
        <div className="">
            <div className="main-faq">
                <div className='container-fluid px-4 px-md-5'>

                    <div className="faq-head">FAQ</div>
                    <div>
                        {faqQueAns.map((item, index) => (
                            <FaqQueAns body={item} key={index} />
                        ))}
                    </div>
                </div>



            </div>
        </div>
    )
}

const faqQueAns = [
    {
        que: "What is CarboEx?",
        ans: "CarboEx is an online marketplace where buyers and sellers can trade carbon credits. Organizations or people can purchase carbon credits to offset their own carbon emissions. Carbon credits are a unit of carbon emissions that have been decreased or offset by a project or activity."
    },
    {
        que: "How does the CarboEx platform work?",
        ans: "Blockchain technology is used by the CarboEx platform to promote transparency and traceability in the trading of carbon credits. It streamlines the transfer of ownership and tracks the source and chain of custody of the credits, allowing sellers to register their projects and purchasers to acquire carbon credits through the site."
    },
    {
        que: "What is the purpose of a CarboEx?",
        ans: "CarboEx’s goal is to create a market for trading carbon credits, which can encourage activities that reduce emissions and sequester carbon. Platforms for selling carbon credits can assist in lowering greenhouse gas emissions and reducing the consequences of climate change by giving financial incentives for sustainable actions."
    },
    {
        que: "Who can use a CarboEx platform?",
        ans: "A CarboEx platform can be used by anyone, including intermediaries, purchasers, and project developers. Businesses, governments, or people that want to offset their carbon emissions may be buyers, whereas groups implementing sustainable initiatives that produce carbon credits may be project developers."
    },
    {
        que: "What are the benefits of using CarboEx?",
        ans: "Using a CarboEx has advantages such as higher accountability, decreased transaction costs, improved efficiency, increased accessibility, and the capacity to incentivize sustainable practices. Platforms that sell carbon credits can aid in the transition to a low-carbon economy and advance sustainable growth."
    }
]

function FaqQueAns({ body }) {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" onClick={() => setOpen(!open)}>
                            {body.que}
                        </button>
                    </h2>
                    {open ? (<div id="collapseOne" className=" collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">{body.ans}</div>
                    </div>) : (<></>)}
                </div>
            </div>
        </>
    )
}
export default FAQHome