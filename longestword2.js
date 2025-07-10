const longestWord = sentence => {
  // todo
  let split = sentence.split(" ");
  let word = "";
  for (word of split) {
    if (word.length >= word.length) {
      word = word;
    }
  }

  return word;
};

longestWord("what a wonderful world"); // -> 'wonderful'
longestWord("have a nice day"); // -> 'nice'
