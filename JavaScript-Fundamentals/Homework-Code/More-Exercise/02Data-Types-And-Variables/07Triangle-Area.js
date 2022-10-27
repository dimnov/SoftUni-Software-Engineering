function triangleArea(side1, side2, side3) {
  let s = (side1 + side2 + side3) / 2;
  let a = s - side1;
  let b = s - side2;
  let c = s - side3;
  let area = Math.sqrt(s * a * b * c);
  console.log(area);
}
triangleArea(3, 5.5, 4)