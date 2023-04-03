import React from 'react'
import '../../styles/home/HomeAbout.css'
import HomeStrings from '../../utils/strings/HomeStrings'

function HomeAbout() {
    return (
        <div className=''>
            <div className='main-div' >
                <div className='boxContent container-fluid px-4 px-md-5 pb-5'>
                   <div className="about-head py-3 py-sm-4 d-flex  justify-content-center">
                        <p>About Project</p>
                   </div>
                    <div className='d-lg-flex row mx-xl-5 all-boxes align-items-center about-text-content justify-content-around '>
                        {HomeStrings.aboutBoxContent.map((item, index) => (
                            <div className=" box-bg mb-lg-0 mb-sm-4 mb-4 align-self-stretch py-5 px-4" key={index}>{item.boxContent}</div>
                        ))}
                    </div>
                  
                </div>
            </div>

        </div>
    )
}

export default HomeAbout