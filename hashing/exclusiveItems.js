// Write a function, exclusiveItems, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in either array but not both arrays.

// You may assume that each input array does not contain duplicate elements.

const exclusiveItems = (a, b) => {
  const difference = [];
  const setA = new Set(a);
  const setB = new Set(b);

  for (let item of a) {
    if (!setB.has(item)) {
      difference.push(item);
    }
  }

  for (let item of b) {
    if (!setA.has(item)) {
      difference.push(item);
    }
  }

  return difference;
};

exclusiveItems([4, 2, 1, 6], [3, 6, 9, 2, 10]); // -> [4,1,3,9,10]
exclusiveItems([2, 4, 6], [4, 2]); // -> [6]
