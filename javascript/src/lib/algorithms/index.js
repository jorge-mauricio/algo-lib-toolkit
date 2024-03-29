// Instructions:
// Terminal: node src/lib/algorithms/index.js

// Two Pointer Algorithm
// ############################################################################
// Import the twoPointer function from the two-pointer.js file
// import twoPointer from './two-pointer.js';
const twoPointer = require('./two-pointer.js');

// Example array and target
const arrTwoPointer = [1, 2, 3, 4, 5];
const targetTwoPointer = 7;

// Use the twoPointer function
const resultTwoPointerIndexes = twoPointer(arrTwoPointer, targetTwoPointer, 1); // return index
const resultTwoPointerValues = twoPointer(arrTwoPointer, targetTwoPointer, 2); // return value
// Note: sort array before use twoPointer. For returning indexes, won't work with unsorted array.

console.log('resultTwoPointerIndexes=', resultTwoPointerIndexes); // Outputs: [1, 4]
console.log('resultTwoPointerValues=', resultTwoPointerValues); // Outputs: [2, 5]
// ############################################################################


// hashMap 
// ############################################################################
// import hashMap from './hash-map.js';
const hashMap = require('./hash-map.js');

// Example array and target
// sorted array
// const arrHashMap = [2, 7, 11, 15];
// unsorted array
const arrHashMap = [7, 2, 11, 15];

const targetHashMap = 13;

// Use the twoSum function
const resultHashMapIndexes = hashMap(arrHashMap, targetHashMap, 1); // return index
const resultHashMapValues = hashMap(arrHashMap, targetHashMap, 2); // return value

console.log('resultHashMapIndexes=', resultHashMapIndexes); // Outputs: [0, 2] / [1, 2]
console.log('resultHashMapValues=', resultHashMapValues); // Outputs: [2, 11] / [2, 11]
// ############################################################################

// slidingWindow
// ############################################################################
// Import the slidingWindow function from the sliding-window.js file
const { slidingWindow } = require('./sliding-window.js');

// Maximum sum of a subarray of size k

// Example array and subarray size
const arrSlidingWindow = [2, 3, 4, 1, 5];
const kSlidingWindow = 3;

// Use the slidingWindow function
const resultSlidingWindow = slidingWindow(arrSlidingWindow, kSlidingWindow);

console.log('resultSlidingWindow=', resultSlidingWindow); // Outputs: 10
// ############################################################################


// slidingWindowDynamic
// ############################################################################
// Import the slidingWindowDynamic function from the sliding-window.js file
const { slidingWindowDynamic } = require('./sliding-window.js');

// Minimum size of a subarray of numbers that has a sum greater than or equal to k

// Example array and target
const arrSlidingWindowDynamic = [2, 1, 5, 2, 3, 2];
const kSlidingWindowDynamic = 7;

// Use the slidingWindowDynamic function
const resultSlidingWindowDynamic = slidingWindowDynamic(arrSlidingWindowDynamic, kSlidingWindowDynamic);

console.log('resultSlidingWindowDynamic=', resultSlidingWindowDynamic); // Outputs: 2
// ############################################################################

// Recursion (Basic)
// ############################################################################
// Import the factorial function from the recursion.js file
const { factorial } = require('./recursion.js');

// Example number
const numFactorial = 5;

// Use the factorial function
const resultFactorial = factorial(numFactorial);

console.log('resultFactorial=', resultFactorial); // Outputs: 120

// Import the fibonacci function from the recursion.js file
const { fibonacci } = require('./recursion.js');

// Example number
const numFibonacci = 6;

// Use the fibonacci function
const resultFibonacci = fibonacci(numFibonacci);

console.log('resultFibonacci=', resultFibonacci); // Outputs: 8


// Import the sum function from the recursion.js file
const { sumDigits } = require('./recursion.js');

// Example number
const numSumDigits = 12345;

// Use the sum function
const resultSumDigits = sumDigits(numSumDigits);

console.log('resultSumDigits=', resultSumDigits); // Outputs: 15

// Import the reverse function from the recursion.js file
const { reverseNumber } = require('./recursion.js');

// Example number
const numReverse = 12345;

// Use the reverse function
const resultReverse = reverseNumber(numReverse);

console.log('resultReverse=', resultReverse); // Outputs: 54321

// Import arrayCheckSort function from the recursion.js file
const { arrayCheckSort } = require('./recursion.js');

// Example array
const arrCheckSort = [1, 2, 3, 4, 5];
const arrCheckSortFalse = [1, 2, 6, 5, 4];
const arrCheckSortFalse_lastIndex = [1, 2, 3, 7, 6];

