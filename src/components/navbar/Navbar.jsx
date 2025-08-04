import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavbarTwo from './NavbarTwo';
import userImg from '../../assets/react.svg';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showNavbarTwo, setShowNavbarTwo] = useState(false);

  const {pathname}= useLocation()
  // Mock current user data
  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };

  // 👇 Add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNavbarTwo(true);
      } else {
        setShowNavbarTwo(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
     {pathname=="/" || pathname !=="/"? <div className="flex justify-between items-center p-4 bg-gray-100 shadow-md sticky top-0 z-50">
        {/* LEFT: Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" >
          <span className="text-xl font-bold">Fiverr
            <span className="text-xl font-bold text-blue-600">Clone</span>
            <span className="text-xl font-bold text-blue-600">.</span>
            
          </span>
          </Link>
        </div>

        {/* RIGHT: Navigation Links */}
        <div className="flex gap-4 items-center font-bold text-sm font-sans">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && (
            <button className="bg-blue-500 text-white px-3 py-1 border hover:border-black rounded hover:bg-gray-200 hover:text-black">Join</button>
          )}
          {currentUser && (
            <div className="flex items-center gap-3 relative" onClick={() => setOpen(!open)}>
              <img className="w-8 h-8 rounded-full object-cover cursor-pointer" src={userImg} alt='user' />
              <span className="text-sm font-semibold">{currentUser?.username}</span>

              {/* dropdown menu / options for user */}
              {open && (
                <div className="text-gray-500 absolute bg-white border rounded border-solid border-blue-500 top-10 right-0 flex flex-col gap-4 p-4 shadow-lg w-48 font-semibold">
                  {currentUser?.isSeller && (
                    <>
                      <Link to={"/mygigs"} className='hover:text-gray-800 cursor-pointer'>Gigs</Link>
                      <Link to={"/add"} className='hover:text-gray-800 cursor-pointer'>Add New Gig</Link>
                    </>
                  )}
                  <Link to={"/orders"} className='hover:text-gray-800 cursor-pointer'>Orders</Link>
                  <Link to={"/messages"} className='hover:text-gray-800 cursor-pointer'>Messages</Link>
                  <Link to={"/"} className='hover:text-gray-800 cursor-pointer'>Logout</Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      :null
      }

      {/* 👇 Show NavbarTwo only when scrolled */}
      {(pathname !== "/" || showNavbarTwo)  && (
        <div className="bg-white shadow-md sticky top-[62px] z-40">
          <hr className='border-t-2 border-gray-300 w-full' />
          <NavbarTwo />
        </div>
      )}
    </>
  );
};

export default Navbar;
