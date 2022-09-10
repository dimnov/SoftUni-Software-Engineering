function pipesInPool(input) {
  let fuel = input[0];
  let number = Number(input[1]);

  switch (fuel) {
    case "Diesel":
      if (number < 25) {
        console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
      } else {
        console.log(`You have enough ${fuel.toLowerCase()}.`);
      }
      break;
    case "Gasoline":
      if (number < 25) {
        console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
      } else {
        console.log(`You have enough ${fuel.toLowerCase()}.`);
      }
      break;
    case "Gas":
      if (number < 25) {
        console.log(`Fill your tank with ${(fuel.toLowerCase())}!`);
      } else {
        console.log(`You have enough ${fuel.toLowerCase()}.`);
      }
      break;
    default:
      console.log(`Invalid fuel!`);
      break;
  }
}