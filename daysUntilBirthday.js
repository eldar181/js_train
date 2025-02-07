function daysUntilBirthday(birthday) {
  const today = new Date();
  const currentYear = today.getFullYear();
  const nextBirthday = new Date(`${currentYear}-${birthday}`);

  if (today > nextBirthday) {
    nextBirthday.setFullYear(currentYear + 1);
  }

  const oneDay = 24 * 60 * 60 * 1000;
  const daysLeft = Math.round((nextBirthday - today) / oneDay);

  return daysLeft;
}

console.log(daysUntilBirthday("05-09"));
