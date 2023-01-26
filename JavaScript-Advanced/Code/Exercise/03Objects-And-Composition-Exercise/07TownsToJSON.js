function townsToJSON(arr) {
  const towns = [];

  for (let i = 1; i < arr.length; i++) {
    const [town, latiture, longitude] = arr[i].split('|').filter(n => n);

    const object = {
      Town: town.trim(),
      Latitude: Number(Number(latiture).toFixed(2)),
      Longitude: Number(Number(longitude).toFixed(2)),
    }
    towns.push(object)
  }
  return JSON.stringify(towns)
}
townsToJSON(['| Town | Latitude | Longitude |',
  '| Sofia | 42.696552 | 23.32601 |',
  '| Beijing | 39.913818 | 116.363625 |']);
