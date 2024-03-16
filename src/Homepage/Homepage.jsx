import React from 'react'
import "./Homepage.css"
import Banner from './Banner/Banner'
import About from './About/About'
import Experience from './Experience/Experience'
const Homepage = () => {
  return (
    <div className='homepage'>
        <Banner/>
        <About/>
        <Experience/>
    </div>
  )
}

export default Homepage
