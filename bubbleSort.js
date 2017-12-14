function bubbleSort(array) {
  for(let i = 0; i < array.length; i++) {
    array.forEach(function( letter, i ) {
      if(array[i] > array[i+1]) {
        [ [array[i]], [array[i+1]] ] = [[array[i+1]], [array[i]]];
      }
    })
  }
  return array
}

module.exports = bubbleSort;