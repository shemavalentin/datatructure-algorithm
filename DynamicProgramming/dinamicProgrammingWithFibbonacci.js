//0,1,1,2,3,5,8,13,21,34,55,89,144...

let calculations = 0;
function fibonacci(n) {
  // O(2^n)
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

// DYNAMIC PROGRAMMING RULES => Divide & Conquer + Memoization

//  RULES TO FOLLOW TO SEE IF THE PROBLEM CAN USE DYNAMIC PROGRAMMING TO OPTIMIZE IT

// 1. Can be divided into subproblem
// 2. Recursive solution
// 3. Are there repetitive subproblems?
// 4. Memoize subproblem
// 5. Demand a rise from your your boss.

let calculation = 0;

function fibonacci(n) {
  //   calculation++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 2) + fibonacci(n - 1);
}

//fibonacci(7);

// Improved fibonacci function, here the time complexity O(n)
// One drowback is that here we are increasing space complexity but here we saved a lot of time
// and sometimes we need to compansate the time to save the time.

function fibonacciBooster() {
  // O(n)
  let cache = {};
  return function fib(n) {
    calculation++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const improvedFib = fibonacciBooster();
console.log("slow", fibonacci(35));
console.log("DP", improvedFib(35));
console.log("we did " + calculation + " calculations ");
