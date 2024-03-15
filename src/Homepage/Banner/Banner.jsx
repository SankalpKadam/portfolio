import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <div className='banner
    w-full
    flex
    flex-col
    text-white
    text-3xl
    justify-center
    items-center'>
      <div className='banner__img rounded-full'>

      </div>
      <div className='banner__name lg:text-7xl md:text-6xl text-xl font-bold animate-bounce'>
        Sankalp Kadam!
      </div>
    </div>
  )
}

export default Banner
