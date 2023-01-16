function stringLength(strOne, strTwo, strThree) {
  let count = strOne.length + strTwo.length + strThree.length;
  let average = Math.floor(count / 3);

  console.log(count);
  console.log(average);
}
stringLength('pasta', '5', '22.3')