function commissions(input) {
  let town = input[0];
  let sells = Number(input[1]);
  let commission = 0;

  switch (town) {
    case "Sofia":
      if (sells >= 0 && sells <= 500) {
        commission = 5;
        console.log((sells * (commission / 100)).toFixed(2));
      } else if (sells > 500 && sells <= 1000) {
        commission = 7;
        console.log((sells * (commission / 100)).toFixed(2));
      } else if (sells > 1000 && sells <= 10000) {
        commission = 8;
        console.log((sells * (commission / 100)).toFixed(2));
      } else if (sells > 10000) {
        commission = 12;
        console.log((sells * (commission / 100)).toFixed(2));
      } else if (sells < 0) {
        console.log("error");
      }
      break;
    case "Varna":
      if (sells >= 0 && sells <= 500) {
        commission = 4.5;
        console.log((sells * (commission / 100)).toFixed(2));
      } else if (sells > 500 && sells <= 1000) {
        commission = 7.5;
        console.log((sells * (commission / 100)).toFixed(2));
      } else if (sells > 1000 && sells <= 10000) {
        commission = 10;
        console.log((sells * (commission / 100)).toFixed(2));
      } else if (sells > 10000) {
        commission = 13;
        console.log((sells * (commission / 100)).toFixed(2));
      } else if (sells < 0) {
        console.log("error");
      }
      break;
    case "Plovdiv":
      if (sells >= 0 && sells <= 500) {
        commission = 5.5;
        console.log((sells * (commission / 100)).toFixed(2));
      } else if (sells > 500 && sells <= 1000) {
        commission = 8;
        console.log((sells * (commission / 100)).toFixed(2));
      } else if (sells > 1000 && sells <= 10000) {
        commission = 12;
        console.log((sells * (commission / 100)).toFixed(2));
      } else if (sells > 10000) {
        commission = 14.5;
        console.log((sells * (commission / 100)).toFixed(2));
      } else if (sells < 0) {
        console.log("error");
      }
      break;
    default:
      console.log("error");
      break;
  }
}