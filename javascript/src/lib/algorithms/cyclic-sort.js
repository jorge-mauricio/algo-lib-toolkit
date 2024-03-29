// This function sorts an array of integers in place using the cyclic sort algorithm.
// It's designed to work with arrays where the integers are in the range 1 to n, where n is the size of the array.
// It works by repeatedly placing each number at its correct index in the array.
const cyclicSort = (arr) => {
  // Iterate over the array
  for (let i = 0; i < arr.length; i++) {
    // Calculate the correct index for the current number
    let correctIndex = arr[i] - 1;

    // While the current number is not at its correct index
    while (arr[i] !== arr[correctIndex]) {
      // Swap the current number with the number at its correct index
      [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]]; // optimized swap
      // Simplified swap
      // let temp = arr[i];
      // arr[i] = arr[correctIndex];
      // arr[correctIndex] = temp;

      // Recalculate the correct index for the current number
      correctIndex = arr[i] - 1;
    }
  }

  // Return the sorted array
  return arr;
};

module.exports = { cyclicSort }; // Export the function using CommonJS module export
