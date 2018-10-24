function isAnagram(firstWord, secondWord) {
  const word1 = firstWord.replace(/\s/, '').split('')
  const word2 = secondWord.replace(/\s/, '').split('')
  
  word1.sort()
  word2.sort()
  
  return JSON.stringify(word1) === JSON.stringify(word2)
}

console.log(isAnagram('abc', 'cba'))

