function normalizeUrl(str) {
  if (str.startsWith("https://")) {
    return str;
  } else {
    return "https://" + str;
  }
}
console.log(normalizeUrl("google.com"));
console.log(normalizeUrl("https://ai.fi"));
