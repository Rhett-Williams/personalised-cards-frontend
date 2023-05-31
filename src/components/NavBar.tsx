import React from 'react';
import { Link } from 'react-router-dom';
import NavbarHamburger from './NavbarHamburger';
import Logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <div className='nav-bar-container'>
    <img className='main-logo-image' src={Logo}/>
    <nav className="navbar-mine">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link className='navbar-text' to="/">Home</Link>
        </li>
        <li style={{fontSize: '50px', marginRight: '10px', color: 'white'}}>|</li>
        <li className="navbar-item">
          <Link className='navbar-text' to="/create">Create</Link>
        </li>
      </ul>
    </nav>
    <div className='hamburger-nav-bar' style={{zIndex: 5}}>
      <NavbarHamburger />
    </div>
    </div>
  );
};

export default Navbar;