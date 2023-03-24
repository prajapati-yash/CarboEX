import React from 'react'
import '../../styles/home/OurPlatform.css'



function OurPlatform() {
    return (
        <div className='container-fluid px-4 px-md-5 py-5'>
            <div className='platform-head'>
                <p className=' d-flex justify-content-center'>Why our Platform?</p>
            </div>


            <div className='d-flex row align-items-center justify-content-around '>
                {aboutPlatform.map((item, index) => (
                    <AboutPlatform body={item} key={index} />
                ))}
            </div>

        </div>
    )
}

const aboutPlatform = [
    {
        text: "Sustainability - Ensures a balance between economic growth, environmental care and social well-being."
    },
    {
        text: "Our Platform Auto-layout for flexbox grid columns  shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the"
    },
    {
        text: "Our Platform Auto-layout for flexbox grid columns  shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the"
    },

]

function AboutPlatform({ body }) {
    return (
        <>
            <div className="col-3 rounded-circle platform-bg py-5 px-5" >
                {body.text}
            </div>
        </>
    )
}

export default OurPlatform