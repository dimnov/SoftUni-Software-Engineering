function maxSequence(arr) {
  let longestSequence = [];
  let leftMost = 0;

  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let current = Number(arr[i]);
    let currentSequence = [current];


    for (let j = i + 1; j < arrLength; j++) {
      let nextEl = Number(arr[j]);

      if (nextEl == current) {
        currentSequence.push(nextEl);
      } else {
        break;
      }
    }

    if (currentSequence.length > longestSequence.length) {
      longestSequence = [];

      for (let j = 0; j < currentSequence.length; j++) {
        longestSequence.push(currentSequence[j]);
      }
    } else {
      if (i < leftMost) {
        leftMost = i;
      }
    }
  }
  console.log(longestSequence.join(' '));
}
maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);