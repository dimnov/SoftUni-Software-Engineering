function wordOccurrences(input) {
  let words = {};

  for (const word of input) {
    if (!words[word]) {
      words[word] = 0;
    }
    words[word]++;
  }
  let sorted = Object.entries(words).sort((a, b) => b[1] - a[1]);

  for (const [word, count] of sorted) {
    console.log(`${word} -> ${count} times`);
  }
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);