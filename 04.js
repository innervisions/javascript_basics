// #4 - String Assignment
const name = "Bob";
const saveName = name;
name.toUpperCase();
console.log(name, saveName); //logs "Bob Bob"

// toUpperCase does not mutate the caller.
// JS string primatives are immutable
