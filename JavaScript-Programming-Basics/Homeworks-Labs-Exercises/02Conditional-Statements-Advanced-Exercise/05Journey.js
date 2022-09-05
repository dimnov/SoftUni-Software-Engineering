function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let destination1;
  let destination2;

  switch (season) {
    case "summer":
      if (budget <= 100) {
        destination1 = "Bulgaria";
        budget *= 0.7;
      } else if (budget <= 1000 && budget > 100) {
        destination1 = "Balkans"
        budget *= 0.6;
      } else {
        destination1 = "Europe"
        budget *= 0.1;
      }
      destination2 = "Camp";
      break;
    case "winter":
      if (budget <= 100) {
        destination1 = "Bulgaria";
        budget *= 0.3;
      } else if (budget <= 1000 && budget > 100) {
        destination1 = "Balkans"
        budget *= 0.2;
      } else {
        destination1 = "Europe"
        budget *= 0.1;
      }
      destination2 = "Hotel";
      break;
  }

  if (destination1 === "Europe") {
    destination2 = "Hotel"
  }

  let tt = input[0] - budget;
  console.log(`Somewhere in ${destination1}`);
  console.log(`${destination2} - ${tt.toFixed(2)}`);

}