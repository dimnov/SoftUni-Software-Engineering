function worldTour(input) {
  let tour = input.shift();
  let line = input.shift();

  while (line !== 'Travel') {
    let [command, firstArgument, secondArgument] = line.split(':');

    switch (command) {
      case 'Add Stop':
        let index = Number(firstArgument);
        let city = secondArgument;

        if (index < tour.length && index >= 0) {
          let result = tour.slice(0, index) + city + tour.slice(index);
          tour = result;
          console.log(tour);
        }
        break;

      case 'Remove Stop':
        let startIndex = Number(firstArgument);
        let endIndex = Number(secondArgument);

        if (startIndex < tour.length && startIndex >= 0 && endIndex < tour.length && endIndex >= 0) {
          let split = tour.substring(startIndex, endIndex + 1);
          tour = tour.replace(split, '');
        }
        console.log(tour);
        break;

      case 'Switch':
        if (tour.includes(firstArgument)) {
          tour = tour.split(firstArgument).join(secondArgument);
        }
        console.log(tour);
        break;
    }
    line = input.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${tour}`);
}
worldTour(["Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel"]);