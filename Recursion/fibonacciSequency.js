// Given a number N, return the index value of the fibonacci sequency where the sequency
// is:
// 0,1,1,2,3,5,8,13,21,34,55,89,144...

// The pattern of the sequency is that each value is the sum of the 2 previous values.
// That means that for N = 5 -> 2+3

function fibonacciIterative(n) {}

fibonacciIterative(3);

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

fibonacciRecursive(3);
