import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarHamburger from './NavbarHamburger';
import Logo from '../assets/Logo.png'

const Navbar = () => {
  const [showNavExternal3, setShowNavExternal3] = useState(false);
  return (
    <div className='nav-bar-container'>
     <a style={{marginLeft: '5%'}} href="/">
      <img
        style={{paddingTop: 20, maxWidth: '80vw'}}
        className="header-logo-image"
        src={Logo}
        alt="Logo"
      />
    </a>
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
    <div className='hamburger-nav-bar' style={{zIndex: 5, width: showNavExternal3 ? 200 : 80, padding: 0}}>
      <NavbarHamburger externalNav={showNavExternal3} onSetShowExternal={() => setShowNavExternal3(!showNavExternal3)}/>
    </div>
    </div>
  );
};

export default Navbar;
