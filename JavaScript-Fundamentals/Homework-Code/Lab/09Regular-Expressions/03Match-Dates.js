function matchDates(input) {
  let pattern = /\b(\d{2})([.\-\/])([A-Z]{1}[a-z]{2})\2(\d{4})\b/g;

  let text = input.shift();
  let result = text.matchAll(pattern);

  for (const match of result) {
    console.log(`Day: ${match[1]}, Month: ${match[3]}, Year: ${match[4]}`);
  }
}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);