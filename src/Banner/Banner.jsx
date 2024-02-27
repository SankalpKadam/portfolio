import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner__image'>
        <img src={require('../linkedin.png')} alt="img"/>
      </div>
      <div className='banner__data'>
        <p className='flex flex-col gap-6 mt-6 cursor-pointer animate-bounce tracking-tighter lg:text-7xl text-3xl md:text-6xl font-semibold text-white max-w-[600px] w-auto h-auto'>Sankalp Kadam!</p>
        <p className='text-xl md:text-3xl lg:text-4xl text-white banner__title'>Software Engineer</p>
        <p className='text-sm md:text-md text-gray-200 my-5 max-w-[600px]'>Passionate Software Engineer with proficiency in multiple programming languages and focus on writing clean, reusable and readable code.</p>
      </div>
    </div>
  )
}

export default Banner
