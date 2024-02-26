import React from 'react'
import './Homepage.css'
import StarsCanvas from '../StarsBackground/StarBackground';import Banner from '../Banner/Banner';
;
const Homepage = () => {
  return (
    <div className='homepage'>
        <Banner/>
      {/* <StarsCanvas/> */}
      {/* <p className='text-3xl white text-center bg-white'>Hello</p> */}
    </div>
  )
}

export default Homepage
