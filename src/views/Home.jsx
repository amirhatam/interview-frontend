import { MDBBtn, MDBCol, MDBContainer, MDBModalBody, MDBModalHeader, MDBModalTitle, MDBRow } from "mdb-react-ui-kit";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "../components/Dropdown";
import DatePicker from "react-datepicker";
const moment = require('moment')
import { findFreeTimes } from "../components/FreeSlots";





export const Home = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [timeList, setTimeList] = useState([]);
    const [duration, setDuration] = useState(30);

    const yy = startDate.getFullYear()
    const mm = startDate.getMonth() + 1
    const dd = startDate.getDate()
    const date = `${yy}-${mm}-${dd}` //GET Date in format year-month-day


    // console.log("===>", moment(`${yy}-${mm}-${dd}`));


    const start = new Date(`${date} 08:00`);
    const end = new Date(`${date} 18:00`);
    // const start = new Date('2022-04-22 08:00');
    // const end = new Date('2022-04-22 18:00');


    const events = [
        {
            "start": "2022-04-22 12:00",
            "end": "2022-04-22 12:30",
        },
        {
            "start": "2022-04-22 14:00",
            "end": "2022-04-22 16:00"
        },
        {
            "start": "2022-04-22 17:00",
            "end": "2022-04-22 17:30"
        },
    ];

    const freeSlots = findFreeTimes(start, end, duration, events, timeList, setTimeList);

    // console.log(freeSlots);


    // console.log("timeList", timeList);

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
                            timeList.map((e, i) => {
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