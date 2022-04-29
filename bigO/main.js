// sample 1
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
} //5n + 2 operations (n is the number of iterations) O(n)

// sample 2
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
} // 3 operations (n is the number of iterations) O(1)
