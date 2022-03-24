// #2 - Conditionals Part 1
const myBoolean = true;
const myString = "hello";
const myArray = [];
const myOtherString = "";

if (myBoolean) {
  console.log("Hello"); // logs "Hello"
}

if (!myString) {
  console.log("World"); // Does not execute.
}

if (!!myArray) {
  console.log("World"); // Logs "World"
}

if (myOtherString || myArray) {
  console.log("!");     // Logs "!"
}
