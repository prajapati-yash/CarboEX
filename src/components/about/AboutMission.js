import React from 'react'
import '../../styles/about/About.css'

function AboutMission() {
  return (
    <div>
      <div className="main-bg align-items-center">
        <div className="missionBg d-flex align-items-center">
          <div className='d-flex all-mission-content  '>
            <div className="col-md-6 mission-content mx-auto d-flex align-items-center justify-content-center ">
              Our API and Widget are easy to integrate into your platform so all your products or services can become carbon neutral. We also have a tailor-made carbon footprint calculator for specific industries.
            </div>
            <div className="col-md-3 mission-head my-4 my-md-5 align-items-center">
              <div className='for-vm-desktop'> Our<br /> Mission</div>
              <div className='for-vm-mob'> Our Mission </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMission