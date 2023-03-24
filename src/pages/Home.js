import React from 'react'
import Footer from '../components/footer/Footer'
import FAQHome from '../components/home/FAQHome'
import HomeAbout from '../components/home/HomeAbout'
import HomeHero from '../components/home/HomeHero'
import OurPlatform from '../components/home/OurPlatform'
import Navbar from '../components/navbar/Navbar'

function Home() {
  
  return (
    <div>
        <Navbar />
        <HomeHero />
        <HomeAbout />
        <OurPlatform/>
        <FAQHome/>
        <Footer/>

    </div>
  )
}

export default Home