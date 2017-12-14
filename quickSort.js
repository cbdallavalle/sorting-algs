function quickSort(array) {
  if(array.length <= 1) {
    return array
  }

  let pivot = array.pop();
  let arrayLess = [];
  let arrayMore = [];
  
  array.forEach( (value) => {
    value < pivot ? arrayLess.push(value) : arrayMore.push(value);
  })

  return [ ...quickSort(arrayLess), pivot, ...quickSort(arrayMore) ]
};

module.exports = quickSort;