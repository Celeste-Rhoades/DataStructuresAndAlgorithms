// Write a function, allUnique, that takes in an array. The function should return a boolean indicating whether or not the array contains unique items.

const allUnique = items => {
  let unique = new Set(items);
  return unique.size === items.length;
};

allUnique(["q", "r", "s", "a"]); // -> true
allUnique(["q", "r", "s", "a", "r", "z"]); // -> false
