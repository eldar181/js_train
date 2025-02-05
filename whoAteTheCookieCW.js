function cookie(x) {
  // ...
  const type = typeof x;
  if (type == "string") {
    return "Who ate the last cookie? It was Zach!";
  } else if (type == "number") {
    return "Who ate the last cookie? It was Monica!";
  } else {
    return "Who ate the last cookie? It was the dog!";
  }
}

console.log(cookie("hello"));
console.log(cookie(25.3));
console.log(cookie(true));
console.log(cookie(33));
