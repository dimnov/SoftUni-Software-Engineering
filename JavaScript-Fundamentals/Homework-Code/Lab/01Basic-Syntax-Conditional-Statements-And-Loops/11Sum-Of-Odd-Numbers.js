function oddNum(n) {
  let sum = 0;
  for (let i = 1; i <= n * 2; i += 2) {
    sum += i;
    console.log(i);
  }
  console.log(`Sum: ${sum}`);
}
oddNum(5);