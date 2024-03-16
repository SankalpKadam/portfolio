import React from 'react'
import "./Homepage.css"
import Banner from './Banner/Banner'
import About from './About/About'
import Experience from './Experience/Experience'
import Projects from './Projects/Projects'
const Homepage = () => {
  return (
    <div className='homepage'>
        <Banner/>
        <About/>
        <Experience/>
        <Projects/>
    </div>
  )
}

export default Homepage
