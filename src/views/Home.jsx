import { MDBBtn, MDBCol, MDBContainer, MDBModalBody, MDBModalHeader, MDBModalTitle, MDBRow } from "mdb-react-ui-kit";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
const moment = require('moment')


import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "../components/Dropdown";


export const Home = () => {
    const [startDate, setStartDate] = useState(new Date());


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

    function findFreeTimes(start, end, duration, events) {

        //  Duration In Millisecs
        const durationSec = moment.duration(duration, "minutes").as('seconds');
        const eventsFixed = []
        const freeTimes = []

        // Get meeting has been fixed
        // SHORT WAY
        events.map(e => moment(e.start).isAfter(start) && moment(e.start).isBefore(end) ? eventsFixed.push({ start: e.start, end: e.end }) : null)


        let previousEnd = []

        eventsFixed.map((e, i) => { //find free times
            let eventStart = e.start;
            let eventEnd = e.end;

            if ((moment(eventStart).diff(start) > durationSec) && i === 0) {
                freeTimes.push({ start: start, end: eventStart });
                previousEnd = eventEnd;
            } else if ((moment(eventStart).diff(moment(previousEnd)) > durationSec)) {
                freeTimes.push({ start: previousEnd, end: eventStart });
                previousEnd = eventEnd;
            } else {
                previousEnd = eventEnd;
            }
        })
        //--------------------------------------------------------------------//

        // const date = moment().format('LL', start)
        const yy = start.getFullYear()
        const mm = start.getMonth() + 1
        const dd = start.getDate()
        const date = `${yy}-${mm}-${dd}` //GET Date in format year-month-day

        const openingHours = end.getHours() - start.getHours()
        const openingTimesSec = moment.duration(openingHours, "hours").as('seconds')

        // console.log("======>", openingTimesSec);
        // console.log("======>", durationSec);

        const listOfFreeTimes = []

        for (let i = 0; i <= openingTimesSec; i++) {// GET list of opening hours
            if (i % durationSec == 0 && i + durationSec <= openingTimesSec) {
                let eventStart = `${date} ${moment().hour('08').minute('00').add(i, 'seconds').format("HH:mm")}`
                let eventEnd = `${date} ${moment().hour('08').minute('00').add(i + durationSec, 'seconds').format("HH:mm")}`

                listOfFreeTimes.push({ start: eventStart, end: eventEnd })

                // freeT.push(moment.duration(i, "seconds").as("minutes"))
            }
        }


        //-------------------------------------------------------------------------//

        // Get last puzzle of free time with condition(Ternary)
        moment(end).diff(previousEnd) ? freeTimes.push({ start: previousEnd, end: end }) : null

        // return freeTimes;
        return listOfFreeTimes;
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