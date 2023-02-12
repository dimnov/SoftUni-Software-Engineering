const { expect, assert } = require('chai');
const isOddOrEven = require('./02EvenOrOdd.js');

describe('isOddOrEven', function () {
  it('Should return even when the string length is even', () => {
    expect(isOddOrEven('even')).to.deep.equal('even');
  });
  it('Should return odd when the string length is odd', () => {
    expect(isOddOrEven('odd')).to.deep.equal('odd');
  });
  it('Should return undefined when the input is not a string', () => {
    expect(isOddOrEven(1)).to.be.undefined;
  });
  it('Should return undefined when the input is an array', () => {
    expect(isOddOrEven([1, 2, 3])).to.be.undefined;
  });
});