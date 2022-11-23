function garage(input) {
  let garages = [];

  for (const line of input) {
    let [garageNum, info] = line.split(' - ');
    let found = garages.find(x => x.garageNumber === garageNum);

    if (!found) {
      garages.push({ garageNumber: garageNum, carInfo: [] });
      found = garages.find(x => x.garageNumber === garageNum);
    }

    found.carInfo.push(info);
  }

  let output = '';
  garages.forEach(garage => {
    output += `Garage № ${garage.garageNumber}\n`;

    for (let currentCar of garage.carInfo) {
      currentCar = currentCar.replace(/: /g, ' - ');
      output += `--- ${currentCar}\n`;
    }
  });

  console.log(output);
}
garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);