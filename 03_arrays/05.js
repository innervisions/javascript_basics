// #5 - Array Pop and Push
function pop(arr) {
  let poppedValue = arr[arr.length - 1];
  if (arr.length !== 0) arr.length = arr.length - 1;
  return poppedValue;
}

function push(arr, ...values) {
  for (let i = 0; i < values.length; i++) {
    arr[arr.length] = values[i];
  }
  
  return arr.length;
}


// pop
const array1 = [1, 2, 3];
console.log(pop(array1));                        // 3
console.log(array1);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// push
const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6));              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0
