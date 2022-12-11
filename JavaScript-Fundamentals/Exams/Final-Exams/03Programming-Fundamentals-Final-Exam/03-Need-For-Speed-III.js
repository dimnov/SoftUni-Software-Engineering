function needForSpeed(input) {
  let carsNum = Number(input.shift());
  let cars = {};

  for (let i = 0; i < carsNum; i++) {
    let [carBrand, mileage, fuel] = input.shift().split('|');

    cars[carBrand] = {
      mileage: Number(mileage),
      fuel: Number(fuel),
    };
  }

  let line = input.shift();

  while (line !== 'Stop') {
    let [command, carBrand, distance, fuel] = line.split(' : ');

    switch (command) {
      case 'Drive':
        if (fuel > cars[carBrand].fuel) {
          console.log("Not enough fuel to make that ride");
        } else {
          cars[carBrand].mileage += Number(distance);
          cars[carBrand].fuel -= Number(fuel);
          console.log(`${carBrand} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
        }

        if (cars[carBrand].mileage >= 100000) {
          console.log(`Time to sell the ${carBrand}!`);
          delete cars[carBrand];
        }
        break;

      case 'Refuel':
        if (cars[carBrand].fuel + Number(distance) > 75) {
          let refuel = 75 - cars[carBrand].fuel;
          cars[carBrand].fuel = 75 - Number(distance);
          console.log(`${carBrand} refueled with ${refuel} liters`);
        } else {
          console.log(`${carBrand} refueled with ${distance} liters`);
        }
        cars[carBrand].fuel += Number(distance);
        break;

      case 'Revert':
        cars[carBrand].mileage -= Number(distance);

        if (cars[carBrand].mileage < 10000) {
          cars[carBrand].mileage = 10000;
        } else {
          console.log(`${carBrand} mileage decreased by ${distance} kilometers`);
        }
        break;
    }
    line = input.shift();
  }
  for (const [carBrand, carInfo] of Object.entries(cars)) {
    console.log(`${carBrand} -> Mileage: ${carInfo.mileage} kms, Fuel in the tank: ${carInfo.fuel} lt.`);
  }
}
needForSpeed([
  '4',
  'Lamborghini Veneno|11111|74',
  'Bugatti Veyron|12345|67',
  'Koenigsegg CCXR|67890|12',
  'Aston Martin Valkryie|99900|50',
  'Drive : Koenigsegg CCXR : 382 : 82',
  'Drive : Aston Martin Valkryie : 99 : 23',
  'Drive : Aston Martin Valkryie : 2 : 1',
  'Refuel : Lamborghini Veneno : 40',
  'Revert : Bugatti Veyron : 2000',
  'Stop'
]);