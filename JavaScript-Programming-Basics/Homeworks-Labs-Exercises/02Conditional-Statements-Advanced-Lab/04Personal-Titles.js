function user(input) {
  if (input[1] == 'm') {
    if (input[0] < 16) {
      console.log("Master");
    } else {
      console.log("Mr.");
    }
  } else {
    if (input[0] < 16) {
      console.log("Miss");
    } else {
      console.log("Ms.");
    }
  }
}