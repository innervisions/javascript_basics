// #3 - Array Concat Part 2
function concat(...args) {
  const newArray = [];

  for (let argIndex = 0; argIndex < args.length; argIndex += 1) {
    let currentArg = args[argIndex];
    if (Array.isArray(currentArg)) {
      let arraySize = currentArg.length;
      for (let arrayIndex = 0; arrayIndex < arraySize; arrayIndex += 1) {
        newArray[newArray.length] = currentArg[arrayIndex];
      }
    } else {
      newArray[newArray.length] = currentArg;
    }
  }

  return newArray;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]
