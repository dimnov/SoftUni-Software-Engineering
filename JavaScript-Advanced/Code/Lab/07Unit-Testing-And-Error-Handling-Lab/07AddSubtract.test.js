const { expect } = require('chai');
const createCalculator = require('./07AddSubtract.js');

describe('Calculator checker', function () {
  let calculator;

  beforeEach(() => {
    calculator = createCalculator();
  });

  it('should return an object with add, subtract and get functions', () => {
    expect(typeof calculator).to.equal('object');
    expect(typeof calculator.add).to.equal('function');
    expect(typeof calculator.subtract).to.equal('function');
    expect(typeof calculator.get).to.equal('function');
  });

  it('should add a number to the internal sum', () => {
    calculator.add(5);
    expect(calculator.get()).to.equal(5);
    calculator.add(10);
    expect(calculator.get()).to.equal(15);
  });

  it('should subtract a number from the internal sum', () => {
    calculator.add(10);
    calculator.subtract(5);
    expect(calculator.get()).to.equal(5);
    calculator.subtract(10);
    expect(calculator.get()).to.equal(-5);
  });

  it('should handle string inputs for add and subtract functions', () => {
    calculator.add('5');
    expect(calculator.get()).to.equal(5);
    calculator.subtract('5');
    expect(calculator.get()).to.equal(0);
  });

  it('should not allow external modification of the internal sum', () => {
    calculator.add(5);
    calculator.value = 10;
    expect(calculator.get()).to.equal(5);
  });
});