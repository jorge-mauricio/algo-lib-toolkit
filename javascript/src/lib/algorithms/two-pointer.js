// This function uses the two-pointer technique to find a pair of numbers in an array that sum up to a target value.
// It takes an array of numbers and a target number as input.
// It returns an array with the indices of the two numbers that sum up to the target.
// If no such pair exists, it returns an empty array.

// TODO: Triplets that sum to zero

/**
 * This function uses the two-pointer technique to find a pair of numbers in an array that sum up to a target value.
 * Note: The array must be sorted in ascending order for the two-pointer technique to work.
 * @param {number[]} arrItems - An array of numbers
 * @param {number} targetSum - A target number
 * @param {string} returnMethod - 1 - return index | 2 - return value
 * @returns {number[]} - An array with the indices of the two numbers that sum up to the target
 * If no such pair exists, it returns an empty array.
 */
const twoPointer = (arrItems, targetSum, returnMethod = 2) => {
  let leftPointer = 0; // Initialize left pointer at the start of the array
  let rightPointer = arrItems.length - 1; // Initialize right pointer at the end of the array

  // While the left pointer is less than the right pointer
  while (leftPointer < rightPointer) {
    const sum = arrItems[leftPointer] + arrItems[rightPointer]; // Calculate the sum of the values at the left and right pointers

    // If the sum is equal to the target
    if (sum === targetSum) {
      if (returnMethod === 1) return [leftPointer, rightPointer]; // Return the indices of the two numbers
      if (returnMethod === 2) return [arrItems[leftPointer], arrItems[rightPointer]]; // Return the values of the two numbers
      // return [leftPointer, rightPointer]; // Return the indices of the two numbers
    } else if (sum < targetSum) { // If the sum is less than the target
      leftPointer++; // Move the left pointer one step to the right
    } else { // If the sum is greater than the target
      rightPointer--; // Move the right pointer one step to the left
    }
  }

  return []; // If no pair was found, return an empty array
};

// export default twoPointer; // Export the function as a default export
module.exports = twoPointer; // Export the function for use in Node.js
