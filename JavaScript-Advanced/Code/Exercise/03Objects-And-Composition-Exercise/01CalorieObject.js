function solve(arr) {
  const foodObj = {};

  for (let i = 0; i < arr.length; i++) {
    const foodName = arr[i];
    const foodCalorie = arr[i + 1];

    if (i % 2 == 0) foodObj[foodName] = Number(foodCalorie);
  }
  return foodObj;
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);