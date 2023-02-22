const findNewApartment = require('./findApartment');
const assert = require('chai').assert;

describe('Test findNewApartment', () => {
  describe('isGoodLocation', () => {
    it('the city is not different than "Sofia", "Plovdiv" or "Varna', () => {
      assert.equal(findNewApartment.isGoodLocation('Burgas', true), 'This location is not suitable for you.')
      assert.equal(findNewApartment.isGoodLocation('Kaspichan', true), 'This location is not suitable for you.')
    });
    it('the boolean is not false', () => {
      assert.equal(findNewApartment.isGoodLocation('Sofia', false), 'There is no public transport in area.')
      assert.equal(findNewApartment.isGoodLocation('Plovdiv', false), 'There is no public transport in area.')
    });
    it('the city and transport are met', () => {
      assert.equal(findNewApartment.isGoodLocation('Sofia', true), 'You can go on home tour!')
      assert.equal(findNewApartment.isGoodLocation('Plovdiv', true), 'You can go on home tour!')
    });
    it('the inputs are string and boolean', () => {
      assert.throw(() => findNewApartment.isGoodLocation(['Sofia'], false), 'Invalid input!')
      assert.throw(() => findNewApartment.isGoodLocation(['Sofia'], 'false'), 'Invalid input!')
    })
  });
  describe('isLargeEnough', () => {
    it('the apartments are in array', () => {
      assert.throw(() => findNewApartment.isLargeEnough('Sofia', '40'), 'Invalid input!')
      assert.throw(() => findNewApartment.isLargeEnough(['Sofia'], '40'), 'Invalid input!')
      assert.throw(() => findNewApartment.isLargeEnough([], '40'), 'Invalid input!')
    });
    it('the apartments are large enough', () => {
      assert.equal(findNewApartment.isLargeEnough([40, 50, 60], 50), '50, 60')
      assert.equal(findNewApartment.isLargeEnough([40, 50, 60], 60), '60')
      assert.equal(findNewApartment.isLargeEnough([40, 50, 60], 70), '')
    });
  });
  describe('isItAffordable', () => {
    it('is affordable', () => {
      assert.equal(findNewApartment.isItAffordable(50, 40), "You don't have enough money for this house!");
    });
    it('can affort this home', () => {
      assert.equal(findNewApartment.isItAffordable(50, 60), 'You can afford this home!');
      assert.equal(findNewApartment.isItAffordable(50, 50), 'You can afford this home!');
    });
    it('the input price is a number', () => {
      assert.throw(() => findNewApartment.isItAffordable([], 40), 'Invalid input!')
      assert.throw(() => findNewApartment.isItAffordable('40', 40), 'Invalid input!')
      assert.throw(() => findNewApartment.isItAffordable(true, 40), 'Invalid input!')

    });
    it('the input budget is a number', () => {
      assert.throw(() => findNewApartment.isItAffordable(40, []), 'Invalid input!')
      assert.throw(() => findNewApartment.isItAffordable(40, '40'), 'Invalid input!')
      assert.throw(() => findNewApartment.isItAffordable(40, true), 'Invalid input!')
    });
  });
});