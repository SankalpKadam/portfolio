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
    bg-transparent
    z-[60]
    fixed
    top-0
    w-full
    h-[65px]
    '>
      <div className='navbar__logo
      flex
      flex-row
      items-center'>
        <img src={`${window.location.origin}`+"/logo.png"} alt="" className='h-10
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
        -mt-2'>Kadam</p>
        </div>
      </div>
      <div className='//border-2
      //border-navbarColor
      rounded-xl
      px-4
      py-2
      lg:text-xl
      text-sm
      '>
        Resume
      </div>
    </div>
  )
}

export default Navbar
