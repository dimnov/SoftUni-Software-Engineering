function theatre(day, age) {
  let price = 0;
  switch (day) {
    case "Weekday":
      if (age >= 0 && age <= 18) {
        price = 12;
      } else if (age > 18 && age <= 64) {
        price = 18;
      } else if (age > 64 && age <= 122) {
        price = 12;
      }
      if (age < 0) {
        console.log("Error!");
      } else if (age > 122) {
        console.log("Error!");
      } else {
        console.log(`${price}$`);
      }
      break;
    case "Weekend":
      if (age >= 0 && age <= 18) {
        price = 15;
      } else if (age > 18 && age <= 64) {
        price = 20;
      } else if (age > 64 && age <= 122) {
        price = 15;
      }
      if (age < 0) {
        console.log("Error!");
      } else if (age > 122) {
        console.log("Error!");
      } else {
        console.log(`${price}$`);
      }
      break;
    case "Holiday":
      if (age >= 0 && age <= 18) {
        price = 5;
      } else if (age > 18 && age <= 64) {
        price = 12;
      } else if (age > 64 && age <= 122) {
        price = 10;
      }
      if (age < 0) {
        console.log("Error!");
      } else if (age > 122) {
        console.log("Error!");
      } else {
        console.log(`${price}$`);
      }
      break;
  }
}
theatre('Holiday', 15)