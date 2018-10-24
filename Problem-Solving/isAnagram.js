function isAnagram(word1, word2, useAll) {
  //default need use all
  //Anagrams don't necessarily have to use all the letters, but they normally do.
  if (typeof useAll === 'undefined' || typeof useAll !== 'boolean') {
    useAll = true;
  }
  
  //check string only
  if (typeof word1 !== 'string' && typeof word1 !== 'string') {
    throw Error('Invalid argument! Only String type is allow to compare!');
  }
  
  //normalise to array
  let arr1 = word1.replace(/\s/g, "").toLowerCase().split('').sort();
  let arr2 = word2.replace(/\s/g, "").toLowerCase().split('').sort();
  
  //check anagrams that must use exatcly all
  if (useAll || arr1.length === arr2.length) {
    return arr1.join('') === arr2.join('');
  }
  
  //determine which is part of another
  let whole = arr1.length > arr2.length ? arr1 : arr2;
  let part = arr2.length < arr1.length ? arr2 : arr1;
  
  for (let i = 0; i < whole.length; i++) {
    let index = part.indexOf(whole[i]);
    part.splice(index, 1);
  }
  
  return part.length === 0;
}

//example use
isAnagram('why','how') // expected output: false
isAnagram('funeral','real fun') // expected output: true
isAnagram('funeral','real funs') // expected output: false
isAnagram('funeral','real funs', false) // expected output: true
