function mySubstr(str, num) {
  let result = "";
  const index = num - 1;
  let i = 0;
  while (i <= index) {
    result = `${result}${str[i]}`;
    i += 1;
  }
  return result;
}
console.log(mySubstr("Hello", 3));
console.log(mySubstr("If I look back I am lost", 1));
console.log(mySubstr("If I look back I am lost", 7));
