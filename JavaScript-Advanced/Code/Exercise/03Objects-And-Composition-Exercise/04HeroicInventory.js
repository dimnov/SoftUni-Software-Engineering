function heroicInventory(input) {
  const register = [];

  for (const el of input) {
    const [name, level, item] = el.split(' / ');

    const hero = {
      name,
      level: Number(level),
      items: item ? item.split(', ') : [],
    }
    register.push(hero);
  }
  return JSON.stringify(register);
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara']);