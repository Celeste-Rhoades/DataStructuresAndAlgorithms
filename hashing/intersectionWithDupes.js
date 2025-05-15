// Write a function, intersectionWithDupes, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are common to both input arrays. The elements in the result should appear as many times as they occur in both input arrays.

// You can return the result in any order.

const intersectionWithDupes = (a, b) => {
  const count1 = eleCount(a);
  const count2 = eleCount(b);
  let result = [];
  for (ele in count1) {
    if (ele in count2) {
      for (let i = 0; i < Math.min(count1[ele], count2[ele]); i++) {
        result.push(ele);
      }
    }
  }
  return result;
};

intersectionWithDupes(["a", "b", "c", "b"], ["x", "y", "b", "b"]); // -> ["b", "b"]

intersectionWithDupes(["q", "b", "m", "s", "s", "s"], ["s", "m", "s"]); // -> ["m", "s", "s"]
