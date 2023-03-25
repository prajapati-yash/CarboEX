import React from 'react'
import '../../styles/home/HomeHero.css'

function HomeHero() {
    return (
        <div className='container-fluid px-4 px-md-5'>
            <div className='my-component '>
                <div className="secondContainer d-flex color-overlay justify-content-center align-items-center">
                    <div className='text-container col-5 '>
                        <p className="text">Control Carbon Emissions with CarboEx!</p>
                    </div>
                    <div className='col-6 d-flex justify-content-end px-3'>
                        <div className="img-text">
                            <div className="second-text px-5 py-5">
                               The Carbon Trading Platform using Blockchain is a decentralized application built on top of blockchain technology that aims to facilitate carbon credit trading. It will generate an unchangeable and tamper-proof record of transactions, automate the exchange of carbon credits, and support sustainable development by establishing a more effective and transparent carbon credit market.
                            </div>
                            <div className='start-button-div py-4'>
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
