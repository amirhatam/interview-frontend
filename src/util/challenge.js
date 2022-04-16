const moment = require("moment");


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

module.exports = { findFreeTimes }


