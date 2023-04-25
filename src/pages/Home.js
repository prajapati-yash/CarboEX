import React from 'react'
import FAQHome from '../components/home/FAQHome'
import HomeAbout from '../components/home/HomeAbout'
import HomeHero from '../components/home/HomeHero'
import OurPlatform from '../components/home/OurPlatform'
import HowItWorks from '../components/home/HowItWorks'

function Home() {

  return (
    <div>
      <HomeHero />
      <HowItWorks/>
      <HomeAbout />
      <OurPlatform />
      <FAQHome />
    </div>
  )
}

export default Home