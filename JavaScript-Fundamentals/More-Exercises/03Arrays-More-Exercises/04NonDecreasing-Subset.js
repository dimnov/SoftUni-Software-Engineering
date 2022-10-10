function nonDecreasingSubset(arr) {
  let max = arr[0];

  let result = arr.filter(current => {
    if (current >= max) {
      max = current;
    }
    return current >= max;
  });

  console.log(result.join(' '));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])