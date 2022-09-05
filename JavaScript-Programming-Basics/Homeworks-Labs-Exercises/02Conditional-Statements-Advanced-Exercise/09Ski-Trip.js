function skiTrip(input) {
  let days = Number(input[0]);
  let room = input[1];
  let rating = input[2];

  let price = 0;

  switch (room) {
    case "room for one person":
      price = (days - 1) * 18;
      break;
    case "apartment":
      price = (days - 1) * 25;
      if (days < 10) {
        price *= 0.7;
      } else if (days >= 10 && days <= 15) {
        price *= 0.65;
      } else {
        price *= 0.5;
      }
      break;
    case "president apartment":
      price = (days - 1) * 35;
      if (days < 10) {
        price *= 0.9;
      }
      if (days >= 10 && days <= 15) {
        price *= 0.85;
      }
      if (days > 15) {
        price *= 0.8;
      }
      break;
  }
  if (rating === "positive") {
    price *= 1.25;
  } else {
    price *= 0.9;
  }
  console.log(price.toFixed(2));
}