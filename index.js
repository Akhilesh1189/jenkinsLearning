const moment = require("moment");

function intervalFunc() {
let startTime = moment("07:00 am", "HH:mm a");
let endTime = moment("07:30 am", "HH:mm a");

// calculate total duration
let duration = moment.duration(endTime.diff(startTime));

// duration in hours
let hours = parseInt(duration.asHours());

// duration in minutes
var minutes = parseInt(duration.asMinutes()) % 60;
console.log('minutes', minutes)
}

setTimeout(intervalFunc, 3000);
