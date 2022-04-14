// #2 - Literal Method
const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);

// The methods firstName and lastName are not invoked. Instead the code is displayed.
// As properties, fistName and lastName reference functions but () are required to invoke them.
