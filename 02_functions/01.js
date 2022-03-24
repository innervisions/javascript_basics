// #01 - Local vs. Global Part 1

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

// Will log "This is global". The myVar being logged is the one in the global scope.
