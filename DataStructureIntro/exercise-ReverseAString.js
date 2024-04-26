// Create a function that reverses a string:
// Hi My name is Valentin

// Ans

function reverse(str) {
  // check inputs

  if (!str || str.length < 2 || typeof str !== "string") {
    return " Hmmm, something went wrong!";
  }
  // Otherwise do some operation

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i <= length - 1; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards);

  return backwards.join("");
}

reverse("Hello, my name is Valentin");

// The other way

function reversestr(str) {
  // Checking inputs
  if (!str || str.length < 2 || typeof str !== "string") {
    return " Something went wrong";
  }

  // Conduct some operation

  const reversing = [];
  const totalChars = str.length - 1;
  for (let i = totalChars; i >= 0; i--) {
    reversing.push(str[i]);
  }
  return reversing.join("");
}
reversestr("Hello my name is Valentin");

// More readable way using built in method

function moreReadablestr(str) {
  // Check the inputs
  if (!str || str.length < 2 || typeof str !== "string") {
    return " Wrong!!";
  }
  return str.split("").reverse().join("");
}
moreReadablestr("Hello, my name is Valentin");

// Using ES6

const reverse = (str) => str.split("").reverse().join("");

reverse("Valentin");

// More fancy

const reverse2 = (str) => [...str].reverse().join("");
reverse2("My name is Valentin");
