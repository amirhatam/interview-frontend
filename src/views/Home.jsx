import { MDBBtn, MDBCol, MDBContainer, MDBModalBody, MDBModalHeader, MDBModalTitle, MDBRow } from "mdb-react-ui-kit";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "../components/Dropdown";
import DatePicker from "react-datepicker";
const moment = require('moment')
import { findFreeTimes } from "../components/FreeSlots";





export const Home = () => {
    const [startDate, setStartDate] = useState(new Date());

    const [duration, setDuration] = useState(30);


    console.log("===>", moment(startDate));


    const start = new Date('2022-04-21 08:00');
    const end = new Date('2022-04-21 18:00');


    const events = [
        {
            "start": "2022-04-21 12:00",
            "end": "2022-04-21 12:30",
        },
        {
            "start": "2022-04-21 14:00",
            "end": "2022-04-21 16:00"
        },
        {
            "start": "2022-04-21 17:00",
            "end": "2022-04-21 17:30"
        },
    ];

    const freeSlots = findFreeTimes(start, end, duration, events);

    console.log(freeSlots);

    return (
        <>
            <MDBContainer>
                <MDBModalHeader>
                    <MDBModalTitle className="display-5">Find a Starting Time</MDBModalTitle>
                </MDBModalHeader>
                <MDBModalBody >
                    <div className="d-flex justify-content-center">
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="fw-lighter p-2 square border border-2"
                        />
                        <Dropdown setDuration={setDuration} />
                    </div>
                    <MDBRow>
                        {
                            freeSlots.map((e, i) => {

                                return (
                                    <MDBCol className="col-1 my-5" key={i}>
                                        <MDBBtn key={i} color="info">
                                            {e.start.substring(10)}
                                        </MDBBtn>
                                    </MDBCol>
                                )
                            })
                        }
                    </MDBRow>
                </MDBModalBody>
            </MDBContainer>
        </>
    );
};