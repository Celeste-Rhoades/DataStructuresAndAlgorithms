// Write a function, pairs, that takes in an array as an argument. The function should return an array contain all unique pairs of elements.

// You may return the pairs in any order and the order of elements within a single pair does not matter.

// You can assume that the input array contains unique elements.

const pairs = elements => {
  const result = [];
  for (let i = 0; i < elements.length; i++) {
    for (let j = i + 1; j < elements.length; j++) {
      const arr = [elements[i], elements[j]];
      result.push(arr);
    }
  }
  return result;
};

pairs(["a", "b", "c"]); // ->
// [
//    ["a", "b"],
//    ["a", "c"],
//    ["b", "c"]
// ]
