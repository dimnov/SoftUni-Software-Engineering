function sumFirstLast(arr) {
  let firstNum = arr.shift();
  let lastNum = arr.pop();
  let result = Number(firstNum) + Number(lastNum);

  console.log(result);
}
sumFirstLast(['20', '30', '40'])