// TODO: 
  // dynamic sliding window
  // string

// This function uses the sliding window technique to find the maximum sum of a subarray of size k.
// It takes an array of numbers and a number k as input.
// It returns the maximum sum of a subarray of size k.
// Explanation video: https://youtu.be/MK-NZ4hN7rs


/**
 * This function uses the sliding window technique to find the maximum sum of a subarray of size k.
 * Explanation video: https://youtu.be/MK-NZ4hN7rs?t=1174
 * 
 * @param {number[]} arr - An array of numbers
 * @param {number} k - A number
 * @param {number} methodFind - 0 - lowest sum value | 1 - highest sum value
 * 
 * @returns {number} - The maximum sum of a subarray of size k
 */
const slidingWindow = (arr, k, methodFind = 1) => {
  let returnSum = 0; // Initialize the maximum/minimum sum
  let windowSum = 0; // Initialize the sum of the current window
  let windowStart = 0; // Initialize the start of the window

  // Iterate over the array
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // Add the current element to the window sum

    // If the end of the window has reached k - 1
    if (windowEnd >= k - 1) { // If the window is fully formed
      if (methodFind === 0) returnSum = Math.min(returnSum, windowSum); // Update the minimum sum if necessary (pick the lowest sum between the current returnSum and the current windowSum)
      if (methodFind === 1) returnSum = Math.max(returnSum, windowSum); // Update the maximum sum if necessary (pick the highest sum between the current returnSum and the current windowSum)
     
      windowSum -= arr[windowStart]; // Subtract the first element of the window from the window sum
      windowStart++; // Move the start of the window one step to the right
    }
  }

  return returnSum; // Return the maximum sum
};


// Explanation video: https://youtu.be/MK-NZ4hN7rs?t=1896
/**
 * This function uses the sliding window technique to find the minimum size of a subarray of numbers that has a sum greater than or equal to k.
 * Time complexity: O(n)
 * Space complexity: O(1)
 * This is because each element in the array is visited at most twice, once by the windowEnd pointer (during the outer loop), 
 * and once by the windowStart pointer (during the inner while loop). Even though there's a loop inside a loop, the inner loop does not always process n elements. The inner loop only processes elements when the sum of elements in the window is greater than or equal to k, and it stops as soon as this is no longer the case.
 * 
 * 
 * @param {number[]} arr - An array of numbers
 * @param {number} k - A number
 * 
 * @returns {number} - The minimum size of a subarray of numbers that has a sum greater than or equal to k
 */
const slidingWindowDynamic = (arr, k) => {
  let returnWindowSize = arr.length; // How many elements in the subarray (initialize as all elements in the array)

  let windowSum = 0; // Initialize the sum of the current window
  let windowStart = 0; // Initialize the start of the window


  // Iterate over the array
  // Note: sometimes is better to reverse the order of the for loop.
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // Add the current element to the window sum

    while (windowSum >= k) { // While the window sum is greater than or equal to k
      returnWindowSize = Math.min(returnWindowSize, windowEnd - windowStart + 1); // Update the minimum window size if necessary (pick the lowest value between the current returnWindowSize and the current window size)

      // Logic to also return the indexes of the subarray
      // if (windowEnd - windowStart + 1 < returnWindowSize) { // If the current window size is smaller than the minimum found so far
      //   returnWindowSize = windowEnd - windowStart + 1; // Update the minimum window size
      //   minWindowStart = windowStart; // Update the start of the minimum window
      //   minWindowEnd = windowEnd; // Update the end of the minimum window
      // }

      windowSum -= arr[windowStart]; // Subtract the first element of the window from the window sum
      windowStart++; // Move the start of the window one step to the right (shrink the window)
    }
  }


  return returnWindowSize;
};


// Explanation video: https://youtu.be/MK-NZ4hN7rs?t=2021
const slidingWindowDynamicHashMap = (arr, k) => {
  // TODO: revisit
};


module.exports = { slidingWindow, slidingWindowDynamic, slidingWindowDynamicHashMap }; // Export the function using CommonJS module export