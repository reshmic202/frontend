import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import FeaturedJobs from './FeaturedJobs'
import AdvertisementPage from './AdvertisementPage'
import FooterPage from './FooterPage'

const HomePage = () => {
  return (
    <div className=' '>

      {/* herosection */}
      <HeroSection/>

      {/* featured jobs */}
      <FeaturedJobs />

      {/* top hiring company */}
      <AdvertisementPage/>
      {/* footer */}
      <FooterPage/>

    </div>
  )
}

export default HomePage
