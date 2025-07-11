const pairs = elements => {
  let unique = [];
  for (let i = 0; i < elements.length; i++) {
    for (let j = i + 1; j < elements.length; j++) {
      const pair = [elements[i], elements[j]];
      unique.push(pair);
    }
  }
  return unique;
};

console.log(pairs(["a", "b", "c"])); // ->
// [
//    ["a", "b"],
//    ["a", "c"],
//    ["b", "c"]
// ]
