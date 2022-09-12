function numbers(m, n) {
  let sum;
  for (let i = m; i >= n; i--) {
    console.log(i);
    sum += i;
    console.log(sum);
  }
}
numbers(6, 2)