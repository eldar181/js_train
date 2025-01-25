function hello(name) {
  if (name == undefined || name == "") {
    return "Hello, World!";
  } else {
    name = name.toLowerCase();

    return `Hello, ${name.charAt(0).toUpperCase() + name.slice(1) + "!"}`;
  }
}

console.log(hello(""));
console.log(hello("aLice"));
console.log(hello());
