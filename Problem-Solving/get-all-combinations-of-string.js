function getCombinations(str) {
  if(str.length === 1) return str
  
  const res = []
  
  for(let i in str) {
    const l = str[i]
    getCombinations(str.join('').replace(l, '').split('')).concat('').map((x) =>
        res.push([l].concat(x)))
  }
  
  return res
}

function getAllCombinationsOfString(str) {
  return getCombinations(str.split('')).map((str) => str.join(''))
}


console.log(getAllCombinationsOfString('abc'))
