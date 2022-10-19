function guineaPig(arr) {

  let foodGR = Number(arr[0]) * 1000;
  let hayGR = Number(arr[1]) * 1000;
  let coverGR = Number(arr[2]) * 1000;
  let guineaPigGR = Number(arr[3]) * 1000;;

  let days = 1;

  while (days <= 30) {
    foodGR -= 300;

    if (days % 2 === 0) {
      hayGR -= (foodGR * 5) / 100;
    }

    if (days % 3 === 0) {
      coverGR -= guineaPigGR * 0.3334;
    }
    days++;
  }

  if ((foodGR / 1000) > 0 && (hayGR / 1000) > 0 && (coverGR / 1000) > 0) {
    console.log(`Everything is fine! Puppy is happy! Food: ${(foodGR / 1000).toFixed(2)}, Hay: ${(hayGR / 1000).toFixed(2)}, Cover: ${(coverGR / 1000).toFixed(2)}.`)
  } else {
    console.log('Merry must go to the pet store!')
  }
}
guineaPig((["9", "5", "5.2", "1"]));