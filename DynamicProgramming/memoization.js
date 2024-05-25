//This function without memoization will take longer

function addto80(n) {
  console.log("Long time");
  return n + 80;
}

// This function is memoizing the value already calculated

let cache = {}; // Empty object
function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log("long time");
    cache[n] = n + 80;
    return cache[n];
  }
}

console.log("1", memoizedAddTo80(5)); // It will take long time
console.log("2", memoizedAddTo80(6)); // will take long time
console.log("3", memoizedAddTo80(6)); // This won't take long cze it was memoized before

// Memoization is a specifique form of caching to remember a solution to a sub problem
// so you don't repeat calculations.

// We can emprove this function by avoid global polution.
// means avoiding global variables
// We will use closures in JavaScript

function memoizedAddTo80() {
  let cache = {};
  // Using closures we use return a function
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("long time");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}
const memoized = memoizedAddTo80();

console.log("1", memoized(5)); // It will take long time
console.log("2", memoized(6)); // will take long time
console.log("3", memoized(6));
