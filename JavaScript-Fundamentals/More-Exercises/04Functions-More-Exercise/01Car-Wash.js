function carWash(arr) {
  let sum = 0;
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    switch (arr[i]) {
      case "soap":
        sum += 10;
        break;
      case "water":
        sum *= 1.2;
        break;
      case "vacuum cleaner":
        sum *= 1.25;
        break;
      case "mud":
        sum *= 0.9;
        break;
    }
  }
  console.log(`The car is ${sum.toFixed(2)}% clean.`);
}
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])