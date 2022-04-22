import React, { useState } from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import '../assets/styles/Dropdown.css'

export default function Dropdown(props) {
    const [inputValue, setInputValue] = useState("30 Minutes")


    const handleClick = (e) => {
        setInputValue(e.target.value);
    }

    console.log(inputValue);

    return (
        <MDBDropdown>
            <MDBDropdownToggle tag='a' className='btn fw-lighter'>
                Duration
            </MDBDropdownToggle>
            <MDBDropdownMenu >
                <MDBDropdownItem >
                    <MDBBtn
                        value={'30 Minutes'}
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
                        value={'45 Minutes'}
                        outline
                        color="info"
                        onClick={handleClick}
                        className="col-12 "
                    >
                        45 Minutes</MDBBtn>
                </MDBDropdownItem>
                <MDBDropdownItem>
                    <MDBBtn
                        value={'1 Hour'}
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