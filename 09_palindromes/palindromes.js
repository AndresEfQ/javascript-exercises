const palindromes = function (string) {
  let strippedString = Array.from(string.toLowerCase().split('')).filter((char) => (/[a-z]/).test(char));
  
  for (let i = 0; i < strippedString.length / 2; i++ ) {
    if (strippedString[i] !== strippedString[strippedString.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
