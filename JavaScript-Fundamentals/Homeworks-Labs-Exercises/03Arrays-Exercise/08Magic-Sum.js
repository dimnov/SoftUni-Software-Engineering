function magicSum(arr, magicNum) {
  let arrLength = arr.length;

  for (let i = 0; i <= arrLength; i++) {
    for (let j = i + 1; j < arrLength; j++) {
      if (Number(arr[i]) + Number(arr[j]) == magicNum) {
        console.log(`${arr[i]} ${arr[j]}`);
      }
    }
  }
}
magicSum([14, 20, 60, 13, 7, 19, 8], 27)