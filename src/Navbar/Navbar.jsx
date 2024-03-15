import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar lg:py-8 lg:px-64 px-4 py-4'>
      <div className='navbar__logo'>
        <p className='lg:text-3xl 
        text-2xl 
        font-bold 
        text-white'>Sankalp</p>
        <p className='lg:text-xl
        text-lg
        text-white'>Kadam</p>
      </div>
    </div>
  )
}

export default Navbar
