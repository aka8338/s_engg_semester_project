import { Menu, X } from "lucide-react";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../Assets/l2.jpg";
import { navItems } from '../constants/main';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
  return (
      <nav className='sticky top-0 py-3 border-b border-neutral-700/80 bg-black z-10'>
          <div className='container px-4 mx-auto relative text-sm'>
              <div className='flex justify-between items-center'>
                  <div className='flex items-center flex-shrink-0'>
                      <img className='h-10 w-10 mr-2' src={logo} alt="logo" />
                      <span className='text-xl tracking-tight text-white'>New Life General Hospital</span>
                  </div>
                  <ul className='hidden lg:flex ml-14 space-x-12 text-white'>
                      {navItems.map((item, index) => (
                      <li key={index}>
                          <Link to = {item.to}>{item.label}</Link>
                          </li>
                      ))}
                  </ul>
                  <div className='hidden lg:flex justify-center space-x-12 items-center'>
                      
                      <Link to="/bookappointment" className='bg-gradient-to-r from-blue-300 to-blue-500 py-2 px-3 rounded-md'>Make un appointment
                      </Link>
                  </div>
                  <div className='lg:hidden md:flex flex-col justify-end
                        '>
                      <button className='text-blue-300 md:text-green-900"' onClick={toggleNavbar}>
                          {mobileDrawerOpen ? <X/> : <Menu/>}
                      </button>
                  </div>
              </div>
              {mobileDrawerOpen && (
                  <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12
                  flex flex-col justify-center items-center lg:hidden'>
                      <ul className='text-white'>
                          {navItems.map((item, index) => (
                              <li key={index} className='py-4'>
                                  <Link to = {item.to}>{item.label}</Link>
                              </li>
                          )
                    )}  
                      </ul>
                      <div className='flex space-x-6'>
                          <Link to = "/bookappointment" className='
                          py-2 px-3 rounded-md bg-gradient-to-r
                          from-blue-300 to-blue-500'>Make un Appointment</Link>
                      </div>
                      </div>
              )}
              
          </div>
    </nav>
  )
}

export default Navbar