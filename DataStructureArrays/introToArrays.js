const strings = ["a", "b", "c", "d"];
// 4 items to store
// on a 32 bit system, we 4 shelves to store the letter a

// it is now: 4*4 = 16 byte of storage

strings[2];

// Methods used in JS

// push
strings.push("e"); // O(1)

// pop
strings.pop(); // O(n)

// To add a letter x at the beginning of the array

// unshift

strings.unshift("x"); // O(n)
console.log(strings);

// splice(): used to insert something in between the array where we want

strings.splice(2, 0, "alien"); // O(n)
