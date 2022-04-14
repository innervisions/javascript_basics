// #3 - Mutation
const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);
// Will log ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'].
// After the first for loop, array1 and array2 point to the same string literals.
// In the second loop, the elements of array1 are reassigned but those of array2 are not.
// toUpperCase does not mutate string literals, which are immutable.

// FE: Changes made to an object literal would be reflected in array2.
// Changing the elements in array2 would have to be done explicitly. 
// array2[i] = array[i].toUpperCase();
// The other option is to have array2 reference the same array as array1. array2 = array1
