function remove(string) {
  return string.replace(/(\!+)$/g, "").trim();
}

console.log(remove("Hi!"));
console.log(remove("Hi!!!"));
console.log(remove("Hi! Hi!"));
console.log(remove("!Hi!"));
