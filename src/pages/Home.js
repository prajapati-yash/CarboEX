import React from 'react'
import FAQHome from '../components/home/FAQHome'
import HomeAbout from '../components/home/HomeAbout'
import HomeHero from '../components/home/HomeHero'
import OurPlatform from '../components/home/OurPlatform'

function Home() {

  return (
    <div>
      <HomeHero />
      <HomeAbout />
      <OurPlatform />
      <FAQHome />
    </div>
  )
}

export default Home