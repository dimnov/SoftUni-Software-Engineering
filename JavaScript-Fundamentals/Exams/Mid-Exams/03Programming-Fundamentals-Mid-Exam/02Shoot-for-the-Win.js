function shootForTheWin(arr) {

  let targets = arr.shift().split(' ').map(Number);
  let index = arr.shift();
  const targetsLength = targets.length;

  let total = 0;

  while (index !== 'End') {
    index = Number(index);

    if (index < targetsLength) {

      for (let i = 0; i < targetsLength; i++) {
        let current = targets[index];

        if (i !== index && targets[i] !== -1) {
          if (targets[i] > current) {
            targets[i] -= current;
          } else {
            targets[i] += current;
          }
        }
      }
      targets[index] = -1;
      total++;
    }
    index = arr.shift();
  }
  console.log(`Shot targets: ${total} -> ${targets.join(' ')}`);
}
shootForTheWin((["30 30 12 60 54 66",
  "5",
  "2",
  "4",
  "0",
  "End"]));