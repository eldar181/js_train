function check(str) {
  if (str[0] == str[str.length - 1]) {
    return true;
  } else {
    return false;
  }
}
console.log(check("a"));
console.log(check("hi"));
