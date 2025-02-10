function convertText(str) {
  if (str === "") {
    return "";
  } else if (str[0] == str[0].toUpperCase()) {
    return str;
  } else {
    return str.split("").reverse().join("");
  }
}
// END

console.log(convertText(""));
console.log(convertText("Welcome"));
console.log(convertText("welcome"));
