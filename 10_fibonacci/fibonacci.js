const fibonacci = function(n, memo = []) {
  if (n < 1) return 'OOPS';
  if (n == 1) return 1;
  if (n == 2) return 1;
  if (n in memo) {
    return memo.n;
  } else {
    memo.n = fibonacci(n -1, memo) + fibonacci (n - 2, memo);
  }
  return memo.n;
};

// Do not edit below this line
module.exports = fibonacci;
