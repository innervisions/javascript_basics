// #2 - Array Copy Part 2
// function copyArray(arr) {
//   let output = [];
//   for (let i = 0; i < arr.length; i++) {
//     output.push(arr[i]);
//   }

//   return output;
// }

function copyArray(arr) {
  return arr.slice();
}

let myArray = [1, 2, 3, 4];
const myOtherArray = copyArray(myArray);

myArray.pop();
console.log(myArray); 
console.log(myOtherArray); 

myArray = [1, 2];
console.log(myArray); 
console.log(myOtherArray); 
