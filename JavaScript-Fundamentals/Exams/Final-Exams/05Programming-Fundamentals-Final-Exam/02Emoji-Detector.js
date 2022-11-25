function emojiDetector(input) {
  let text = input.shift();
  let treshold = 1;
  let emojiCount = 0;
  let coolEmojis = [];

  let digits = text.match(/\d/g);
  for (const match of digits) {
    let digit = Number(match[0]);
    treshold *= digit;
  }

  let emojis = text.matchAll(/(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/g);
  for (const emoji of emojis) {
    let fullEmoji = emoji[0];
    let emojiName = emoji.groups.name;
    emojiCount++;

    let emojiCoolnes = 0;

    for (let i = 0; i < emojiName.length; i++) {
      emojiCoolnes += emojiName.charCodeAt(i);
    }

    if (emojiCoolnes >= treshold) {
      coolEmojis.push(emoji);
    }
  }
  console.log(`Cool threshold: ${treshold}`);
  console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
  for (const emoji of coolEmojis) {
    console.log(emoji[0]);
  }
}
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);