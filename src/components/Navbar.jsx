import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse
} from 'mdb-react-ui-kit';


export default function App() {
    const [showNavColorSecond, setShowNavColorSecond] = useState(false);

    return (
        <MDBNavbar expand='lg' dark bgColor='dark'>
            <MDBContainer >
                <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    data-target='#navbarColor02'
                    aria-controls='navbarColor02'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavColorSecond(!showNavColorSecond)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
                    <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem className='active'>
                            <MDBNavbarLink aria-current='page' href='#'>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                    <form className='d-flex input-group w-auto'>
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>Connextion</MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </form>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}