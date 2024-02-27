import React from 'react';
import './navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__inner bg-transparent backdrop-blur-sm'>

        <div className='navbar__logo'>
          <p className='navbar__firstName lg:text-4xl md:text-2xl font-bold'>Sankalp</p>
          <p className='navbar__lastName'>Kadam</p>
        </div>
        <div className='navbar__options flex'>
          <div className='navbar__downloadBtn text-md md:text-xl'>
            Download Resume
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
