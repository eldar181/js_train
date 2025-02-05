function typeValidation(variable, type) {
  // Your code should be here ;)
  return typeof variable === type;
}

console.log(typeValidation(42, "number"));
console.log(typeValidation("42", "number"));
