import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function NavbarHamburger({externalNav, onSetShowExternal}: any) {


  return (
    <>
      <MDBNavbar>
        <MDBContainer fluid>
          <MDBNavbarToggler
            className='ms-auto'
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={onSetShowExternal}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>

      <MDBCollapse show={externalNav} >
        <div className='bg-light shadow-3 p-4'  >
        <Link to="/">
          <MDBBtn block className='border-bottom m-0' color='link' onClick={onSetShowExternal}>
            Home
          </MDBBtn>
        </Link>
        <Link to="/create">
          <MDBBtn block className='border-bottom m-0' color='link' onClick={onSetShowExternal}>
            Create
          </MDBBtn>
        </Link>

        </div>
      </MDBCollapse>
    </>
  );
}