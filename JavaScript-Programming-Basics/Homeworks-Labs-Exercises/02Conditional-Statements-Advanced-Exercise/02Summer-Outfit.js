function summerOutfit(input) {
  let temperature = input[0];
  let time = input[1];

  let outfit;
  let shoes;
  switch (time) {
    case "Morning":
      if (temperature <= 18) {
        outfit = "Sweatshirt";
        shoes = "Sneakers";
      } else if (temperature > 18 && temperature <= 24) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else {
        outfit = "T-Shirt";
        shoes = "Sandals";
      }
      break;
    case "Afternoon":
      if (temperature <= 18) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (temperature > 18 && temperature <= 24) {
        outfit = "T-Shirt";
        shoes = "Sandals";
      } else {
        outfit = "Swim Suit";
        shoes = "Barefoot";
      }
      break;
    case "Evening":
      if (temperature <= 18) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (temperature > 18 && temperature <= 24) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else {
        outfit = "Shirt";
        shoes = "Moccasins";
      }
      break;
  }
  console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
}