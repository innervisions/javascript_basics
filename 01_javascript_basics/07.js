// #07 - Converting a String to a Number
const DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9
}

function stringToInteger(string) {
  let integer = 0;
  for (let index = 0; index < string.length; index++) {
    let digit = DIGITS[string.charAt(index)];
    let power = string.length - 1 - index;
    integer += digit * (10 ** power);
  }
  return integer;
}

console.log(stringToInteger('4321') === 4321);      // 4321
console.log(stringToInteger('570') === 570);       // 570
