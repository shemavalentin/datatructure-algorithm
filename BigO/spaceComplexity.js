// Example

function booooo(n) {
  for (let i = 0; i < n.lenght; i++) {
    console.log("boooooo");
  }
}

booooo([1, 2, 3, 4, 5]); // O(1)

//Example2

function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return history;
}

arrayOfHiNTimes(6); // O(n)     Becouse I'm create space of an Array Cfr Cheat Sheets

// What Causes Space Complexity?
// • Variables
// • Data Structures
// • Function Call
// • Allocations
