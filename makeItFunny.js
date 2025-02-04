const makeItFunny = (str, n) =>
  str
    .split("")
    .map((v, i) => ((i + 1) % n === 0 ? v.toUpperCase() : v))
    .join("");

console.log(makeItFunny("I never look back", 3));
console.log(makeItFunny("I never look back", 5));
