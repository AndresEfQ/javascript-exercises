const reverseString = function(string) {
  let array = string.split("");
  let reverseArray = [];

  for (let i = 0; i < array.length; i++) {
    reverseArray[i] = array[array.length-1-i];
  }
  return reverseArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
