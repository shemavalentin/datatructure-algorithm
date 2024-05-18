let counter = 0;

function inception() {
  //debugger;
  console.log(counter);
  if (counter > 0) {
    // The base case of the recursive funtion
    return "done!"; //  The base case of the recursive funtion
  }
  counter++;
  //inception(); // when a function is called and calls are ended, it returns undefined

  // We should add return
  return inception(); // A recursive case of the function
}
inception(inception(inception(inception("done!")))); // it should be calling (done! at the last)

// WE HAVE THREE RULES TO BUILD A GOOD RECURSIVE FUNCTION

// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer to return when needed. Usually you have two returns
