function memoryGame(arr) {
  let numbers = arr.shift().trim().split(' ');
  let moves = 0;

  while (numbers.length > 1 && arr[0] !== 'end') {
    [index1, index2] = arr.shift().split(' ');
    index1 = Number(index1);
    index2 = Number(index2);
    moves++;

    if (index1 < 0 || index1 >= numbers.length || index1 === index2 || index2 < 0 || index2 >= numbers.length) {
      let index = Math.trunc(numbers.length / 2);
      let symbol = '-' + moves + 'a';
      numbers.splice(index, 0, symbol, symbol);
      console.log('Invalid input! Adding additional elements to the board')
    } else {
      let num1 = numbers[index1];
      let num2 = numbers[index2];

      if (num1 === num2) {
        numbers.splice(index1, 1);
        index2 = numbers.indexOf(num2);
        numbers.splice(index2, 1);
        console.log(`Congrats! You have found matching elements - ${num1}!`);
      } else if (num1 !== num2) {
        console.log('Try again!');
      }
    }
  }

  if (numbers.length === 0 || numbers.length === 1) {
    console.log(`You have won in ${moves} turns!`);
  } else {
    console.log(`Sorry you lose :(`);
    console.log(`${numbers.join(' ')}`);
  }
}
memoryGame([
  "a 2 4 a 2 4",
  "0 3",
  "0 2",
  "0 1",
  "0 1",
  "end"
]
);