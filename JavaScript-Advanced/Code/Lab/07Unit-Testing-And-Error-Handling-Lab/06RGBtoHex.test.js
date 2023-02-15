const { expect } = require('chai');
const rgbToHexColor = require('./06RGBtoHex.js');

describe('rgbToHexColor', function () {
  it('should return undefined for invalid input (not a number)', function () {
    let result = rgbToHexColor('invalid', 'invalid', 'invalid');
    expect(result).to.be.undefined;
  });

  it('should return undefined for invalid input (less than 0)', function () {
    let result = rgbToHexColor(-1, -1, -1);
    expect(result).to.be.undefined;
  });

  it('should return undefined for invalid input (greater than 255)', function () {
    let result = rgbToHexColor(256, 256, 256);
    expect(result).to.be.undefined;
  });

  it('should return the correct hex color for valid input', function () {
    let result = rgbToHexColor(255, 99, 71);
    expect(result).to.equal('#FF6347');
  });
});