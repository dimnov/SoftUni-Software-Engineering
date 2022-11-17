function oddOccurrences(input) {
  let result = {};
  let words = input.split(' ').map(w => w.toLowerCase());

  let wordsLength = words.length;

  for (let i = 0; i < wordsLength; i++) {
    if (!result.hasOwnProperty(words[i])) {
      result[words[i]] = [];
    }
    result[words[i]].push(i);
  }

  let sorted = Object.entries(result).sort((a, b) => a[1][0] - b[1][0]);
  let res = '';

  for (const element of sorted) {
    if (element[1].length % 2 !== 0) {
      res += `${element[0]} `;
    }
  }
  console.log(res);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')