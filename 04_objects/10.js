// #10 - After Midnight Part 2
const MILLISECONDS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;

function afterMidnight(timeString) {
  let timeArr = timeString.split(':');
  let hour = Number.parseInt(timeArr[0], 10);
  let minutes = Number.parseInt(timeArr[1], 10);

  let midnight = new Date(2020, 1, 1, 0, 0);
  let currentTime = new Date(2020, 1, 1, hour, minutes);
  let millisecondsAfterMidnight = currentTime.getTime() - midnight.getTime();
  return millisecondsAfterMidnight / MILLISECONDS_PER_SECOND / SECONDS_PER_MINUTE;
}

function beforeMidnight(timeString) {
  let timeArr = timeString.split(':');
  let hour = Number.parseInt(timeArr[0], 10);
  let minutes = Number.parseInt(timeArr[1], 10);
  if (hour === 0 && minutes === 0) return 0;
  let midnight = new Date(2020, 1, 2, 0, 0);
  let currentTime = new Date(2020, 1, 1, hour, minutes);
  let millisecondsBeforeMidnight = midnight.getTime() - currentTime.getTime();
  return millisecondsBeforeMidnight / MILLISECONDS_PER_SECOND / SECONDS_PER_MINUTE;
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686
