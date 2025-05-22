const factorial = n => {
  const base = 1;
  if (n <= 1) return base;
  const result = n * factorial(n - 1);
  return result;
};
console.log(factorial(3));
