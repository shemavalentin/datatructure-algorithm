// In selection sort we start by the first number in an rray considered as the smallest
// and the next scan selection will keep on scanning the next to see if it is less than
// the previous number in the list.

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    //set current index as minimum

    let min = i;
    let temp = array[i];
    //let scan the next number less than the previous to start and keep on going
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        //Update minimum if current is lowert than what we had previously
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}
selectionSort(numbers);
console.log(numbers);
