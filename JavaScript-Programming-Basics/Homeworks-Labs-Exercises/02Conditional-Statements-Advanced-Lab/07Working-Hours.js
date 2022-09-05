function office(input) {

  let number = input[0];
  let day = input[1];

  if (number >= 10 && number <= 18) {
    if (day === "Sunday") {
      console.log("closed");
    } else {
      console.log("open");
    }
  } else {
    console.log("closed");
  }
}