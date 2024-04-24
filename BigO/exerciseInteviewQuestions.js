//Given 2 arrays, create a function that let's a user know (true/false)
// whether these two arrays contain any common items
// For Example:
// const array1 = [ 'a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false.
//----------------------

// 2 parameters which are arrays. No size limit (We may have asked to interviewer
// may be a string, an object if inputs will always be arrays)
// return true or false

// Already done the step1 on Cheet sheet

//  step 2: very inportant( Make sure you double check)

// step 3: the goal of question in order to know what to care about.

// Step4 : Don't be annoying asking too many small questions and keep in mind time limit.

// Step5: Start with the naive/ brute force approach
// Looking the above question it is obvious that they are nested for loops
// Their big O is O(n^2) which is not good but you say it to the interviewer not code it.
// It shows that you are thinking critically.

// Step6: Tell them why the brute force solution would not be good

// Let's code through the brute force solution to get more details

// Naive

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];

function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}
// O(a*b) It's abit of trick but cze both the array aren't the same size we to do like this.
// and it is very slow.

// O(1) === Space Complexity ( bcze we didn't declare any variable to consume space, we just used parameters)
containsCommonItem(array1, array2);

// When it is like this, we came up with the other resonning
// Here apply Hash Tables ( in JavaScript is called Objects);

// Let's find a faster solution

// ------------------------------------------

const arraya = ["a", "b", "c", "x"];
const arrayb = ["z", "y", "x"];

// Here we need to convert the first array to object.  This a common pattern used alot
// When it comes to Time Complexity.

// array1 ==> obj {
// a: true,
// b: true,
// c: true,
// x: true
//}

// array2[index] === obj.properties

// Step 8: before we start coding .......
function containsCommonItem2(arrx, arry) {
  // loop through first array and create object where properties === items in the array

  let map = {};
  for (let i = 0; i < arrx.length; i++) {
    if (!map[arrx[i]]) {
      // If 'a' doesn't exist we are going to add it
      const item = arrx[i];
      map[item] = true;
    }
  }
  //console.log(map);

  // Loop through second array and check if item in second array exists on created object.
  // Now we need to transform O(a*b) to O(a+b) which is more faster
  // Step 9: Modularize your ....

  for (let j = 0; j < arry.length; j++) {
    if (map[arry[j]]) {
      return true;
    }
  }
  return false;

  //step 10: Start actually
}

// O(a + b)  This is better when it comes to Time complexity.
// Here we have two loops One after the other whether to be nested.

// O(a) === Space Complexity ( You can tell the interviewer that even though this solution is faster
// is memory consumming and memory is expensive)

containsCommonItem2(arrx, arry);

// The other way to make the function more readable and to tell the interviewer what to google
// to be even more cleaner

function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

containsCommonItem3(arraya, arrayb);
