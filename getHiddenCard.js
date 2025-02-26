function getHiddenCard(str, stars = 4) {
  return str.replace(str.slice(0, 12), "*".repeat(stars));
}

console.log(getHiddenCard("332340921224", 2));
console.log(getHiddenCard("12345345678", 3));
console.log(getHiddenCard("12345678123"));
