// #06 - Arguments Part 1
let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

// Console will log 7.
// Javascript primitives are immutable & passed by value.
// a and b do not point to them same "7".
