function extractIncreasingSubset(arr) {
  let biggestNum = arr.shift();
  const finalResult = [biggestNum];

  for (const el of arr) {
    if (el >= biggestNum) {
      biggestNum = el;
      finalResult.push(el);
    }
  }

  return finalResult;
}
extractIncreasingSubset([20,
  3,
  2,
  15,
  6,
  1]
);