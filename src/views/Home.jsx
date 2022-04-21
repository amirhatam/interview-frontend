import { MDBContainer, MDBModalBody, MDBModalHeader, MDBModalTitle } from "mdb-react-ui-kit";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
const moment = require('moment')


import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "../components/Dropdown";


export const Home = () => {
    const [startDate, setStartDate] = useState(new Date());

    // let res = moment().format(JSON.stringify(startDate))
    // let date = moment().format(JSON.stringify(startDate))
    // let date = startDate

    console.log("===>", moment(startDate));
    // console.log("===>", moment(date));
    // console.log("===>", JSON.stringify(moment(date)));

    // const start = moment(startDate);
    const start = moment().format('2022-04-20T08:00:00-05:00');
    const end = moment().format('2022-04-20T18:00:00-05:00');

    // console.log(start);




    const events = [
        {
            "start": "2022-04-20T12:00:00-05:00",
            "end": "2022-04-20T12:30:00-05:00",
        },
        {
            "start": "2022-04-20T14:00:00-05:00",
            "end": "2022-04-20T16:00:00-05:00"
        },
        {
            "start": "2022-04-20T17:00:00-05:00",
            "end": "2022-04-20T17:15:00-05:00"
        },
    ];

    function findFreeTimes(start, end, duration, events) {

        //  Duration In Millisecs
        const durationMS = moment.duration(duration, "minutes").as('milliseconds');
        const eventsFixed = []
        const freeTimes = []

        // Get meeting has been fixed
        // SHORT WAY
        events.map(e => moment(e.start).isAfter(start) && moment(e.start).isBefore(end) ? eventsFixed.push({ start: e.start, end: e.end }) : null)


        let previousEnd = []

        eventsFixed.map((e, i) => { //find free times
            let eventStart = e.start;
            let eventEnd = e.end;
            // console.log("=>", moment(eventStart).diff(start));

            if ((moment(eventStart).diff(start) > durationMS) && i === 0) {
                freeTimes.push({ start: start, end: eventStart });
                previousEnd = eventEnd;
            } else if ((moment(eventStart).diff(moment(previousEnd)) > durationMS)) {
                freeTimes.push({ start: previousEnd, end: eventStart });
                previousEnd = eventEnd;
            } else {
                previousEnd = eventEnd;
            }
        })


        const openTimes = parseInt(moment().startOf(start).from(end))
        // const openTimesMS = moment.duration(openTimes, "hours").as('milliseconds')
        // console.log("======>", openTimesMS);
        // console.log("======>", durationMS);
        console.log("======>", openTimes);

        // const freeT = []
        let freeT = 0

        // let res = openTimesMS / durationMS
        // for (let i = 0; i <= openTimesMS; i++) {
        //     if (i % durationMS == 0) {
        //         freeT++
        //     }

        // }
        // console.log("======>", freeT);

        // console.log("======>", new Date(new Date(start)));

        // Get last puzzle of free time with condition(Ternary)
        moment(end).diff(previousEnd) ? freeTimes.push({ start: previousEnd, end: end }) : null

        return freeTimes;
    }



    const freeSlots = findFreeTimes(start, end, 30, events);


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
                        <Dropdown />
                    </div>

                </MDBModalBody>
            </MDBContainer>
        </>
    );
};