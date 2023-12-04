/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    let c1 = str.charAt(left).toLowerCase();
    let c2 = str.charAt(right).toLowerCase();
    if(!isLetter(c1)) {
      left += 1;
      continue;
    }
    if(!isLetter(c2)) {
      right -= 1;
      continue;
    }
    if(c1 != c2) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
}

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

module.exports = isPalindrome;
