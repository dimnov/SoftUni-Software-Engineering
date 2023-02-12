const { expect, assert } = require('chai');
const mathEnforcer = require('./04MathEnforcer.js');

describe('mathEnforcer', function () {
  describe('addFive', () => {
    it('Should return undefined if the parameter is not a number', () => {
      assert.equal(mathEnforcer.addFive('gg'), undefined);
    });
    it('Should return the number plus 5', () => {
      assert.equal(mathEnforcer.addFive(5), 10);
    });
    it('Should return floating number', () => {
      assert.equal(mathEnforcer.addFive(5.1), 10.1);
    });
    it('Should return undefined if there is no input', () => {
      assert.equal(mathEnforcer.addFive(), undefined);
    });
    it('Should return 5.99 if param is 0.99', () => {
      assert.equal(mathEnforcer.addFive(0.99), 5.99);
    });
    it('Should return -5.99 if param is -10.99', () => {
      assert.equal(mathEnforcer.addFive(-10.99), -5.99);
    });
    it('Should return 0 if param is -5', () => {
      assert.equal(mathEnforcer.addFive(-5), 0);
    });
  });

  describe('subtractTen', () => {
    it('Should return undefined if the parameter is not a number', () => {
      assert.equal(mathEnforcer.subtractTen('gg'), undefined);
    });
    it('Should return the number minus 10', () => {
      assert.equal(mathEnforcer.subtractTen(5), -5);
    });
    it('Should return undefined if the there is no input', () => {
      assert.equal(mathEnforcer.subtractTen(), undefined);
    });
    it('Should return floating number if the input is 0.99', () => {
      assert.closeTo(mathEnforcer.subtractTen(0.99), -9.01, 0.01);
    });
    it('Should return -8.9 if the param is 1.1', () => {
      assert.equal(mathEnforcer.subtractTen(1.1), -8.9);
    });
    it('Should return 0', () => {
      assert.equal(mathEnforcer.subtractTen(10), 0);
    });
    it('Should return -10', () => {
      assert.equal(mathEnforcer.subtractTen(0), -10);
    });
  });

  describe('sum', () => {
    it('Should return undefined if any of the parameters is not a number', () => {
      assert.equal(mathEnforcer.sum(1, '2'), undefined);
    });
    it('Should return the sum of the numbers', () => {
      assert.equal(mathEnforcer.sum(5, 10), 15);
    });
    it('Should return undefined if there is no input', () => {
      assert.equal(mathEnforcer.sum(), undefined);
    });
    it('Should return negative number', () => {
      assert.equal(mathEnforcer.sum(-5, -5), -10);
    });
    it('Should return floating number', () => {
      assert.closeTo(mathEnforcer.sum(-5, 3.1), -1.9, 0.01);
    });
    it('Should return positive floating number', () => {
      assert.closeTo(mathEnforcer.sum(2.7, 3.4), 6.1, 0.01);
    });
  });
});