function blackFlag(arr) {
  let days = Number(arr.shift());
  let dailyPlunder = Number(arr.shift());
  let expectedPlunder = Number(arr.shift());

  let sum = 0;
  let day = 0;

  for (let i = 0; i < days; i++) {
    sum += dailyPlunder;
    day++;

    if (day % 3 === 0) {
      sum += dailyPlunder / 2;
    }

    if (day % 5 === 0) {
      sum *= 0.7;
    }
  }
  if (sum >= expectedPlunder) {
    console.log(`Ahoy! ${sum.toFixed(2)} plunder gained.`);
  } else {
    let percentage = (sum / expectedPlunder) * 100;
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
  }
}
blackFlag(["5",
  "40",
  "100"]);