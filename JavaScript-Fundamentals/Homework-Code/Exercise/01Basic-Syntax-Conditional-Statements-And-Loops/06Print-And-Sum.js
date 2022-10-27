function printSum(n, m) {
  let test = [];
  let sum = 0;
  for (let i = n; i <= m; i++) {
    sum += i;
    test.push(i)
  }
  console.log(test.join(' '));
  console.log(`Sum: ${sum}`);
}
printSum(50, 60)