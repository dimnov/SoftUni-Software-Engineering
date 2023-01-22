function solve(arr) {
  let resultArr = [];
  for (const el of arr) {
    if (el < 0) {
      resultArr.unshift(el)
    } else {
      resultArr.push(el)
    }
  }
  for (const el of resultArr) {
    console.log(el);
  }
}
solve([3, -2, 0, -1]);