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

export default function NavbarHamburger() {
  const [showNavExternal3, setShowNavExternal3] = useState(false);

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
            onClick={() => setShowNavExternal3(!showNavExternal3)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>

      <MDBCollapse show={showNavExternal3} >
        <div className='bg-light shadow-3 p-4'  >
        <Link to="/">
          <MDBBtn block className='border-bottom m-0' color='link' onClick={() => setShowNavExternal3(!showNavExternal3)}>
            Home
          </MDBBtn>
        </Link>
        <Link to="/create">
          <MDBBtn block className='border-bottom m-0' color='link' onClick={() => setShowNavExternal3(!showNavExternal3)}>
            Create
          </MDBBtn>
        </Link>

        </div>
      </MDBCollapse>
    </>
  );
}