// #1 - Literal
const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a];
myObject.a;

// myObject[a] raises a ReferenceError, as the variable a has not been declared.
