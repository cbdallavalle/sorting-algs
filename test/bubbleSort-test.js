const { generateRandomNumbers, generateRandomLetters } = require('@cbdallavalle/gen-random');
const { expect } = require('chai');
const bubbleSort = require('../bubbleSort.js');

describe('Bubble', function() {

  it('should exist', function() {
    expect(true).to.equal(true);
  });

  it('should have a function called bubbleSort', function() {
    expect(bubbleSort).to.be.a('function');
  })

  it('should sort array in alphabetical order', function() {
    expect(bubbleSort(["d", "b", "a", "c"])).to.deep.equal(["a", "b", "c", "d"]);
  })

  it('should sort array in numerical order', function() {
    expect(bubbleSort([10, 92, 33, 634, 9, 66])).to.deep.equal([9, 10, 33, 66, 92, 634]);
  })

  it('should sort array with multiple values', function() {
    expect(bubbleSort(["d", "b", "b", "a", "c"])).to.deep.equal(["a", "b", "b", "c", "d"]);
  })

  it('should sort a massive array', function() {
    let array = generateRandomLetters(8000);
    expect(bubbleSort(array)).to.be.sorted();
  })

});