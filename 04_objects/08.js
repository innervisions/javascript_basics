// #8 The End is Near But Not Here
// function penultimate(string) {
//   return string.split(' ')[-2];
// }

function penultimate(string) {
  let words = string.split(' ');
  return words[words.length - 2];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"

// Negative indices don't work the same way as with strings.
// string.split(' ')[-2] is looking for a property with a key of '-2'
