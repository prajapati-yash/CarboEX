import React from 'react'
import '../../styles/home/HomeHero.css'

function HomeHero() {
    return (
        <div className='container-fluid px-4 px-md-5'>
            <div className='my-component '>
                <div className='d-flex svg-image align-items-center justify-content-center'>
                    <img src="./assets/home/hero.svg" alt="" className='img-fluid main-image' />
                </div>

                <div className="secondContainer d-flex">
                    <div className='text-container col-5 '>
                        <p className="text">Control Carbon Emissions with CarboEx!</p>
                    </div>
                    <div className='col-6 d-flex justify-content-end px-3'>
                        <div className="img-text">
                            <div className="second-text">
                                <p className='px-4 pt-3'>The Carbon Trading Platform using Blockchain is a decentralized application built on top of blockchain technology that aims to facilitate carbon credit trading. It will generate an unchangeable and tamper-proof record of transactions, automate the exchange of carbon credits, and support sustainable development by establishing a more effective and transparent carbon credit market.</p>
                            </div>
                            <div className='start-button-div py-4'>
                                <button className='btn btn-primary shadow-none border-0 start-button rounded-pill'>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHero


// Code to Utilise later if needed

{/* <div className='second-image'>
                                <img src="./assets/home/text_box.png" alt="" className='sub-image img-fluid' />
                            </div>
                            <div className='second-text'>
                                <p className='px-4 pt-5'>Fund and invest online in environmental initiatives that counteract climate change. Earn a green investment return by turning your business carbon positive.</p>
                            </div>
                            <div className='start-button-div '> <button className='btn btn-primary shadow-none border-0 start-button rounded-pill'>Get Started</button> </div> */}