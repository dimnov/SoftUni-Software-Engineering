function carFactory({ model, power, color, carriage, wheelsize }) {
  const engineType = {
    small: { power: 90, volume: 1800 },
    normal: { power: 120, volume: 2400 },
    monster: { power: 200, volume: 3500 },
  }

  let engine = {};

  if (power <= 90) {
    engine = engineType.small;
  } else if (power <= 120) {
    engine = engineType.normal;
  } else {
    engine = engineType.monster;
  }

  const sizeOfWheels = wheelsize % 2 === 0 ? --wheelsize : wheelsize;

  return car = {
    model,
    engine,
    carriage: {
      type: carriage,
      color,
    },
    wheels: Array(4).fill(sizeOfWheels),
  }
}
carFactory({
  model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14
});