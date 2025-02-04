function whoseBicycle(diary1, diary2, diary3) {
  const sum1 = Object.values(diary1).reduce((a, b) => a + b);
  const sum2 = Object.values(diary2).reduce((a, b) => a + b);
  const sum3 = Object.values(diary3).reduce((a, b) => a + b);

  if (sum1 > sum2 && sum1 > sum3) {
    return "I need to buy a bicycle for my first son.";
  } else if (sum2 >= sum1 && sum2 > sum3) {
    return "I need to buy a bicycle for my second son.";
  } else if (sum3 >= sum1 && sum3 >= sum2) {
    return "I need to buy a bicycle for my third son.";
  }
}
