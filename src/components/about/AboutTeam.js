import React from 'react'
import '../../styles/about/About.css'

function AboutTeam() {
  const imageData = [
    {
      id: 1,
      src: 'assets/about/teamImages/jay.png',
      alt: 'Image 1',
      name:'Jay Patel',
      role:'Backend Developer'
    },
    {
      id: 2,
      src: 'assets/about/teamImages/purvi.jpeg',
      alt: 'Image 2',
      name:'Purvi Vaghela',
      role:'Backend Developer'
    },
    {
      id: 3,
      src: 'assets/about/teamImages/isha.jpeg',
      alt: 'Image 3',
      name:'Isha Mistry',
      role:'App Developer'
    },
    {
      id: 4,
      src: 'assets/about/teamImages/abhishek.png',
      alt: 'Image 4',
      name:'Abhishek Rajput',
      role:'App Developer'
    },
    {
      id: 5,
      src: 'assets/about/teamImages/purvik.jpeg',
      alt: 'Image 5',
      name:'Purvik Panchal',
      role:'Web Developer'
    },
    {
      id: 6,
      src: 'assets/about/teamImages/yash.jpg',
      alt: 'Image 6',
      name:'Yash Prajapati',
      role:'Web Developer'
    },
  ];

  return (
    <>
      <div className='teamBg '>
        <div className="teamHead text-center">
          Our Team
        </div>
        <div className="container">
          <div className="row justify-content-center all-image">
            {imageData.map((image) => (
              <div className="col-5 col-sm-4 mb-5 " key={image.id}>
                <div className="text-center mx-auto img-div text-center" >
                  <img src={image.src} className="img-fluid rounded-circle h-100" alt={image.alt} style={{ objectFit: "cover" }} />
                </div>

                <div style={{backgroundColor:"#ffff"}} className='py-1 px-2 d-flex flex-wrap justify-content-center text-center align-items-center align-content-center align-self-stretch name-role mx-auto'>
                  <div> <span className='member-name'> {image.name}</span> <br/>
                  <span className='member-role'>{image.role}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </>
  )
}

export default AboutTeam