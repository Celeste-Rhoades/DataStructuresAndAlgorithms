// Write a function, longestWord, that takes in a sentence string as an argument. The function should return the longest word in the sentence. If there is a tie, return the word that occurs later in the sentence.

// You can assume that the sentence is non-empty.

const longestWord = sentence => {
  // todo
  let split = sentence.split(" ");
  let word = "";
  for (words of split) {
    if (words.length >= word.length) {
      word = words;
    }
  }

  return word;
};

longestWord("what a wonderful world"); // -> 'wonderful'
longestWord("have a nice day"); // -> 'nice'