// Use the arrayCheckSort function
const resultCheckSort = arrayCheckSort(arrCheckSort, 1);
const resultCheckSortFalse = arrayCheckSort(arrCheckSortFalse, 1);
const resultCheckSortFalse_lastIndex = arrayCheckSort(arrCheckSortFalse_lastIndex, 1);

console.log('resultCheckSort=', resultCheckSort); // Outputs: true
console.log('resultCheckSortFalse=', resultCheckSortFalse); // Outputs: false
console.log('resultCheckSortFalse_lastIndex=', resultCheckSortFalse_lastIndex); // Outputs: false


// Import arrayFindAll function from the recursion.js file
const { arrayFindAll } = require('./recursion.js');

const arrFindAll = [6, 2, 3, 4, 5, 6, 6, 6, 7, 8, 9];
const targetFindAll = 6;

// Use the arrayFindAll function
const resultFindAll = arrayFindAll(arrFindAll, targetFindAll);

console.log('resultFindAll=', resultFindAll); // Outputs: [5, 6, 7]


// Import the arrayFindAllNoList function
const { arrayFindAllNoList } = require('./recursion.js');

// Example array and target
const arrFindAllNoList = [6, 2, 3, 4, 5, 6, 6, 6, 7, 8, 9];
const targetFindAllNoList = 6;

// Use the arrayFindAllNoList function
const resultFindAllNoList = arrayFindAllNoList(arrFindAllNoList, targetFindAllNoList, 0);

console.log('resultFindAllNoList=', resultFindAllNoList); // Outputs: [5, 6, 7]
// ############################################################################


// Binary Search
// ############################################################################
// Import the binarySearch function
const { binarySearchRecursive } = require('./binary-search.js');

// Example sorted array
const arrBinarySearch = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];

// Target value to find
const targetBinarySearch = 11;

// Initial call to binarySearch with the full range of the array
const resultBinarySearchIndex = binarySearchRecursive(arrBinarySearch, targetBinarySearch, 0, arrBinarySearch.length - 1);

console.log('resultBinarySearchIndex=', resultBinarySearchIndex); // Outputs: 5

// if (resultIndex !== -1) {
//     console.log(`Target found at index: ${resultIndex}`);
// } else {
//     console.log("Target not found in the array.");
// }


// Import the binarySearchIterative function from the binary-search.js file
const { binarySearchIterative } = require('./binary-search.js');

// Example array and target
const arrBinarySearchIterative = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetBinarySearchIterative = 6;

// Use the binarySearchIterative function
const resultBinarySearchIterative = binarySearchIterative(arrBinarySearchIterative, targetBinarySearchIterative);

console.log('resultBinarySearchIterative=', resultBinarySearchIterative); // Outputs: 5


// Import the binarySearchRotatedRecursive function from the binary-search.js file
const { binarySearchRotatedRecursive } = require('./binary-search.js');

// Example rotated array and target
const arrBinarySearchRotated = [4, 5, 6, 7, 0, 1, 2];
const targetBinarySearchRotated = 0;

// Use the binarySearchRotatedRecursive function
const resultBinarySearchRotated = binarySearchRotatedRecursive(arrBinarySearchRotated, targetBinarySearchRotated, 0, arrBinarySearchRotated.length - 1);

console.log('resultBinarySearchRotated=', resultBinarySearchRotated); // Outputs: 4
// ############################################################################


// Cyclic Sort
// ############################################################################
// Import the cyclicSort function
const { cyclicSort } = require('./cyclic-sort.js');

// Example array
const arrCyclicSort = [3, 1, 5, 4, 2];

// Use the ciclycSort function
const resultCyclicSort = cyclicSort(arrCyclicSort);

console.log('resultCyclicSort=', resultCyclicSort); // Outputs: [1, 2, 3, 4, 5]
// ############################################################################


// Backtrack
// ############################################################################
// Import the backtrack function
const { subsetsUnique } = require('./backtrack.js');

// Example usage
// const arrSubsetsUnique = [1, 2, 3];
const arrSubsetsUnique = [3,2,4,1];

const resultSubsetsUnique = subsetsUnique(arrSubsetsUnique);

console.log('resultSubsetsUnique=', resultSubsetsUnique);
// ############################################################################


// Bubble Sort
// ############################################################################
// Import the bubbleSort function
const { bubbleSort } = require('./bubble-sort.js');

// Example array
const arrBubbleSort = [64, 34, 25, 12, 22, 11, 90];

