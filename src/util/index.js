const moment = require('moment')

const events = [
    {
        "start": "2017-02-21T12:00:00-05:00",
        "end": "2017-02-21T12:30:00-05:00",
    },
    {
        "start": "2017-02-21T14:00:00-05:00",
        "end": "2017-02-21T16:00:00-05:00"
    },
    {
        "start": "2017-02-21T17:00:00-05:00",
        "end": "2017-02-21T17:15:00-05:00"
    },
];

const start = moment().format('2017-02-21T08:00:00-05:00');
const end = moment().format('2017-02-21T18:00:00-05:00');



function findFreeTimes(start, end, duration, events) {

    //  Duration In Millisecs
    const durationMS = moment.duration(duration, "minutes").as('milliseconds');
    const eventsFixed = []
    const freeTimes = []

    // Get meeting has been fixed

    /*  events.map((e) => {
         let eventStart = e.start
         let eventEnd = e.end
 
         if (moment(eventStart).isAfter(start) && moment(eventStart).isBefore(end)) {
             let eventFixed = { start: eventStart, end: eventEnd }
             eventsFixed.push(eventFixed)
         }
     }) */

    //OR SHORT WAY
    events.map(e => moment(e.start).isAfter(start) && moment(e.start).isBefore(end) ? eventsFixed.push({ start: e.start, end: e.end }) : null)


    let previousEnd = []

    eventsFixed.map((e, i) => { //find free times
        let eventStart = e.start;
        let eventEnd = e.end;

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

    // Get last puzzle of free time with condition(Ternary)
    moment(end).diff(previousEnd) ? freeTimes.push({ start: previousEnd, end: end }) : null

    return freeTimes;
}



const freeSlots = findFreeTimes(start, end, 30, events);


console.log(freeSlots);



module.exports = { findFreeTimes }