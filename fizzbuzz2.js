const fizzBuzz = n => {
  let nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      nums.push("fizzbuzz");
    } else if (i % 3 === 0) {
      nums.push("fizz");
    } else if (i % 5 === 0) {
      nums.push("buzz");
    } else {
      nums.push(i);
    }
  }
  return nums;
};
