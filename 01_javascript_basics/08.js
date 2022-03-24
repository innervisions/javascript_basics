// #08 - Convert a String to a Signed Number
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

function stringToSignedInteger(string) {
  switch (string.charAt(0)) {
    case '-': return -stringToInteger(string.slice(1));
    case '+': return stringToInteger(string.slice(1));
    default: return stringToInteger(string);
  }
}

console.log(stringToSignedInteger('4321') === 4321);      // 4321
console.log(stringToSignedInteger('-570') === -570);       // 570
console.log(stringToSignedInteger('+100') == 100);
