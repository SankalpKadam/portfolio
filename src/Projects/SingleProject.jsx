import React from 'react'
import './SingleProject.css'
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
const SingleProject = ({title, skills, link, github}) => {
  return (
    <div className='singleproject'>
      <div className='singleproject__inner'>
        <p className='singleproject__title  lg:text-3xl'>{title?title:"NotFlix"}</p>
        <div className='singleproject__skills flex flex-row flex-wrap lg:text-xl'>
            {/* {skills ? skills.map((skill) => <span>{skill}</span>):<span>Skills 1</span>} */}
            <span  className='project__skills'>Skills 1</span><span className='project__skills'>Skills 1</span><span className='project__skills'>Skills 1</span>
            <span className='project__skills'>Skills 1</span>
            <span className='project__skills'>Skills 1</span>
            <span className='project__skills'>Skills 1</span>
            <span className='project__skills'>Skills 1</span>
        </div>
        <div className='singleproject__links'>
            <LaunchIcon fontSize='large'/>
            <GitHubIcon fontSize='large'/>
        </div>
      </div>
    </div>
  )
}

export default SingleProject
