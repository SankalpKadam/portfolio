import React from 'react'
import './Homepage.css'
import StarsCanvas from '../StarsBackground/StarBackground';import Banner from '../Banner/Banner';
import AboutMe from '../About/AboutMe';
;
const Homepage = () => {
  return (
    <div className='homepage'>
        <Banner/>
        <AboutMe/>
      {/* <StarsCanvas/> */}
      {/* <p className='text-3xl white text-center bg-white'>Hello</p> */}
    </div>
  )
}

export default Homepage
