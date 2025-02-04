function validateCode(code) {
  //your code here
  return /^[1-3]/.test(code);
}

console.log(validateCode(123));
console.log(validateCode(248));
console.log(validateCode(8));
console.log(validateCode(321));
console.log(validateCode(9453));
