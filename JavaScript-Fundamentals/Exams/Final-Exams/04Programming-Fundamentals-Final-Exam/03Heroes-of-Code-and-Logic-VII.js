function heroesOfCodeAndLogic(input) {
  let numberOfHeroes = Number(input.shift());
  let heroesObject = {};

  for (let i = 0; i < numberOfHeroes; i++) {
    let command = input.shift();
    let [heroName, hitPoints, manaPoints] = command.split(' ');

    heroesObject[heroName] = {
      hitPoints: Number(hitPoints),
      manaPoints: Number(manaPoints),
    };
  }

  let line = input.shift();

  while (line !== 'End') {
    let [command, heroName, arg1, arg2] = line.split(' - ');

    switch (command) {
      case 'CastSpell':
        if (heroesObject[heroName].manaPoints >= Number(arg1)) {
          heroesObject[heroName].manaPoints -= Number(arg1);
          console.log(`${heroName} has successfully cast ${arg2} and now has ${heroesObject[heroName].manaPoints} MP!`);
        } else {
          console.log(`${heroName} does not have enough MP to cast ${arg2}!`)
        }
        break;

      case 'TakeDamage':
        heroesObject[heroName].hitPoints -= Number(arg1);

        if (heroesObject[heroName].hitPoints > 0) {
          console.log(`${heroName} was hit for ${arg1} HP by ${arg2} and now has ${heroesObject[heroName].hitPoints} HP left!`);
        } else {
          delete heroesObject[heroName];
          console.log(`${heroName} has been killed by ${arg2}!`);
        }
        break;

      case 'Recharge':
        heroesObject[heroName].manaPoints += Number(arg1);

        if (heroesObject[heroName].manaPoints > 200) {
          console.log(`${heroName} recharged for ${Number(arg1) - (heroesObject[heroName].manaPoints - 200)} MP!`);
          heroesObject[heroName].manaPoints = 200;
        } else {
          console.log(`${heroName} recharged for ${arg1} MP!`);
        }
        break;

      case 'Heal':
        heroesObject[heroName].hitPoints += Number(arg1);

        if (heroesObject[heroName].hitPoints > 100) {
          console.log(`${heroName} healed for ${Number(arg1) - (heroesObject[heroName].hitPoints - 100)} HP!`);
          heroesObject[heroName].hitPoints = 100;
        } else {
          console.log(`${heroName} healed for ${arg1} HP!`);
        }
        break;
    }

    line = input.shift();
  }

  for (const hero in heroesObject) {
    console.log(hero);
    console.log(`  HP: ${heroesObject[hero].hitPoints}`);
    console.log(`  MP: ${heroesObject[hero].manaPoints}`);
  }
}
heroesOfCodeAndLogic(['2',
  'Solmyr 85 120',
  'Kyrre 99 50',
  'Heal - Solmyr - 10',
  'Recharge - Solmyr - 50',
  'TakeDamage - Kyrre - 66 - Orc',
  'CastSpell - Kyrre - 15 - ViewEarth',
  'End']);