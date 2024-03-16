import React from 'react'
import "./Homepage.css"
import Banner from './Banner/Banner'
import About from './About/About'
import Experience from './Experience/Experience'
import Projects from './Projects/Projects'
import Getintouch from './GetInTouch/Getintouch'
const Homepage = () => {
  return (
    <div className='homepage'>
        <Banner/>
        <About/>
        <Experience/>
        <Projects/>
        <Getintouch/>
    </div>
  )
}

export default Homepage
