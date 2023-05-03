import React from 'react'
import '../../styles/home/FAQHome.css'

function FAQHome() {
    return (
        <>
            <div className="main-faq container-fluid px-4 px-md-5">
                <div className='faq-content px-0 px-sm-3 px-md-4'>
                    <div className="faq-head d-flex align-items-center justify-content-center mb-4">
                        FAQs
                    </div>

                    <div>
                        <div className="accordion accordion-box-border" id="accordionExample" >
                            <div className="accordion-item accordion-box-border mb-3" style={{ backgroundColor: "none", color: "" }}>
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button shadow-none rounded-pill" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        What is CarboEx?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        CarboEx is an online marketplace where buyers and sellers can trade carbon credits. Organizations or people can purchase carbon credits to offset their own carbon emissions. Carbon credits are a unit of carbon emissions that have been decreased or offset by a project or activity.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-3 accordion-box-border">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button shadow-none collapsed accordion-box-border" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How does the CarboEx platform work?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Blockchain technology is used by the CarboEx platform to promote transparency and traceability in the trading of carbon credits. It streamlines the transfer of ownership and tracks the source and chain of custody of the credits, allowing sellers to register their projects and purchasers to acquire carbon credits through the site.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-3 accordion-box-border">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button shadow-none collapsed accordion-box-border" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        What is the purpose of a CarboEx?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        CarboEx’s goal is to create a market for trading carbon credits, which can encourage activities that reduce emissions and sequester carbon. Platforms for selling carbon credits can assist in lowering greenhouse gas emissions and reducing the consequences of climate change by giving financial incentives for sustainable actions.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-3 accordion-box-border">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button shadow-none collapsed accordion-box-border" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Who can use a CarboEx platform?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        A CarboEx platform can be used by anyone, including intermediaries, purchasers, and project developers. Businesses, governments, or people that want to offset their carbon emissions may be buyers, whereas groups implementing sustainable initiatives that produce carbon credits may be project developers.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-3 accordion-box-border">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button shadow-none collapsed accordion-box-border" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        What are the benefits of using CarboEx?
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Using a CarboEx has advantages such as higher accountability, decreased transaction costs, improved efficiency, increased accessibility, and the capacity to incentivize sustainable practices. Platforms that sell carbon credits can aid in the transition to a low-carbon economy and advance sustainable growth.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item accordion-box-border mb-3" >
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button shadow-none collapsed accordion-box-border rounded-pill" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        On CarboEx Platform how to Become DAO Member, Validate Certificate, Buy and Sell Carbon Credits?
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                    <div className="accordion-body text-center">
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/EzSsrDWyRPw" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="accordion" id="accordionTwo">
                            <div className="accordion-item mb-3 accordion-box-border">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button shadow-none collapsed accordion-box-border" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        On CarboEx Platform how to Become DAO Member, Validate Certificate, Buy and Sell Carbon Credits?
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                    <div className="accordion-body text-center">
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/EzSsrDWyRPw" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div> */}

                            <div className=''> &nbsp;</div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

// const faqQueAns = [
//     {
//         que: "What is CarboEx?",
//         ans: "CarboEx is an online marketplace where buyers and sellers can trade carbon credits. Organizations or people can purchase carbon credits to offset their own carbon emissions. Carbon credits are a unit of carbon emissions that have been decreased or offset by a project or activity."
//     },
//     {
//         que: "How does the CarboEx platform work?",
//         ans: "Blockchain technology is used by the CarboEx platform to promote transparency and traceability in the trading of carbon credits. It streamlines the transfer of ownership and tracks the source and chain of custody of the credits, allowing sellers to register their projects and purchasers to acquire carbon credits through the site."
//     },
//     {
//         que: "What is the purpose of a CarboEx?",
//         ans: "CarboEx’s goal is to create a market for trading carbon credits, which can encourage activities that reduce emissions and sequester carbon. Platforms for selling carbon credits can assist in lowering greenhouse gas emissions and reducing the consequences of climate change by giving financial incentives for sustainable actions."
//     },
//     {
//         que: "Who can use a CarboEx platform?",
//         ans: "A CarboEx platform can be used by anyone, including intermediaries, purchasers, and project developers. Businesses, governments, or people that want to offset their carbon emissions may be buyers, whereas groups implementing sustainable initiatives that produce carbon credits may be project developers."
//     },
//     {
//         que: "What are the benefits of using CarboEx?",
//         ans: "Using a CarboEx has advantages such as higher accountability, decreased transaction costs, improved efficiency, increased accessibility, and the capacity to incentivize sustainable practices. Platforms that sell carbon credits can aid in the transition to a low-carbon economy and advance sustainable growth."
//     }
// ]

// function FaqQueAns({body}) {
//     const [open, setOpen] = React.useState(false);
//     return (
//         <>
//             <div className="accordion accordion-flush" id="accordionFlushExample">
//                 <div className="accordion-item">
//                     <h2 className="accordion-header" id="">
//                         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" onClick={() => setOpen(!open)}>
//                             {body.que}
//                         </button>
//                     </h2>
//                     {open ? (<div id="collapseOne" className=" collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
//                         <div className="accordion-body">{body.ans}</div>
//                     </div>) : (<></>)}
//                 </div>
//             </div>
//         </>
//     )
// }
export default FAQHome