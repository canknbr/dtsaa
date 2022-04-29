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

function countUniqueValues(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
function refactorCountUniqueValues(arr) {
  return [...new Set(arr)].length;
}

// sliding window approach
function windowSlide(arr, n) {
  if (arr.length < n) {
    return null;
  }
  let res = arr
    .sort((a, b) => b - a)
    .slice(0, n)
    .reduce((acc, curr) => acc + curr);
  return res;
}
console.log(windowSlide([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

// divide and conquer approach

function search(arr, n) {
  if (arr.length === 0) {
    return -1;
  }
  let mid = Math.floor(arr.length / 2);
  if (arr[mid] === n) {
    return mid;
  }
  if (arr[mid] > n) {
    return search(arr.slice(0, mid), n);
  }
  return search(arr.slice(mid + 1), n);
}

function refactorSearch(arr, n) {
  if (arr.length === 0) {
    return -1;
  }
  if (arr.indexOf(n) !== -1) {
    return arr.indexOf(n);
  } else {
    return -1;
  }
}
function refactorSearch2(arr, n) {
  return arr.find(el => el === n) ?? -1;
}

// SAMPLE

function sameFrequency(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();
  if (str1.length !== str2.length) {
    return false;
  }
  let obj = {};
  for (let i = 0; i < str1.length; i++) {
    obj[str1[i]] = (obj[str1[i]] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    if (!obj[str2[i]]) {
      return false;
    }
    obj[str2[i]]--;
  }
  return true;
}
