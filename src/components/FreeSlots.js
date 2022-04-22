const moment = require('moment')


function findFreeTimes(start, end, duration, events, timeList, setTimeList) {


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
            // timeList.push({ start: eventStart, end: eventEnd })
            // freeT.push(moment.duration(i, "seconds").as("minutes"))
        }
    }



    if (timeList.length != listOfFreeTimes.length) {

        setTimeList(listOfFreeTimes)
    }


    //-------------------------------------------------------------------------//

    // Get last puzzle of free time with condition(Ternary)
    moment(end).diff(previousEnd) ? freeTimes.push({ start: previousEnd, end: end }) : null

    // return freeTimes;

    // console.log(freeTimes);

    return listOfFreeTimes;
}




module.exports = { findFreeTimes }