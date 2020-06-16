console.log("js_hw_t3");

function findLongestWord(string) {
  const words = string.split(' ')
  let maxWordsLength = '';

  for (const word of words) {
    if (word.length > maxWordsLength.length) {
      maxWordsLength = word
    }
  }
  return maxWordsLength
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'