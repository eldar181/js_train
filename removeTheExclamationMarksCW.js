function remove(string) {
  //coding and coding....
  const regExp = /!/g;
  const newWord = string.replace(regExp, "");
  return newWord + "!".trim();
}

console.log(remove("Hi!!!"));
console.log(remove("Hello!"));
console.log(remove("Hi! Hi!"));
console.log(remove("Hi"));
