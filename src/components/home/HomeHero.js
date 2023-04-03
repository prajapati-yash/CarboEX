import React from 'react'
import '../../styles/home/HomeHero.css'


function HomeHero() {
    return (
        <div className='container-fluid px-4 px-md-5'>
            <div className='my-component '>
                <div className="secondContainer d-flex justify-content-center align-items-center">
                    <div className='text-container col-xl-5 col-4'>
                        <p className="text">Control Carbon Emissions with CarboEx!</p>
                    </div>
                    <div className='col-xl-6 col-7 d-flex box-container justify-content-end px-3'>
                        <div className="img-text">
                            <div className="second-text px-md-5 py-md-5 px-sm-4 py-sm-4 px-3 py-3">
                               <span className='for-hero-desktop'>
                                 The Carbon Trading Platform using Blockchain is a decentralized application built on top of blockchain technology that aims to facilitate carbon credit trading. It will generate an unchangeable and tamper-proof record of transactions, automate the exchange of carbon credits, and support sustainable development by establishing a more effective and transparent carbon credit market.
                                 </span>
                            
                                <span className='for-hero-mobile'>Hi! The Carbon Trading Platform using Blockchain aims to facilitate carbon credit trading by creating an unchangeable and tamper-proof record of transactions, automating the exchange of carbon credits, and supporting sustainable development.</span>
                            
                            </div>
                            <div className='start-button-div py-sm-2 py-xl-4 '>
                                <button className='btn btn-primary shadow-none border-0 start-button rounded-pill py-2'>GET STARTED</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeHero
