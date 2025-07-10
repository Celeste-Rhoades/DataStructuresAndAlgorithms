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
