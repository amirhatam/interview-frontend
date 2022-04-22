import React, { useState } from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import '../assets/styles/Dropdown.css'

export default function Dropdown(props) {


    const handleClick = (e) => {
        props.setDuration(e.target.value);
    }

    return (
        <MDBDropdown>
            <MDBDropdownToggle tag='a' className='btn fw-lighter'>
                Duration
            </MDBDropdownToggle>
            <MDBDropdownMenu >
                <MDBDropdownItem >
                    <MDBBtn
                        value={30}
                        outline
                        color="info"
                        onClick={handleClick}
                        className="col-12 "
                    >
                        30 Minutes
                    </MDBBtn>
                </MDBDropdownItem>
                <MDBDropdownItem>
                    <MDBBtn
                        value={45}
                        outline
                        color="info"
                        onClick={handleClick}
                        className="col-12 "
                    >
                        45 Minutes</MDBBtn>
                </MDBDropdownItem>
                <MDBDropdownItem>
                    <MDBBtn
                        value={60}
                        outline
                        color="info"
                        onClick={handleClick}
                        className="col-12 "
                    >
                        1 Hour
                    </MDBBtn>
                </MDBDropdownItem>
            </MDBDropdownMenu>
        </MDBDropdown>
    );
}