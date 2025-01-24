function divisibleBy(numbers, divisor) {
  let a = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor == 0) {
      a.push(numbers[i]);
    }
  }
  return a;
}
