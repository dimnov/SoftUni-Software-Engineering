function manOWar(arr) {
  let pirateShip = arr.shift().split('>');
  let warShip = arr.shift().split('>');
  let maxHealth = Number(arr.shift());
  let line = arr.shift();

  while (line !== 'Retire') {
    let current = line.split(' ');
    let command = current[0];
    let numOne = current[1];
    let numTwo = current[2];
    let numThree = current[3];

    switch (command) {
      case 'Fire':
        if (pirateShip.includes())
          break;
      case 'Defend':

        break;
      case 'Repair':

        break;
      case 'Status':

        break;
    }
    console.log(command);
    line = arr.shift();
  }
}
manOWar(["12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire"]);