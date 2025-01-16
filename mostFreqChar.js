// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

const mostFrequentChar = s => {
  // todo
  const count = {};
  for (let letter of s) {
    if (!(letter in count)) {
      count[letter] = 0;
    }
    count[letter] += 1;
  }
  let best = null;
  for (letter of s) {
    if (best === null || count[letter] > count[best]) {
      best = letter;
    }
  }

  return best;
};
console.log(mostFrequentChar("bookeeper"));
