// ref: https://youtu.be/gDGw0cvFXPQ?list=PL9gnSGHSqcnp39cTyB1dTZ2pJ04Xmdrod&t=108
/**
 * This function generates all unique permutations of a string recursively.
 * @param {string} str - The input string
 * @param {string} perm - The current permutation being built
 * @param {string[]} permutations - An array to store all permutations
 */
const stringPermutationsDistinctRecursive = (str, perm = '', permutations = []) => {
  // Base case: if the string is empty, we have generated a complete permutation
  if (str === '') {
    permutations.push(perm);
    return;
  }

  // Recursive case: for each character in the string
  for (let i = 0; i < str.length; i++) {
    // Generate a new string without the current character
    let char = str[i];
    let remainingString = str.slice(0, i) + str.slice(i + 1, str.length);

    // Recursively generate permutations with the new string and the current permutation + the current character
    stringPermutationsDistinctRecursive(remainingString, perm + char, permutations);
  }

  // Return the array of all permutations
  return permutations;
};

module.exports = { stringPermutationsDistinctRecursive };