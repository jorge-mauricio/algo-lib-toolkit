// recursion with no function argument
// ref: https://youtu.be/gdifkIwCJyg?list=PL9gnSGHSqcnp39cTyB1dTZ2pJ04Xmdrod&t=793
const stringReplaceRecursive = (s, targetReplace) => {

  // Base case.
  if (s.length === 0) {
    return s;
  }
  
  let ans = '';
  let pointer = 0;


  // Debug.
  // console.log('ans=', ans);
  // console.log('s=', s);
  // console.log('s[0]=', s[0]);
  // console.log('s.length=', s.length);
  // console.log('s.substring(2));=', s.substring(1));

  //while (pointer < s.length) {
    if (s[pointer] === targetReplace) {
      return stringReplaceRecursive(s.substring(pointer + 1), targetReplace);
    } else {
      // return ans + s[pointer] + stringReplaceRecursive(s.substring(pointer + 1), targetReplace);
      return s[pointer] + stringReplaceRecursive(s.substring(pointer + 1), targetReplace);
    }
    // pointer++;
  //}
  // return ans;
  // return stringReplaceRecursive(s.substring(pointer), targetReplace);
};


// ref: https://youtu.be/gdifkIwCJyg?list=PL9gnSGHSqcnp39cTyB1dTZ2pJ04Xmdrod&t=2363
// ref (debub video): https://youtu.be/gdifkIwCJyg?list=PL9gnSGHSqcnp39cTyB1dTZ2pJ04Xmdrod&t=2491
// TODO: move this to subsequence file and create subsets file and delete string.js file
// const subsequenceUniqueRecursive = (s, processed, unprocessed) => {
// const subsequenceUniqueRecursive = (s, processed) => {
const subsequenceUniqueRecursive = (s, processed = '', result = []) => {
  // almost working
  // TODO: combine the arrays to return at the end (left=.., right=...)
  // let arrResult = [];
  // let sChar = s[0];

  // // Base case
  // if (s === '') {
  //   return arrResult;
  // }

  // // Recursion calls (add the character or ignore)
  // arrResult.push(processed += subsequenceUniqueRecursive(s.substring(1), sChar + s)) // make combination with the character (add)
  // arrResult.push(processed += subsequenceUniqueRecursive(s.substring(1), sChar)) // make combination with the character (ignore)

  // // Debug.
  // console.log('sChar=', sChar);

  // return processed;


  // ChatGPT corrected version
  // Base case
  if (s === '') {
    if (processed !== '') {
      result.push(processed);
    }
  } else {
    let sCharIteration = s[0];

    // Recursion calls (add the character or ignore)
    subsequenceUniqueRecursive(s.substring(1), processed + sCharIteration, result); // make combination with the character (add) - left
    subsequenceUniqueRecursive(s.substring(1), processed, result); // make combination without the character (ignore) - right
    // subsequenceUniqueRecursive(s.substring(1), processed + sCharIteration.charCodeAt(0), result); // make combination with the character (add) - left
  }

  return result;
};

// except / reject
// ref: https://youtu.be/gdifkIwCJyg?list=PL9gnSGHSqcnp39cTyB1dTZ2pJ04Xmdrod&t=4127
// Time complexity: O(2^n)
// ref (handle duplicates): https://youtu.be/gdifkIwCJyg?list=PL9gnSGHSqcnp39cTyB1dTZ2pJ04Xmdrod&t=4623
/**
 * This function generates all unique subsequences of a string iteratively.
 * @param {string} s - The input string
 * @returns {string[]} - An array of all unique subsequences of the input string
 */
const subsequenceUniqueIterative = (s) => {
  // Initialize the result array with an empty string
  let result = [''];

  // Iterate over each character in the input string
  for (let i = 0; i < s.length; i++) {
    let sChar = s[i]; // The current character

    // Store the current length of the result array
    let currentLength = result.length;

    // For each existing subsequence in the result array
    for (let j = 0; j < currentLength; j++) {
      // Add a new subsequence formed by appending the current character to the existing subsequence
      result.push(result[j] + sChar);
    }
  }

  // Return the result array, which now contains all unique subsequences of the input string
  return result;
};

module.exports = { stringReplaceRecursive, subsequenceUniqueRecursive, subsequenceUniqueIterative };
