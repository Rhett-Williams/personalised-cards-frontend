import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link className='navbar-text' to="/">Home</Link>
        </li>
        <li className='navbar-text navbar-item'>|</li>
        <li className="navbar-item">
          <Link className='navbar-text' to="/create">Create</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;