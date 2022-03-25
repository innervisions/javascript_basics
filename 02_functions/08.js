// #08 - Arguments Part 3
let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

// Console will log [1, 2, 10].
// Objects, including arrays, are passed by reference.
// a and b point to the same object, which is modified on line 5.
