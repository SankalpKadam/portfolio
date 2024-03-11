import React from 'react'
import './Projects.css'
import SingleProject from './SingleProject'
const Projects = () => {
  return (
    <div className='projects'>
      <p className='lg:text-7xl text-3xl md:text-6xl aboutme__title font-semibold mt-6'>PROJECTS</p>
      <SingleProject/>
      <SingleProject/>
      <SingleProject/>
      <SingleProject/>
    </div>
  )
}

export default Projects
