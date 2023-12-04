/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;
  let countMap1 = {};
  let countMap2 = {};
  for (let i = 0; i < str1.length; i++) {
    let c1 = str1.charAt(i).toLowerCase();
    let c2 = str2.charAt(i).toLowerCase();
    countMap1[c1] = countMap1[c1] || 0;
    countMap1[c1] += 1;

    countMap2[c2] = countMap2[c2] || 0;
    countMap2[c2] += 1;
  }
  if (Object.keys(countMap1).length != Object.keys(countMap2).length) return false;
  for (let key in countMap1) {
    if (!(key in countMap2) || countMap1[key] != countMap2[key])
      return false;
  }
  return true;
}

module.exports = isAnagram;
