const { expect } = require('chai');
const sum = require('../../Lab/04SumOfNumbers.js');

describe('Sum of Numbers', function () {
  it('Return the sum of the values of all elements inside the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sum(arr);
    expect(result).to.equal(15);
  });

  it("should only accept arrays of numbers as an argument", () => {
    const isArrayOfNumbers = (array) => {
      return Array.isArray(array) && array.every((element) => typeof element === "number");
    };

    expect(isArrayOfNumbers([1, 2, 3])).to.be.true;
    expect(isArrayOfNumbers([1, "2", 3])).to.be.false;
    expect(isArrayOfNumbers("1, 2, 3")).to.be.false;
  });
});