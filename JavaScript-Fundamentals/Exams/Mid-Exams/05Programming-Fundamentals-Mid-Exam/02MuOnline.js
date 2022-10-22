function inventory(input) {
  let index = input.split('|');
  let health = 100;
  let bitcoins = 0;
  let room = 0;
  let death = false;
  let healthPlus = 0;

  for (let i = 0; i < index.length; i++) {
    let current = index[i].split(' ');
    let command = current[0];
    let number = Number(current[1]);

    switch (command) {
      case 'potion':
        if (health < 100) {
          health += number;
          if (health > 100) {
            healthPlus = number - (health - 100);
            health = 100;
            console.log(`You healed for ${healthPlus} hp.`);
            console.log(`Current health: ${health} hp.`);
          } else {
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${health} hp.`);
          }
        }
        room++;
        break;

      case 'chest':
        bitcoins += number;
        console.log(`You found ${number} bitcoins.`);
        room++;
        break;
    }
    if (command !== 'potion' && command !== 'chest') {
      room++;
      health -= number;
      if (health <= 0) {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${room}`);
        death = true;
        break;
      } else {
        console.log(`You slayed ${command}.`);
      }
    }
  }
  if (!death) {
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
  }
}
inventory("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");