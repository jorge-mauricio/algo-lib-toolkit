// Export a function that implements the bubble sort algorithm
// The bubble sort algorithm sorts an array by repeatedly swapping adjacent elements that are out of order.
// It continues to do this until the array is sorted.
// The time complexity of the bubble sort algorithm is O(n^2) in the worst case.
// The space complexity of the bubble sort algorithm is O(1).
// The bubble sort algorithm is not recommended for large arrays due to its slow performance.
// It is mainly used for educational purposes and for sorting small arrays.
// The bubble sort algorithm is stable, meaning it preserves the relative order of equal elements.
// The bubble sort algorithm is in-place, meaning it does not require any extra space.
// The bubble sort algorithm is not adaptive, meaning it does not take advantage of existing order in the input.
const bubbleSort = (arr) => {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // optimized swap
        // let temp = arr[i];
        // arr[i] = arr[i + 1];
        // arr[i + 1] = temp;
        isSorted = false;
      }
    }
  }

  return arr;
};

const bubbleSortRecursive = (arr, row, col) => {
  if (row === 0) {
    return arr;
  }

  if (arr[col] > arr[col + 1]) {
    [arr[col], arr[col + 1]] = [arr[col + 1], arr[col]]; // optimized swap
    // let temp = arr[col];
    // arr[col] = arr[col + 1];
    // arr[col + 1] = temp;
  }

  if (col < row) {
    return bubbleSortRecursive(arr, row, col + 1);
  
  } else {
    return bubbleSortRecursive(arr, row - 1, 0);
  }
};

module.exports = { bubbleSort, bubbleSortRecursive }; // Export the function using CommonJS module export
// 