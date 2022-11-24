function valueOfAString(input) {
  let sum = 0;

  let string = input.shift().split('').filter(x => x.charCodeAt(x) >= 65 && x.charCodeAt(x) <= 90 || x.charCodeAt(x) >= 97 && x.charCodeAt(x) <= 122);
  let typeCase = input.shift();

  if (typeCase == 'UPPERCASE') {
    string = string.filter(x => x.charCodeAt(x) >= 65 && x.charCodeAt(x) <= 90);

    for (let char of string) {
      char = char.charCodeAt();
      sum += char;
    }
  }

  if (typeCase == 'LOWERCASE') {
    string = string.filter(x => x.charCodeAt(x) >= 97 && x.charCodeAt(x) <= 122);

    for (let char of string) {
      char = char.charCodeAt();
      sum += char;
    }
  }

  console.log(`The total sum is: ${sum}`);
}
valueOfAString(['HelloFromMyAwesomePROGRAM',
  'LOWERCASE']);