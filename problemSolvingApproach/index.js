// understanding the problem
// 1. what is the input?
// 2. what is the output? (i.e. what should the code return?)
// 3. can i modify the input? (i.e. can i mutate the input?)
// 4. what are the steps needed to solve the problem?
// 5. how does the algorithm work? (explain the outline of the algorithm)
// 6. walk through the code step by step
// 7. can i use a pseudocode to walk through the code?
// 8. can i write pseudocode before i write the code?

// explore concrete examples
// 1. start with a simple example
// 2. progress to more complex examples
// 2.1 invalid input (i.e. undefined, null, NaN, empty string, 0, false, etc.)
// 3. explore edge cases
// 4. write test cases
// 5. refactor the code

// break it down

function charCount(str) {
  // create an object
  // iterate through the string
  // if the character is not in the object, add it to the object with a value of 1
  // if the character is in the object, increment the value by 1
  // return the object
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (char in obj) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}
