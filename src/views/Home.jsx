import { MDBCol, MDBContainer, MDBModalBody, MDBModalHeader, MDBModalTitle } from "mdb-react-ui-kit";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "../components/Dropdown";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const Home = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <>
            <MDBContainer>
                <MDBModalHeader>
                    <MDBModalTitle className="display-5">Find a Starting Time</MDBModalTitle>
                </MDBModalHeader>
                <MDBModalBody className="row justify-content-start">
                    <div class="d-flex justify-content-center">
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="fw-lighter p-2 square border border-2"
                        />
                        <Dropdown />
                    </div>
                    {/* <div class="d-flex justify-content-center">

                    </div> */}

                </MDBModalBody>
            </MDBContainer>
        </>
    );
};