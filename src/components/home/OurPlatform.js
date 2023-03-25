import React from 'react'
import '../../styles/home/OurPlatform.css'
import HomeStrings from '../../utils/strings/HomeStrings'



function OurPlatform() {
    return (
        <div className='container-fluid px-4 px-md-5 py-5 platform-box'>
            <div className='platform-head'>
                <p className=' d-flex justify-content-center'>Why our Platform?</p>
            </div>


            <div className='d-flex row align-items-center all-platform-boxes justify-content-center '>
                {HomeStrings.aboutPlatform.map((item, index) => (
                    <div className={"align-self-stretch platform-bg py-5 px-4 " + (index%3===0?"ms-0":"ms-5")} key={index} >
                        <p className='platform-content-head mx-auto d-flex text-white justify-content-center'>{item.head}</p>
                        <p className='platform-content text-white d-flex align-items-center justify-content-center'>{item.content}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default OurPlatform