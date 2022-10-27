function arrayManipulations(arr) {
  let commands = arr
    .shift()
    .split(' ')
    .map(Number);

  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let [command, firstNum, secondNum] = arr[i].split(' ');
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    switch (command) {
      case "Add":
        addNum(firstNum);
        break;
      case "Remove":
        removeNum(firstNum);
        break;
      case "RemoveAt":
        removeAt(firstNum);
        break;
      case "Insert":
        insertNum(firstNum, secondNum);
        break;
    }
  }

  function addNum(number) {
    commands.push(number);
  }
  function removeNum(number) {
    commands = commands.filter(el => el !== number);
  }
  function removeAt(index) {
    commands.splice(index, 1);
  }
  function insertNum(number, index) {
    commands.splice(index, 0, number);
  }
  console.log(commands.join(' '));
}
arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);