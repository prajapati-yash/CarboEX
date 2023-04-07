import React from 'react'
import '../../styles/resources/ResourcesROP.css'
import { NavLink } from 'react-router-dom'
// import 'assets/resources/resourcesBtn.png';

function ResourcesROP() {
    return (
        <div className=''>
            <div className='resROP-main-div' >

                <div className='container-fluid px-4 px-md-5 pb-4'>

                    <div className="resROP-about-head py-3 py-sm-4 d-flex justify-content-center">
                        <p>OUR RESEARCH ON POLICIES</p>
                    </div>

                    <div className='d-lg-flex row pb-4 align-items-center resROP-about-text-content justify-content-around '>
                        <NavLink className='resROPBtn' to="https://miro.com/app/board/uXjVPjG1soM=/" target='_blank'>
                            <img className='resROPImg' src="assets/resources/resourcesBtn.png" alt="Button" />
                            <div className='resROPBtn-text'>OUR RESEARCH</div>
                        </NavLink>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ResourcesROP