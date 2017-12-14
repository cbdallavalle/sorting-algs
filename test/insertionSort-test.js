const { generateRandomNumbers, generateRandomLetters } = require('@cbdallavalle/gen-random');
const { expect } = require('chai').use(require('chai-sorted'));
const insertionSort = require('../insertionSort.js');

describe('insertionSort', function() {

  it('should exist', function() {
    expect(true).to.equal(true);
  })

  it('should be a function', function() {
    expect(insertionSort).to.be.a('function')
  })

  it.skip('should sort an array', function() { 
    let array = generateRandomLetters(24000);
    // insertionSort(array);
    expect(insertionSort(array)).to.be.sorted();
  })
})