function quote(fighter) {
  // your code here
  if (fighter.toLowerCase() === "george saint pierre") {
    return "I am not impressed by your performance.";
  } else if (fighter.toLowerCase() === "conor mcgregor") {
    return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
  }
}

console.log(quote("george saint pierre"));
console.log(quote("conor mcgregor"));
console.log(quote("George Saint Pierre"));
console.log(quote("Conor McGregor"));
