import React from 'react'
import "./Homepage.css"
import Banner from './Banner/Banner'
import About from './About/About'
import Experience from './Experience/Experience'
import Projects from './Projects/Projects'
import Getintouch from './GetInTouch/Getintouch'
import StarsCanvas from '../StarsBackground'
import Navbar from '../Navbar/Navbar'
const Homepage = () => {
  return (
    <div className="homepage App h-full bg-[url('./LooperGroup2.png')] bg-no-repeat">
        <StarsCanvas/>
      <Navbar/>
        <Banner/>
        <About/>
        <Experience/>
        <Projects/>
        <Getintouch/>
    </div>
  )
}

export default Homepage
