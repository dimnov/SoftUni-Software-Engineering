function mirrorWords(input) {
  let text = input.shift()
  let pattern = /([@|\#])([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/gm;

  let matches = text.matchAll(pattern);
  let mirrorWordsArr = [];

  let count = 0;

  for (const match of matches) {
    let wordOne = match[2];
    let wordTwo = match[3];

    let reversedWordTwo = wordTwo.split('').reverse().join('');

    if (reversedWordTwo === wordOne) {
      mirrorWordsArr.push(`${wordOne} <=> ${wordTwo}`);
    }
    count++;
  }

  if (count === 0) {
    console.log('No word pairs found!');
  } else {
    console.log(`${count} word pairs found!`);
  }

  if (mirrorWordsArr.length === 0) {
    console.log('No mirror words!');
  } else {
    console.log('The mirror words are:');
    console.log(mirrorWordsArr.join(', '));
  }
}
mirrorWords([
  '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]
);