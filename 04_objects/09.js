// #9 - After Midnight Part 1
function format(value) {
  let str = String(value);
  if (str.length < 2) str = '0' + str;
  return str;
}

function timeOfDay(deltaMinutes) {
  let date = new Date(2020, 1, 1, 0, deltaMinutes);
  return format(date.getHours()) + ':' + format(date.getMinutes());
}

console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"
