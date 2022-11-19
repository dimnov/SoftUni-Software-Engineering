function modernTimesHashtag(input) {
  const words = input.split(' ');

  words.forEach(word => {
    const isValid = word.startsWith('#') && word.length > 1;
    if (isValid) {
      let isLetter = true;
      let wordChecked = '';

      for (let i = 1; i < word.length; i++) {
        const char = word[i].toLowerCase();

        if (!isNaN(char)) {
          isLetter = false;
          break;
        } else {
          wordChecked += word[i];
        }
      }
      if (isLetter) {
        console.log(wordChecked);
      }
    }
  });
}
modernTimesHashtag('Nowadays everyone uses # to tag a #special word in #socialMedia');