function mergeSort(array) {

  if(array.length <= 1) {
    return array
  }
  
  let middle = Math.floor(array.length / 2);
  let firstHalf = array.slice(0, middle);
  let secondHalf = array.slice(middle);
  
  return doMerge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function doMerge(firstHalf, secondHalf) {
    finishedArray = [];

    while(firstHalf.length && secondHalf.length) {
      firstHalf[0] <= secondHalf[0] 
        ? finishedArray.push(firstHalf.shift()) 
        : finishedArray.push(secondHalf.shift())
    }
    
    if(firstHalf.length) {
      finishedArray = [...finishedArray, ...firstHalf];
    }
    
    if(secondHalf.length) {
       finishedArray = [...finishedArray, ...secondHalf]
    }
    return finishedArray
}

module.exports = mergeSort;