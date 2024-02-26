import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner__image'>
        <img src={require('../linkedin.png')} alt="img"/>
      </div>
      <div className='banner__data'>
        <p className='text-7xl text-white banner__name'>Sankalp Kadam!</p>
        <p className='text-4xl text-white banner__title'>Software Engineer</p>
      </div>
    </div>
  )
}

export default Banner
