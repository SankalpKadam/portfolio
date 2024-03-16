import React from 'react'
import "./Homepage.css"
import Banner from './Banner/Banner'
import About from './About/About'
const Homepage = () => {
  return (
    <div className='homepage'>
        <Banner/>
        <About/>
    </div>
  )
}

export default Homepage
