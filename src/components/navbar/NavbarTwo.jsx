import React from 'react'
import { Link } from 'react-router-dom';

const NavbarTwo = () => {
  return (
 <div className="flex flex-row gap-2 max-w-full bg-gray-100 px-20 items-center justify-between font-bold py-2 font-sans">
      <Link to="/">Graphics & Design</Link>
      <Link to="/">Video & Animation</Link>
      <Link to="/">Writing & Translation</Link>
      <Link to="/">AI Services</Link>
      <Link to="/">Digital Marketing</Link>
      <Link to="/">Programming & Tech</Link>
      <Link to="/">Business</Link>
      <Link to="/">Lifestyle</Link> 
      
    </div>
  )
}

export default NavbarTwo