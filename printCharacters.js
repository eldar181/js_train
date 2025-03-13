function printCharacters(str) {
  if (str.length < 3) {
    for (let i = 0; i < str.length; i++) {
      console.log(str[i]);
    }
  } else {
    for (let i = 0; i < 3; i++) {
      console.log(str[i]);
    }
  }
}
console.log(printCharacters("Hello"));
console.log(printCharacters("hi"));
