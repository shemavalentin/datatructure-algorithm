//0,1,1,2,3,5,8,13,21,34,55,89,144...

let calculations = 0;
function fibonacci(n) {
  calculations++;
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 2) + fibonacci(n - 1);
}

fibonacci(7); // O(2^n), It is taking too long as we increase number of calculations
// As you change the index too it computes a lot of calculations.

// Note: The above function is not efficient. we can optimise it from O(2^n) to O(n : linear time)
// By using memoization. Optimal solution.
