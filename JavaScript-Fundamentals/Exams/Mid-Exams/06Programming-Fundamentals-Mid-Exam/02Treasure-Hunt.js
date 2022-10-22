function treasureHunt(arr) {
  let chest = arr.shift().split('|');

  while (arr[0] !== 'Yohoho!') {
    let line = arr.shift().split(' ');
    let command = line.shift();

    switch (command) {
      case 'Loot':
        while (line.length) {
          let item = line.shift();

          if (!chest.includes(item)) {
            chest.unshift(item);
          }
        }
        break;

      case 'Drop':
        let index = Number(line.shift());

        if (index >= 0 && index < chest.length) {
          chest.push(chest.splice(index, 1));
        }
        break;

      case 'Steal':
        let sum = Math.min(chest.length, Number(line.shift()));
        let i = chest.length - sum;
        let stolen = chest.splice(i, sum);

        console.log(stolen.join(', '));
        break;
    }
  }

  if (chest.length) {
    let average = chest.reduce((prevSum, item) => prevSum + item.length, 0) / chest.length;
    console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
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