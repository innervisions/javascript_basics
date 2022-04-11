// #6 - Array Shift and Unshift
function shift(arr) {
  let value = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  if (arr.length !== 0) arr.length = arr.length - 1;
  return value;
}

function unshift(arr, ...args) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i + args.length] = arr[i];
  }

  for (let i = 0; i < args.length; i++) {
    arr[i] = args[i];
  }

  return arr.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]
