// #07 - Arguments Part 2
let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// Console will again log 7. The parameter a for myValue exists
// in the scope of the function and shadows the global value a.
