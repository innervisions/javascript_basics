// #03 - Local vs. Global Part 3

var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

// Will log 'This is local. The myVar being reassigned in the function is the globally
// scoped one declared on line 3.
