// #04 - Local vs. Global Part 4

var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

// Will log 'This is Global'. The function is accessing the globally scoped myVar.
