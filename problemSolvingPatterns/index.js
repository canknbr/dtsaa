// improve you

// devise a plan for solving the problem
// master common problems and solve them

// FREQUENCY COUNTER APPROACH
// this pattern is used object and to count the number of times a certain value occurs in an array time

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 25]));

function refactorSame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let obj = {};
  for (let i = 0; i < str1.length; i++) {
    obj[str1[i]] = (obj[str1[i]] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!obj[letter]) {
      return false;
    }
    obj[letter]--;
  }
  return true;
}

// MULTIPLE POINTERS APPROACH
// this pattern is used to solve problems where we need to find a subset of elements in an array that satisfy a certain condition
// this pattern is used to find the longest substring of a string that is the same in reverse

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
function refactorSumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      let sum = arr[left] + arr[right];
      if (sum === 0) {
        return [arr[left], arr[right]];
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
}
