import React from 'react'
import '../../styles/about/About.css'

function AboutTeam() {
  const imageData = [
    {
      id: 1,
      src: 'assets/about/teamImages/jay.jpg',
      alt: 'Image 1',
    },
    {
      id: 2,
      src: 'assets/about/teamImages/purvi.jpeg',
      alt: 'Image 2',
    },
    {
      id: 3,
      src: 'assets/about/teamImages/isha.jpeg',
      alt: 'Image 3',
    },
    {
      id: 4,
      src: 'assets/about/teamImages/abhishek.jpg',
      alt: 'Image 4',
    },
    {
      id: 5,
      src: 'assets/about/teamImages/purvik.jpeg',
      alt: 'Image 5',
    },
    {
      id: 6,
      src: 'assets/about/teamImages/yash.jpg',
      alt: 'Image 6',
    },
  ];

  return (
    <>
      <div className='teamBg '>
        <div className="teamHead text-center">
          Our Team
        </div>
        <div className="container">
          <div className="row ">
            {imageData.map((image) => (
              <div className="col-sm-4 mb-5" key={image.id}>
                <div className="text-center mx-auto" style={{ height: "250px", width: "250px" }}>
                  <img src={image.src} className="img-fluid rounded-circle h-100" alt={image.alt} style={{ objectFit: "cover" }} />
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