function treasureHunt(arr) {
  let chest = arr.shift().split('|');

  while (arr[0] !== 'Yohoho!') {
    let line = arr.shift().split(' ');
    let command = line.shift();

    if (command === 'Loot') {
      while (line.length) {
        let item = line.shift();

        if (!chest.includes(item)) {
          chest.unshift(item);
        }
      }
    } else if (command === 'Drop') {
      let index = Number(line.shift());

      if (index >= 0 && index < chest.length) {
        chest.push(chest.splice(index, 1));
      }
    } else if (command === 'Steal') {
      let count = Math.min(chest.length, Number(line.shift()));
      let index = chest.length - count;
      let stolen = chest.splice(index, count);
      console.log(stolen.join(', '));
    }
  }

  if (chest.length) {
    let averageTreasureGain = chest.reduce((prevSum, item) => prevSum + item.length, 0) / chest.length;
    console.log(`Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`);
  } else {
    console.log('Failed treasure hunt.');
  }
}
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!"]);