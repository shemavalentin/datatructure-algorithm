// Let's say you are working for Twitter, and your boss tells you to build
// a feature that is next someine's name and retrieve their most recent tweets
// and their oldest tweets.

// Without first think of coding let's see first:

// Find 1st, Find Nth ....

const array = ["hi", "my", "daughter"];
array[0]; // O(1)
array[array.length - 1]; // (1)

// O(1): constant time
// but let's say the boss tells us to compare the dates like the following

const arraydate = [
  {
    tweet: "hi",
    date: 2012,
  },
  {
    tweet: "hi",
    date: 2014,
  },
  {
    tweet: "hi",
    date: 2018,
  },
];

// And this will be nested loops cze we will be comparing each tweet with the next other loops
// date with other dates
// The big O will be

O(n ^ 2);

// You might be asked the following question in the interview to calculate the big O.

"Helloshedohufueheyyyfhuuiwoie".length; // Here the big O is O(1)
O(1);

// Some times, Readability may be matter than Scalability
// Sometimes, Time complexity may be less important than Space complexity.
// This is something we have to be careful

// QUOTE
// " Premature optimization can be a root of the evil"
