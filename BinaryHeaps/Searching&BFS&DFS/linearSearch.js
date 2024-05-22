// In computer science, a linear search or sequential search is a method of find a target or a value
// within a list.

// In the best case cenarios where the target is at nearest index it O(1)
// and in the worst case it is O(n) becouse we will need to loop over every thing

var beasts = ["Centaur", "Godzilla", "Mosura", "Minotaur", "Hydra", "Nessie"];

// Now to find where is Godzilla
beasts.indexOf("Godzilla");
// or
beasts.findIndex(function (item) {
  return item == "Godzilla";
});
