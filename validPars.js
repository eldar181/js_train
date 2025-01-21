function validParentheses(str) {
  let count = 0;
  for (const c of str) {
    if (c === "(") {
      count++;
    } else if (c === ")") {
      count--;
      if (count < 0) {
        return false;
      }
    }
  }

  return count === 0;
}

console.log(validParentheses("(Hello)"));
console.log(validParentheses("(hello)hi-hi!)"));
console.log(validParentheses("(ok))ok("));
