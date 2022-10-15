function searchNumber(numbers, actions) {
  let numbersToTake = actions[0];
  let numbersToRemove = actions[1];
  let numberToSearch = actions[2];

  let takenNumbers = numbers.slice(0, numbersToTake);
  takenNumbers.splice(0, numbersToRemove);

  let count = 0;

  for (const number of takenNumbers) {
    if (number === numberToSearch) {
      count++;
    }
  }
  console.log(`Number ${numberToSearch} occurs ${count} times.`);
}
searchNumber([7, 1, 5, 8, 2, 7],
  [3, 1, 5]);