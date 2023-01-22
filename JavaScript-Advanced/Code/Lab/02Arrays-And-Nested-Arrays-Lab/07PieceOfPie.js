function pieceOfPie(arr, strOne, strTwo) {
  let startIndex = arr.indexOf(strOne);
  let endIndex = arr.indexOf(strTwo);
  let result = arr.slice(startIndex, endIndex + 1);

  return result;
}
pieceOfPie(['Apple Crisp',
  'Mississippi Mud Pie',
  'Pot Pie',
  'Steak and Cheese Pie',
  'Butter Chicken Pie',
  'Smoked Fish Pie'],
  'Pot Pie',
  'Smoked Fish Pie')