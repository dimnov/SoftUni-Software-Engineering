function store(input) {
  let fruit = input[0];
  let day = input[1];
  let quantity = input[2];

  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      switch (fruit) {
        case "banana":
          price = 2.5;
          console.log((price * quantity).toFixed(2));
          break;
        case "apple":
          price = 1.2;
          console.log((price * quantity).toFixed(2));
          break;
        case "orange":
          price = 0.85;
          console.log((price * quantity).toFixed(2));
          break;
        case "grapefruit":
          price = 1.45;
          console.log((price * quantity).toFixed(2));
          break;
        case "kiwi":
          price = 2.7;
          console.log((price * quantity).toFixed(2));
          break;
        case "pineapple":
          price = 5.5;
          console.log((price * quantity).toFixed(2));
          break;
        case "grapes":
          price = 3.85;
          console.log((price * quantity).toFixed(2));
          break;
        default:
          console.log("error");
          break;
      }
      break;
    case "Saturday":
    case "Sunday":
      switch (fruit) {
        case "banana":
          price = 2.7;
          console.log((price * quantity).toFixed(2));
          break;
        case "apple":
          price = 1.25;
          console.log((price * quantity).toFixed(2));
          break;
        case "orange":
          price = 0.9;
          console.log((price * quantity).toFixed(2));
          break;
        case "grapefruit":
          price = 1.6;
          console.log((price * quantity).toFixed(2));
          break;
        case "kiwi":
          price = 3;
          console.log((price * quantity).toFixed(2));
          break;
        case "pineapple":
          price = 5.6;
          console.log((price * quantity).toFixed(2));
          break;
        case "grapes":
          price = 4.2;
          console.log((price * quantity).toFixed(2));
          break;
        default:
          console.log("error");
          break;
      }
      break;
    default:
      console.log("error");
      break;
  }
}