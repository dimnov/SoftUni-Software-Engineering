function housePainting(input) {
  let x = Number(input[0]);
  let y = Number(input[1]);
  let h = Number(input[2]);

  let sideWall = x * y;
  let window = 2.25;

  let totalSides = (2 * sideWall) - (2 * window);
  let backWall = x * x;
  let frontDoor = 2.4;
  let frontBack = (2 * backWall) - frontDoor;

  let total = totalSides + frontBack;
  let greenPaint = total / 3.4;


  let windowsRoof = 2 * (x * y);
  let triangles = (x * h) / 2;
  let triangle = triangles * 2;
  let totalTotal = windowsRoof + triangle;
  let redPaint = totalTotal / 4.3;

  console.log(greenPaint.toFixed(2));
  console.log(redPaint.toFixed(2));
}