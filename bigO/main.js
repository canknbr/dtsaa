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

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
// n^2 operations (n is the number of iterations) O(n^2)

function logAtLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
// n operations (n is the number of iterations) O(n)

function logAtMost(n) {
  for (let i = 0; i <= Math.min(n, 5); i++) {
    console.log(i);
  }
}
// n but loop max 5 iteration operations (n is the number of iterations) O(1)

// growth rate of O(n^2) is exponential
// growth rate of O(n) is linear
// growth rate of O(log n) is logarithmic
// growth rate of O(1) is constant
// growth rate of O(n!) is factorial

// sorting the order growth rate  n^2 > nlogn > n > logn > 1
