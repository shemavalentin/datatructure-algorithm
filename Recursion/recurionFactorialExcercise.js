// Write two functions that finds the factorial of
//any Number. One should use recursive the other should just use for loop;

function findFactorialRecursive(number) {
  // if here we consider to start with number = 5

  // Input check1
  if (number === 2) {
    return 2;
  }

  // Input check2
  if (number < 2) {
    return 1;
  }
  // The time complexity here is O(n) as it keeps calling the function untill it is 2
  return number * findFactorialRecursive(number - 1);
  //       5* (findFactorialRecursive(4))
}
findFactorialRecursive(5);

function findFactorialIterative(number) {
  let answer = 1;

  // Input check1
  if (number === 2) {
    answer = 2;
  }

  // Input check2
  if (number < 2) {
    answer = 1;
  }

  for (let i = 2; i <= number; i++) {
    // O(n) as there is a for loop
    answer * i;
  }
  return answer;
}

findFactorialIterative(5); // 5*4*3*2 but 1! equals 1 that's why we don't need to put it there.
