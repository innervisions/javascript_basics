// #02 - Local vs. Global Part 2

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

// Will log "This is local." The myVar being logged is in the local function scope.
// Within the function, it shadows the globally scoped variable.
