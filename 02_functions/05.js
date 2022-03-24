// #05 - Variable Scope
function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// Will log 'This is global'.
// Variables that are not declared are made properties of the global object.
