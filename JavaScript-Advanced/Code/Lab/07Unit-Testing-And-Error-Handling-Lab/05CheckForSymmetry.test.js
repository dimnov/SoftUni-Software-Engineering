const { expect } = require('chai');
const isSymmetric = require('../../Lab/05CheckForSymmetry.js');

describe('Symmetry checker', function () {
  it('returns true for symmetrics array', () => {
    const arr = [1, 2, 2, 1];
    expect(isSymmetric(arr)).true;
  });

  it('returns false for non-symmetrics array', () => {
    const arr = [1, 2, 3];
    expect(isSymmetric(arr)).false;
  });

  it('returns false with non-array argument', () => {
    const data = 121;
    expect(isSymmetric(data)).false;
  });

  it('returns true when the length is odd', () => {
    const data = [1, 2, 1];
    expect(isSymmetric(data)).true;
  });

  it('returns false for array-like arguments', () => {
    const data = '1221';
    expect(isSymmetric(data)).false;
  });

  it('returns false for non number values', () => {
    const data = [1, 2, '3'];
    expect(isSymmetric(data)).false;
  });

  it('returns false for non-number values', () => {
    const data = ['1', '2', '3'];
    expect(isSymmetric(data)).false;
  });
});