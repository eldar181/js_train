function amicableNumbers(num1, num2) {
  const arr = [];
  for (let i = 1; i < num1; i++) {
    if (num1 % i === 0) {
      arr.push(i);
    }
  }
  return arr.reduce((a, b) => a + b) === num2;
}

console.log(amicableNumbers(220, 284));
console.log(amicableNumbers(220, 280));
console.log(amicableNumbers(1184, 1210));
console.log(amicableNumbers(220221, 282224));
