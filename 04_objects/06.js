// #6 - Array Object Part 2
const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

console.log(average(myArray)); // 10

// The sum includes both elements of the array, as well as the non-element properties.
// However myArray.length is only equal to the number of elements, which is 2. 

function averageFE(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / Object.keys(array).length;
}

console.log(averageFE(myArray)); // 5
