import React from 'react'
import '../../styles/home/OurPlatform.css'
import HomeStrings from '../../utils/strings/HomeStrings'



function OurPlatform() {
    return (
        <div className='container-fluid px-4 px-md-5 py-5 platform-box'>
            <div className='platform-head py-2'>
                <p className=' d-flex justify-content-center'>Why our Platform?</p>
            </div>


            <div className='d-lg-flex flex-column flex-lg-row align-items-center all-platform-boxes justify-content-center mx-auto '>
                {HomeStrings.aboutPlatform.map((item, index) => (
                    <div className={"align-self-stretch platform-bg mb-4 py-5 px-4 mx-auto mx-lg-0 " + (index%3===0?"ms-lg-0":"ms-lg-5")} key={index} >
                        <p className='platform-content-head mx-auto d-flex text-white justify-content-center'>{item.head}</p>
                        <p className='platform-content text-white d-flex align-items-center justify-content-center'>{item.content}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default OurPlatform