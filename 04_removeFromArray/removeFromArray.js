const removeFromArray = function(array, ...elements) {
  let result = [];
  outer: for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      if (array[i] === elements[j]) {
        continue outer;
      }
    }
    result.push(array[i]);
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
