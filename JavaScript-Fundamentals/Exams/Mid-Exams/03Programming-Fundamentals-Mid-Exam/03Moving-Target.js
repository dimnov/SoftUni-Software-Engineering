function movingTarget(arr) {
  let targets = arr.shift().split(' ').map(Number);

  while (arr.length > 0) {
    let command = arr.shift();
    let current = command.split(' ')[0];

    switch (current) {
      case 'Shoot':
        let numOne = Number(command.split(' ')[1]);
        let numTwo = Number(command.split(' ')[2]);

        if (numOne >= 0 && numOne < targets.length) {
          targets[numOne] -= numTwo;
          if (targets[numOne] <= 0) {
            targets.splice(numOne, 1);
          }
        }
        break;

      case 'Add':
        let index = Number(command.split(' ')[1]);
        let value = Number(command.split(' ')[2]);

        if (index >= 0 && index < targets.length) {
          targets.splice(index, 0, value);
        } else {
          console.log(`Invalid placement!`);
        }
        break;

      case 'Strike':
        let indexStrike = Number(command.split(' ')[1]);
        let radius = Number(command.split(' ')[2]);

        if (indexStrike >= 0 && indexStrike < targets.length) {
          if (indexStrike - radius >= 0 && indexStrike + radius < targets.length) {
            targets.splice(indexStrike - radius, (radius * 2) + 1);
          } else {
            console.log(`Strike missed!`);
          }
        }
        break;
    }
  }
  console.log(targets.join("|"));

  function shoot(arr, numOne, numTwo) {
    let current = arr[numOne];
    let remove = arr[numOne];

    if (current == undefined) {
      return arr;
    }

    if (numOne <= arr.length - 1) {
      current = current - numTwo;
    }

    if (current <= 0) {
      arr = arr.filter((x) => x != remove);
    } else {
      arr[numOne] = current;
    }
    return arr;
  }
}
movingTarget((["52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End"]));