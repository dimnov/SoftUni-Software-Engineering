function store(input) {
  let product = input[0];
  let town = input[1];
  let quantity = input[2];
  let price = 0;

  if (town === "Sofia") {
    switch (product) {
      case "coffee":
        price = 0.5; break;
      case "water":
        price = 0.8; break;
      case "beer":
        price = 1.2; break;
      case "sweets":
        price = 1.45; break;
      case "peanuts":
        price = 1.6; break;
    }
    console.log(quantity * price);
  } else if (town === "Plovdiv") {
    switch (product) {
      case "coffee":
        price = 0.4; break;
      case "water":
        price = 0.7; break;
      case "beer":
        price = 1.15; break;
      case "sweets":
        price = 1.3; break;
      case "peanuts":
        price = 1.5; break;
    }
    console.log(quantity * price);
  } else {
    switch (product) {
      case "coffee":
        price = 0.45; break;
      case "water":
        price = 0.7; break;
      case "beer":
        price = 1.10; break;
      case "sweets":
        price = 1.35; break;
      case "peanuts":
        price = 1.55; break;
    }
    console.log(quantity * price);
  }
}