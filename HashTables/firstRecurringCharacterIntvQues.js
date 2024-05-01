// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It shoud

// Let's start by naive answer

function firstRecurringChar(arr) {
  for (let i = 0; i < arr.length; i++) {
    //O(n)
    for (let j = i + 1; j < arr.length; j++) {
      // O(n)
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return " Character not found!";
} //O(n^2)
// The space complexity is O(1) here

firstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4]);

// The best Answer (Using Hash Tables or Ob)
myArray = [2, 5, 1, 2, 3, 5, 1, 2, 4];

function recurArray(arr) {
  let mySet = new Set();     // Created the space in memory
  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i])) return arr[i];

    mySet.add(arr[i]);
  }

  return " No duplicate found!";
}
// Time complexity O(n)

// The space complexity here added then it O(n) and it is even faster. we don't care


// Let's implement is it using map();

function recurArray2(arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++){
        if (map[arr[i]] !== undefined) {
            return arr[i]
        } else {
            // add to array if doesn't exist

            map([arr[i]]) = i
        }
    }
    return undefined;
}

recurArray2([2, 1, 1, 2, 3, 5, 1, 2, 4]);
