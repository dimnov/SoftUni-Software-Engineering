const { expect, assert } = require('chai');
const lookupChar = require('./03CharLookup.js');

describe('lookupChar', function () {
  it('Should return undefined if the first arg is not a string', () => {
    assert.equal(lookupChar(1, 1), undefined);
  });
  it('Should return undefined if the second arg is not a integer', () => {
    assert.equal(lookupChar('string', 1.5), undefined);
  });
  it('Should return undefined if the second arg is not correct', () => {
    assert.equal(lookupChar('a', 'b'), undefined);
  });
  it('Should return incorrect index if the index is lower than zero', () => {
    assert.equal(lookupChar('a', -1), 'Incorrect index');
  });
  it('Should return incorrect index if the index is bigger than length of the array', () => {
    assert.equal(lookupChar('a', 678768768678), 'Incorrect index');
  });
  it('Should return the correct char at index 0', () => {
    assert.equal(lookupChar('test', 0), 't');
  });
  it('Should return the correct char if the index is the last of the length', () => {
    assert.equal(lookupChar('test', 3), 't');
  });
  it('Should return the correct char', () => {
    assert.equal(lookupChar('test', 1), 'e');
  });
});