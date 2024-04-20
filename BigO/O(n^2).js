// Log all pairs of array. (A question that might be asked in interview)

const boxes = [1, 2, 3, 4, 5];

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairsOfArray(boxes);

// 1 1, 1 2, 1 3, 1 4, 1 5, 2 1, 2 2, 2 3, 2 4,
//2 5, 3 1, 3 2, 3 3, 3 4, 3 5, 4 1, 4 2, 4 3, 4 4, 4 5, 5 1, 5 2, 5 3, 5 4, 5 5

// What is the bigO the above function

// => A RULE OF THUMB: When you see nested loops whether to do addition(+)
// => you do Multiplication(*)

O(n * n) === O(n ^ 2); // Here the performance is slow cze as the number of elements increases
// the number of operations also increase significantly.( Horrible ) it increases quadratically
// In interview you are likely to be asked to make it faster to may be O(n)

// RULE No3: Different terms for inputs

function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach(function (boxes) {
    console.log(boxes);
  }); // O(n) or O(a)

  boxes2.forEach(function (boxes) {
    console.log(boxes);
  }); // O(n) or O(b)
}
O(a + b); // RULE of thumb: Any step that happen with the same indentetion you add

// If these loops were nested, the big O would be multiplication

O(a * b); // RULE of thumb: Any thing that happens with indentation that is
// that is nested, you multiply. different input should have different variables