// Use the bubbleSort function
const resultBubbleSort = bubbleSort(arrBubbleSort);

console.log('resultBubbleSort=', resultBubbleSort); // Outputs: [11, 12, 22, 25, 34, 64, 90]


// Import the bubbleSortRecursive function
const { bubbleSortRecursive } = require('./bubble-sort.js');

// Example array
const arrBubbleSortRecursive = [64, 34, 25, 12, 22, 11, 90];

// Use the bubbleSortRecursive function
const resultBubbleSortRecursive = bubbleSortRecursive(arrBubbleSortRecursive, arrBubbleSortRecursive.length - 1, 0);

console.log('resultBubbleSortRecursive=', resultBubbleSortRecursive); // Outputs: [11, 12, 22, 25, 34, 64, 90]
// ############################################################################

// Selection Sort
// ############################################################################
// Import the selectionSort function
const { selectionSortRecursive } = require('./selection-sort.js');


// Example array
const arrSelectionSortRecursive = [64, 34, 25, 12, 22, 11, 90];

// Use the SelectionSortRecursive function
const resultSelectionSortRecursive = selectionSortRecursive(arrSelectionSortRecursive, arrSelectionSortRecursive.length - 1, 0, 0);

console.log('resultSelectionSortRecursive[64, 34, 25, 12, 22, 11, 90]=', resultSelectionSortRecursive); // Outputs: [11, 12, 22, 25, 34, 64, 90]

// ############################################################################

// Merge Sort
// ############################################################################
// Import the selectionSort function
const { mergeSortRecursive } = require('./merge-sort.js');

// Example array
const arrMergeSortRecursive = [64, 34, 25, 12, 22, 11, 90];

// Use the MergeSortRecursive function
const resultMergeSortRecursive = mergeSortRecursive(arrMergeSortRecursive);

console.log('resultMergeSortRecursive[64, 34, 25, 12, 22, 11, 90]=', resultMergeSortRecursive); // Outputs: [11, 12, 22, 25, 34, 64, 90]
// ############################################################################

// Quick Sort
// ############################################################################
// Import the quickSortRecursive function
const { quickSortRecursive } = require('./quick-sort.js');

// Example array
const arrQuickSortRecursive = [64, 34, 25, 12, 22, 11, 90];

// Use the QuickSortRecursive function
const resultQuickSortRecursive = quickSortRecursive(arrQuickSortRecursive);

console.log('resultQuickSortRecursive[64, 34, 25, 12, 22, 11, 90]=', resultQuickSortRecursive); // Outputs: [11, 12, 22, 25, 34, 64, 90]
// ############################################################################

// String replace recursive
// ############################################################################
const { stringReplaceRecursive } = require('./subsequences.js');

// Example string
const arrStringReplaceRecursive = 'ssccaacd';

// Use the StringReplaceRecursive function
const resultStringReplaceRecursive = stringReplaceRecursive(arrStringReplaceRecursive, 'a');

console.log('resultStringReplaceRecursive(ssccaacd)=', resultStringReplaceRecursive); // Outputs: [11, 12, 22, 25, 34, 64, 90]
// ############################################################################


// String replace recursive
// ############################################################################
const { subsequenceUniqueRecursive, subsequenceUniqueIterative } = require('./subsequences.js');

// Example string
// const stringSubsequenceUniqueRecursive = 'qwerasd'; // too many combinations
const stringSubsequenceUniqueRecursive = 'abc';

// Use the StringReplaceRecursive function
const resultSubsequenceUniqueRecursive = subsequenceUniqueRecursive(stringSubsequenceUniqueRecursive);
const resultSubsequenceUniqueIterative = subsequenceUniqueIterative(stringSubsequenceUniqueRecursive);


console.log('resultSubsequenceUniqueRecursive(abc)=', resultSubsequenceUniqueRecursive); // Outputs: [11, 12, 22, 25, 34, 64, 90]
console.log('resultSubsequenceUniqueIterative(abc)=', resultSubsequenceUniqueIterative); // Outputs: [11, 12, 22, 25, 34, 64, 90]
// ############################################################################

// String permutations recursive
// ############################################################################
const { stringPermutationsDistinctRecursive } = require('./permutations.js');

// Example string
const stringPermutations = 'abc';

// Use the stringPermutationsDistinctRecursive function
const resultStringPermutations = stringPermutationsDistinctRecursive(stringPermutations);

console.log('resultStringPermutations(abc)=', resultStringPermutations); // Outputs: [11, 12, 22, 25, 34, 64, 90]
// ############################################################################


