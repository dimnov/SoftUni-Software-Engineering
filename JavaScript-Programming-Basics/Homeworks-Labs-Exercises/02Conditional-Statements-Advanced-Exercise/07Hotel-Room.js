function hotelRoom(input) {
  let month = input[0];
  let nights = Number(input[1]);

  let priceApartment = 0;
  let priceStudio = 0;

  switch (month) {
    case "May":
    case "October":
      if (nights > 7 && nights <= 13) {
        priceStudio = 50;
        priceApartment = 65 * nights;
        priceStudio = (priceStudio * 0.95) * nights;
      } else if (nights > 14) {
        priceStudio = 50;
        priceApartment = 65;
        priceStudio = (priceStudio * 0.7) * nights;
        priceApartment = (priceApartment * 0.9) * nights;
      } else {
        priceStudio = 50 * nights;
        priceApartment = 65 * nights;
      }
      break;
    case "June":
    case "September":
      if (nights > 14) {
        priceStudio = 75.2;
        priceStudio = (priceStudio * 0.8) * nights;
        priceApartment = 68.7;
        priceApartment = (priceApartment * 0.9) * nights;
      } else {
        priceStudio = 75.2 * nights;
        priceApartment = 68.7 * nights;
      }
      break;
    case "July":
    case "August":
      if (nights > 14) {
        priceStudio = 76 * nights;
        priceApartment = 77;
        priceApartment = (priceApartment * 0.9) * nights;
      } else {
        priceStudio = 76 * nights;
        priceApartment = 77 * nights;
      }
      break;
  }
  console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
  console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}