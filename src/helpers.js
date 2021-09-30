
function timestampTransor(num, timezone) {
    const date = new Date((num + timezone) * 1000);
    const hour = date.getUTCHours(date);
    const check = hour === 0
    return hour > 12 ? `${Math.floor(hour % 12)}PM` : `${check ? 12 : hour}AM`
}

function getWeek(num, timezone) {
    const date = new Date((num + timezone)* 1000);
    const day = date.getUTCDay();
    switch (day) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        case 7:
            return 'Sunday'
        default:
            return ' - - '
    }
}

function getTime(num, timezone) {
    const date = new Date((num + timezone) * 1000);
    const hour = date.getUTCHours();
    const min = date.getUTCMinutes();
    const check = hour === 0
    return hour > 12 ? `${hour % 12 > 9 ? hour % 12 : `0${hour % 12}`} : ${min > 9 ? min : `0${min}`} PM` : `${check ? 12 : hour > 9 ? hour : `0${hour}`} : ${min > 9 ? min : `0${min}`} AM`
}

export {timestampTransor, getWeek, getTime}