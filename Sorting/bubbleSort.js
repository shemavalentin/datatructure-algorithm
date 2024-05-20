const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// let's code my own bubble sort algorithm
function bubbleSort(array) {
  //creating variable to avoid repetion
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      // array[j] = 99 as j = 0, and j+ 1 = 44
      if (array[j] > array[j + 1]) {
        // Swap numbers
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
