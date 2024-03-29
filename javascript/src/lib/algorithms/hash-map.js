// This function uses a hash map to find a pair of numbers in an array that sum up to a target value.
// It takes an array of numbers and a target number as input.
// It returns an array with the indices of the two numbers that sum up to the target.
// If no such pair exists, it returns an empty array.

// TODO: revisit

/**
 * This function uses a hash map to find a pair of numbers in an array that sum up to a target value.
 * @param {number[]} arrayItems - An array of numbers
 * @param {number} targetSum - A target number
 * @param {number} returnMethod - 1 - return index | 2 - return value
 * @returns {number[]} - An array with the indices of the two numbers that sum up to the target
 * If no such pair exists, it returns an empty array.
 */
const hashMap = (arrayItems, targetSum, returnMethod = 1) => {
  const map = {}; // Initialize an empty hash map. ex: { '2': 0, '7': 1, '11': 2, '15': 3 }

  // Iterate over the array
  for (let i = 0; i < arrayItems.length; i++) {
    const currentNumber = arrayItems[i]; 
    const targetDifference = targetSum - arrayItems[i]; // Calculate the complement of the current number

    // If the complement is in the hash map
    // This means we have found a pair of numbers that sum up to the target

    if (map[targetDifference] !== undefined) {
      // Return the index of the complement and the current index
      // Which are the two numbers that sum up to the target
      if (returnMethod === 1) return [map[targetDifference], i];

      // Return the value of the complement and the current value
      // Which are the two numbers that sum up to the target
      if (returnMethod === 2) return [arrayItems[map[targetDifference]], currentNumber];
      // return [map[complement], i];
    }

    // Add the current number and its index to the hash map
    // The key will be the number and the value will be the index
    // The key will be used to calculate the complement
    map[arrayItems[i]] = i; // ex: { '2': 0, '7': 1, '11': 2, '15': 3 }
  }

  // If no pair was found, return an empty array
  return [];
};

module.exports = hashMap; // Export the function using CommonJS module export