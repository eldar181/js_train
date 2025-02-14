function findSubstringIndex(str, substring) {
  if (str.includes(substring)) {
    return str.indexOf(substring);
  } else {
    return -1;
  }
}
console.log(findSubstringIndex("Hello", "ll"));
console.log(findSubstringIndex("Hello", "ww"));
