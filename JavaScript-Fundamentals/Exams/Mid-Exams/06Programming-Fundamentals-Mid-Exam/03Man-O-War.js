function manOWar(arr) {
  let pirateShip = arr.shift().split('>').map(Number);
  let warShip = arr.shift().split('>').map(Number);
  let maxHealth = Number(arr.shift());
  let line = arr.shift();

  let death = false;

  while (line !== 'Retire') {
    let current = line.split(' ');
    let command = current[0];
    let numOne = Number(current[1]);
    let numTwo = Number(current[2]);
    let numThree = Number(current[3]);

    switch (command) {
      case 'Fire':
        if (numOne >= 0 && numOne <= warShip.length - 1) {
          warShip[numOne] -= numTwo;

          if (warShip[numOne] <= 0) {
            console.log("You won! The enemy ship has sunken.");
            return;
          }
        }

        line = arr.shift();
        break;

      case 'Defend':
        if (numOne >= 0 && numOne <= pirateShip.length - 1 && numTwo >= 0 && numTwo <= pirateShip.length - 1) {
          for (let i = numOne; i <= numTwo; i++) {
            pirateShip[i] -= numThree;

            if (pirateShip[i] <= 0) {
              console.log("You lost! The pirate ship has sunken.");
              return;
            }
          }
        }

        line = arr.shift();
        break;

      case 'Repair':
        if (numOne >= 0 && numOne <= pirateShip.length - 1) {
          pirateShip[numOne] += numTwo;
          if (pirateShip[numOne] > maxHealth) {
            pirateShip[numOne] = maxHealth;
          }
        }

        line = arr.shift();
        break;

      case 'Status':
        let counter = 0;
        for (let i = 0; i < pirateShip.length; i++) {
          if (pirateShip[i] < maxHealth * 0.2) {
            counter++;
          }
        }
        console.log(`${counter} sections need repair.`);

        line = arr.shift();
        break;
    }
  }
  let sumPirateShip = pirateShip.reduce((a, b) => a + b, 0);
  let sumWarShip = warShip.reduce((a, b) => a + b, 0);

  console.log(`Pirate ship status: ${sumPirateShip}`);
  console.log(`Warship status: ${sumWarShip}`)
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