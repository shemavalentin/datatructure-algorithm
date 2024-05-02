// Given  an array

// const basket = ['apples', ' grapes', 'pears'];

// linked list: apples-- > grapes-- > pears

// Just a pseudocode to describe what are pointers

// apples
//   8947 -- > grapes
//               8742 -- > pears
//                           372 --> null
let obj1 = { a: true };
let obj2 = obj1;
obj1.a = "booya";

delete obj1;

obj2 = "Hello";

//console.log('1', obj1);
console.log("2", obj2);

// Becouse Javascript is what we garbage collection it will automatically delete
// the non used space/memory but there other low level languages where you
// need to delete the allocated space manually.
