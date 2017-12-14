const { generateRandomNumbers, generateRandomLetters } = require('@cbdallavalle/gen-random');
const { expect } = require('chai');
const mergeSort = require('../mergeSort.js');

describe('mergeSort', function() {
  
  it('should exist', function() {
    expect(true).to.equal(true);
  })

  it('should be a function', function() {
    expect(mergeSort).to.be.a('function')
  })

  it('should sort an array', function() {
    expect(mergeSort(["d", "b", "a", "c"])).to.deep.equal(["a", "b", "c" ,"d"])
  })

  it('should sort array in numerical order', function() {
    expect(mergeSort([10, 92, 33, 634, 9, 66])).to.deep.equal([9, 10, 33, 66, 92, 634]);
  })

  it('should sort array with multiple values', function() {
    expect(mergeSort(["d", "b", "b", "a", "c"])).to.deep.equal(["a", "b", "b", "c", "d"]);
  })

  it('should sort a massive array', function() {
    let array = generateRandomLetters(101711);
    expect(mergeSort(array)).to.be.sorted();
  })
})