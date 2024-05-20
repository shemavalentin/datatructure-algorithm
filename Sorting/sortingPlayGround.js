const letters = ["a", "b", "z", "e", "r", "b"];
const basket = [2, 65, 34, 2, 1, 7, 8];

// This will generate insane result.

// To sort it correctly we have to the following
basket.sort(function (a, b) {
  return a - b;
});

//======================
const months = ["March", "Jan", "Feb", "Dec"];
months.sort(function (a, b) {
  return a - b;
});
