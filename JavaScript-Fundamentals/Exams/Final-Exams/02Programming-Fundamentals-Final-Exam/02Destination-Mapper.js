function destinationMapper(input) {
  let pattern = /([=\/])(?<name>[A-Z][A-Za-z]{2,})\1/gm;
  let matches = input.matchAll(pattern);

  let travelPoints = 0;
  let destinationsArray = [];

  for (const match of matches) {
    let currentMatch = match.groups.name;
    let points = currentMatch.length;

    destinationsArray.push(currentMatch);
    travelPoints += points;
  }
  console.log(`Destinations: ${destinationsArray.join(', ')}`);
  console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");