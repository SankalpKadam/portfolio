import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar 
    lg:py-8 
    lg:px-32
    md:px-16 
    px-4 
    py-4 
    flex 
    flex-row 
    text-white 
    justify-between
    items-center
    backdrop-blur-sm
    z-50
    fixed
    '>
      <div className='navbar__logo
      flex
      flex-row
      items-center'>
        <img src={require("../sk-high-resolution-logo-white-transparent.png")} alt="" className='h-10
        pr-3
        '/>
        <div>
        <p className='lg:text-3xl
        md:text-2xl
        text-xl 
        font-bold 
        text-white'>Sankalp</p>
        <p className='lg:text-xl
        md:text-lg
        text-md
        text-white
        border-x-gray-400
        -mt-2'>Kadam</p>
        </div>
      </div>
      <div className='border-2
      border-navbarColor
      rounded-xl
      px-4
      py-2
      lg:text-xl
      text-sm
      '>
        Download Resume
      </div>
    </div>
  )
}

export default Navbar
