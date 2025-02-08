function calculateTip(amount, rating) {
  let tip = 0;
  let venture = rating.toLowerCase();
  switch (venture) {
    case "terrible":
      return tip;
    case "poor":
      return Math.ceil(amount * 0.05);
    case "good":
      return Math.ceil(amount * 0.1);
    case "great":
      return Math.ceil(amount * 0.15);
    case "excellent":
      return Math.ceil(amount * 0.2);
    default:
      return "Rating not recognised";
  }
}

console.log(calculateTip(20, "Excellent"));
console.log(calculateTip(26.95, "good"));
console.log(calculateTip(20, "e2323"));
console.log(calculateTip(20, "great"));
console.log(calculateTip(20, "hi!"));
console.log(calculateTip(107.65, "Great!"));
