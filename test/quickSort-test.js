const { generateRandomNumbers, generateRandomLetters } = require('@cbdallavalle/gen-random');
const { expect } = require('chai');
const quickSort = require('../quickSort.js');

describe('quickSort', function() {

  it('should exist', function() {
    expect(true).to.equal(true);
  });

  it('should have a function called quickSort', function() {
    expect(quickSort).to.be.a('function');
  })

  it('should sort array in alphabetical order', function() {
    expect(quickSort(["e", "b", "f", "d", "c", "a"])).to.deep.equal(["a", "b", "c", "d", "e", "f"]);
  })

  it('should sort array in numerical order', function() {
    expect(quickSort([10, 92, 33, 634, 9, 66])).to.deep.equal([9, 10, 33, 66, 92, 634]);
  })

  it('should sort array with multiple values', function() {
    expect(quickSort(["d", "b", "b", "a", "c"])).to.deep.equal(["a", "b", "b", "c", "d"]);
  })

  it('should sort a massive array', function() {
    let array = generateRandomLetters(35000);
    expect(quickSort(array)).to.be.sorted();
  })

});