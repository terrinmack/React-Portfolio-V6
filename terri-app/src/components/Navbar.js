import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import Logo from '../images/TNM.logo-removebg-preview.png';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-rose-950 text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '100px', height: '80px'}} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/skills'>Skills</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-rose-950 flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link to='/'>Home</Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link to='/about'>About</Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link to='/skills'>Skills</Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link to='/projects'>Projects</Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>

      {/* Social icons */}
     
    </div>
  );
};

export default Navbar;