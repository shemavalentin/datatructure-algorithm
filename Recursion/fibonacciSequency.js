// Given a number N, return the index value of the fibonacci sequency where the sequency
// is:
// 0,1,1,2,3,5,8,13,21,34,55,89,144...

// The pattern of the sequency is that each value is the sum of the 2 previous values.
// That means that for N = 5 -> 2+3

function fibonacciIterative(n) {
  // O(n+2) Cze we skipped 2 element but by removing indixes it is O(n)
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[n];
}

fibonacciIterative(3);

//Fibonacci function using Recursion

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2); // O(2^n). The time complexity increases as we raise up inputs and it takes longer and longer.
  //It is readable but it is not an ideal solution.
}

fibonacciRecursive(43);
