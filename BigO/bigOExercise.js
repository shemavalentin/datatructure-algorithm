function funChallenge(input) {
  let a = 10; // O(1)   it means no matter how input is long, this line will run once.
  a = 50 + 3; // O(1)    it means no matter how input is long, this line will run once.

  for (let i = 0; i < input.length; i++) {
    //O(n)   // This is a for loop it will loop over input O(imput) multiple times
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}
O(3 + 4n);

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}
// Big O = 4 + 7n = O(n)
