function lastKNumbersSequance(n, k) {
  let sequance = [1];

  for (let i = 1; i < n; i++) {
    let lastEl = sequance.slice(-k);
    let sum = 0;
    for (const el of lastEl) {
      sum += el;
    }
    sequance.push(sum);
  }
  console.log(sequance.join(' '));
}
lastKNumbersSequance(8, 2)