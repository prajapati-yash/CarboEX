import React from 'react'
import '../../styles/about/About.css'

function AboutVision() {
  return (
    <>
      <div className=''>
        <div className='visionBg d-flex align-items-center'>
          <div className='d-flex all-vision-content '>
            <div className=' col-md-3 d-flex vision-head my-4 my-md-5 align-items-center'>
              <div className='for-vm-desktop'> Our<br/> Vision </div>
              <div className='for-vm-mob'> Our Vision </div>
            </div>
            <div className='col-md-6 vision-content d-flex align-items-center justify-content-center'>Our API and Widget are easy to integrate into your platform so all your products or services can become carbon neutral. We also have a tailor-made carbon footprint calculator for specific industries.</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutVision