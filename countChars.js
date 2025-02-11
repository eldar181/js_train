function countChars(str, char) {
  let count = 0;

  let i = 0;
  while (i < str.length) {
    if (str[i] === char.toLowerCase() || str[i] === char.toUpperCase()) {
      count += 1;
    }
    i += 1;
  }
  return count;
}
console.log(countChars("Welcome", "e"));
console.log(countChars("WElComE", "E"));
