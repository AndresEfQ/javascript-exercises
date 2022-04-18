const sumAll = function(start, end) {

  if (typeof(start) !== "number" || 
      typeof(end) !== "number" ||
      start < 0 ||
      end < 0) {
    return "ERROR";
  }

  let result = 0;
  if ( start <= end) {
    for (i = start; i <= end; i++) {
      result += i;
    }
  } else {
    for (i = end; i <= start; i++) {
      result += i;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
