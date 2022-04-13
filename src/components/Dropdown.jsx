import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import '../assets/styles/Dropdown.css'

export default function Dropdown() {
    return (
        <MDBDropdown>
            <MDBDropdownToggle tag='a' className='btn fw-lighter'>
                30 Minutes
            </MDBDropdownToggle>
            <MDBDropdownMenu>
                <MDBDropdownItem>
                    <MDBDropdownLink href="#">45 Minutes</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                    <MDBDropdownLink href="#">1 Hour</MDBDropdownLink>
                </MDBDropdownItem>
            </MDBDropdownMenu>
        </MDBDropdown>
    );
}