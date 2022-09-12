function vacation(num, type, day) {
  let price;
  switch (type) {
    case "Students":
      switch (day) {
        case "Friday":
          if (num >= 30) {
            price = (8.45 * num) * 0.85;
          } else {
            price = 8.45 * num;
          }
          break;
        case "Saturday":
          if (num >= 30) {
            price = (9.80 * num) * 0.85;
          } else {
            price = 9.80 * num;
          }
          break;
        case "Sunday":
          if (num >= 30) {
            price = (10.46 * num) * 0.85;
          } else {
            price = 10.46 * num;
          }
          break;
      }
      break;
    case "Business":
      switch (day) {
        case "Friday":
          if (num >= 100) {
            price = 10.90 * (num - 10);
          } else {
            price = 10.90 * num;
          }
          break;
        case "Saturday":
          if (num >= 100) {
            price = 15.60 * (num - 10);
          } else {
            price = 15.60 * num;
          }
          break;
        case "Sunday":
          if (num >= 100) {
            price = 16 * (num - 10);
          } else {
            price = 16 * num;
          }
          break;
      }
      break;
    case "Regular":
      switch (day) {
        case "Friday":
          if (num >= 10 && num <= 20) {
            price = (15 * 0.95) * num;
          } else {
            price = 15 * num;
          }
          break;
        case "Saturday":
          if (num >= 10 && num <= 20) {
            price = (20 * 0.95) * num;
          } else {
            price = 20 * num;
          }
          break;
        case "Sunday":
          if (num >= 10 && num <= 20) {
            price = (22.50 * 0.95) * num;
          } else {
            price = 22.50 * num;
          }
          break;
      }
      break;
  }
  console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(100, "Business", "Friday");