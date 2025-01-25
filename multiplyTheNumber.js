function multiplyTheNumbers(num) {
  let absoluteNumber = Math.abs(num);
  let quantity = 0;
  var i = 1;
  while (absoluteNumber / i >= 1) {
    quantity++;
    i *= 10;
  }

  return num * Math.pow(5, quantity);
}

console.log(multiplyTheNumbers(3));
console.log(multiplyTheNumbers(10));
console.log(multiplyTheNumbers(200));
console.log(multiplyTheNumbers(0));
console.log(multiplyTheNumbers(-3));
