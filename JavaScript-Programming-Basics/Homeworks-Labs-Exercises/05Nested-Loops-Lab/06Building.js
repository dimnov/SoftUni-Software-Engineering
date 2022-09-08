function building(input) {
  let floorInput = Number(input[0]);
  let roomInput = Number(input[1]);

  for (let floor = floorInput; floor > 0; floor--) {
    let result = "";
    for (let room = 0; room < roomInput; room++) {
      if (floor === floorInput) {
        result += `L${floor}${room} `;
      } else if (floor % 2 !== 0) {
        result += `A${floor}${room} `;
      } else {
        result += `O${floor}${room} `;
      }
    }
    console.log(result);
  }
}