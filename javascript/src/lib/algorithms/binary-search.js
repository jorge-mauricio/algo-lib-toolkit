// Recursive Binary Search Function
function binarySearchRecursive(arr, target, left, right) {
  // Base condition: If the range is invalid, the target is not present
  if (left > right) {
      return -1;
  }

  // Calculate the middle index
  let mid = Math.floor((left + right) / 2);

  // Target value found
  if (arr[mid] === target) {
      return mid;
  }

  // If the target is smaller than the middle element, it can only be in the left subarray
  if (target < arr[mid]) {
      return binarySearchRecursive(arr, target, left, mid - 1);
  }

  // If the target is larger, then it is in the right subarray
  return binarySearchRecursive(arr, target, mid + 1, right);
}

/**
 * This function uses the binary search algorithm to find a target number in a sorted array.
 * @param {number[]} arr - A sorted array of numbers
 * @param {number} target - The target number to find
 * @returns {number} - The index of the target number in the array, or -1 if the target is not found
 */
function binarySearchIterative(arr, target) {
  let left = 0; // Initialize the left boundary of the search range
  let right = arr.length - 1; // Initialize the right boundary of the search range

  // While the search range is not empty
  while (left <= right) {
    // Calculate the middle index of the search range
    let mid = Math.floor((left + right) / 2);

    // If the target is found, return its index
    if (arr[mid] === target) {
      return mid;
    }

    // If the target is less than the middle element, it can only be in the left subarray
    if (target < arr[mid]) {
      right = mid - 1;
    } else {
      // If the target is greater, it can only be in the right subarray
      left = mid + 1;
    }
  }

  // If the search range is empty, the target is not in the array
  return -1;
}

// ref: https://youtu.be/sTdiMLom00U?list=PL9gnSGHSqcnp39cTyB1dTZ2pJ04Xmdrod&t=4593
const binarySearchRotatedRecursive = (arr, target, start, end) => {
  if (start > end) {
    return -1;
  }

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (arr[start] <= arr[mid]) {
    if (target >= arr[start] && target <= arr[mid]) {
      return binarySearchRotatedRecursive(arr, target, start, mid - 1);
    }
    return binarySearchRotatedRecursive(arr, target, mid + 1, end);
  }

  if (target >= arr[mid] && target <= arr[end]) {
    return binarySearchRotatedRecursive(arr, target, mid + 1, end);
  }
  return binarySearchRotatedRecursive(arr, target, start, mid - 1);
};

// Export the binary search function as a module
module.exports = { binarySearchRecursive, binarySearchIterative, binarySearchRotatedRecursive };
