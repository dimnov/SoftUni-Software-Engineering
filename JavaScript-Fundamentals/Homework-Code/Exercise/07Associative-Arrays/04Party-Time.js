function partyTime(input) {
  let vipList = [];
  let regularList = [];

  let current = input.shift();


  while (current !== 'PARTY') {
    const isVip = !isNaN(current[0]);
    if (isVip) {
      vipList.push(current);
    } else {
      regularList.push(current);
    }

    current = input.shift();
  }

  let allGuests = vipList.concat(regularList);

  for (const guest of input) {
    allGuests.splice(allGuests.indexOf(guest), 1);
  }

  console.log(allGuests.length);
  allGuests.forEach(guest => console.log(guest));
}
partyTime(['7IK9Yo0h',
  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc',
  'tSzE5t0p',
  'PARTY',
  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc']);