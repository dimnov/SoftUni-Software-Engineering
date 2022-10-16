function counterStrike(arr) {
  let energy = Number(arr.shift());
  let battlesWon = 0;
  let i = 0;

  while (arr[i] !== 'End of battle') {
    let sum = Number(arr[i]);

    if (energy < sum) {
      console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${energy} energy`);
      return;
    }
    battlesWon++;
    energy -= sum;

    if (battlesWon % 3 === 0) {
      energy += battlesWon;
    }
    i++;
  }
  console.log(`Won battles: ${battlesWon}. Energy left: ${energy}`);
}
counterStrike(["200",
  "54",
  "14",
  "28",
  "13",
  "End of battle"]);