// Given the following Arrays or collection. find a pair of values that add up to 8.

const array1 = [1, 2, 3, 9];
const array2 = [1, 2, 4, 4];

// Naive solution
function hasPairWithSum(arr, sum) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum);
      return true;
    }
  }
  return false;
}

// Better
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }

  return false;
}

hasPairWithSum2([6, 4, 3, 2, 1, 7], 9);

// practice
const mySet = new Set();
mySet.add(7);
mySet.add(10).add("leaning typeScript");

// to find  the sum, is the array sorted, can the array size increase

// Naive
function hasPairAddUp(arrayx, tot, retarr) {
  const len = arrayx.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      // making comparison

      if (arrayx[i] + arrayx[j] === tot);
      retarr = (arrayx[i], arrayx[j]);
      console.log(retarr);
      return true;
    }
  }
  return false; // O(n)
}

// Better Solution

function twoNumAdded(ar, tot) {
  const mySet = new Set();
  const len = ar.length;
  for (var i = 0; i < len; i++) {
    // comparison
    if (mySet.has(ar[i])) {
      return true;
    }
    mySet.add(tot - ar[i]);
  }
  return false;
}

twoNumAdded([6, 4, 3, 2, 7], 9);
// O(1);
