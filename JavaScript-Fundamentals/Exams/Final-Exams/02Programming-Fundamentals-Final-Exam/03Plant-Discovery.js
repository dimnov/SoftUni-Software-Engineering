function plantDiscovery(input) {
  let plantNum = Number(input.shift());
  let plantObject = {};
  let average = 0;

  for (let index = 0; index < plantNum; index++) {
    let [plantName, rarity] = input.shift().split('<->');

    plantObject[plantName] = {
      rarity: Number(rarity),
      rating: [],
    };
  }

  let line = input.shift();

  while (line !== 'Exhibition') {
    let [command, commandTwo] = line.split(': ');
    let [plantName, rating] = commandTwo.split(' - ');
    rating = Number(rating);

    if (plantObject.hasOwnProperty(plantName)) {
      switch (command) {
        case 'Rate':
          plantObject[plantName].rating.push(rating);
          break;
        case 'Update':
          plantObject[plantName].rarity = rating;
          break;
        case 'Reset':
          plantObject[plantName].rating = [];
          break;
      }
    } else {
      console.log('error');
    }
    line = input.shift();
  }

  console.log('Plants for the exhibition:');

  for (const keys in plantObject) {
    console.log(`- ${keys}; Rarity: ${plantObject[keys].rarity}; Rating: ${averageRating(plantObject[keys].rating).toFixed(2)}`);
  }

  function averageRating(numbers) {
    let numArr = 0;

    if (numbers.length < 1) {
      return 0;
    } else {
      for (let i = 0; i < numbers.length; i++) {
        let curNum = Number(numbers[i]);
        numArr += curNum;
      }
      return numArr / numbers.length;
    }
  }
}
plantDiscovery(["3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition"]);