function sumRange(num) {
  if (num == 1) {
    return 1;
  }
  return num + sumRange(num - 1);
}

function factorial(num) {
  if (num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

function collectOdd(arr) {
  let oddArr = [];
  function helper(arr) {
    if (arr.length === 0) {
      return;
    }
    if (arr[0] % 2 !== 0) {
      oddArr.push(arr[0]);
    }
    helper(arr.slice(1));
  }
  helper(arr);
  return oddArr;
}
