// #5 - Arithmetic Integer
let rlSync = require('readline-sync');
let firstNumber = parseInt(rlSync.question('Enter the first number: '));
let secondNumber = parseInt(rlSync.question('Enter the second number: '));

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(`${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`);
