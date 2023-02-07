function areaVolCal(area, vol, JsonShapes) {
  const result = JSON.parse(JsonShapes).map(shape => {

    const current = {
      area: area.call(shape),
      volume: vol.call(shape),
    }
    return current;
  });

  return result;
}

function area() {
  return Math.abs(this.x * this.y);
};

function vol() {
  return Math.abs(this.x * this.y * this.z);
};

areaVolCal(area, vol, `[
  {"x":"1","y":"2","z":"10"},
  {"x":"7","y":"7","z":"10"},
  {"x":"5","y":"2","z":"10"}
  ]`);