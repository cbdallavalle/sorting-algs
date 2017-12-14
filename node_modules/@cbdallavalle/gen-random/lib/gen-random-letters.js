function generateRandomLetters (count) {
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let array = [];
  
  for (let i = 0; i < count; i++) {
    let letterIndex = parseInt(Math.random() * letters.length);
    
    array.push(letters[letterIndex]);
  }
  
  return array;
}

module.exports = generateRandomLetters; 