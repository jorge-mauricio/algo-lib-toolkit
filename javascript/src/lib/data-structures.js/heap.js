// ref: https://youtu.be/Qf-TDPr0nYw?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&t=2286

class Heap {
  constructor() {
    // Initialize the heap array
    this.heap = [];
  }

  /**
   * Swaps two elements in the heap.
   * @param {number} index1 - The index of the first element.
   * @param {number} index2 - The index of the second element.
   * @private
   * 
   */
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex(index) {
    return 2 * index + 1;
  }

  rightChildIndex(index) {
    return 2 * index + 2;
  }
  

  /**
   * Inserts a value into the heap.
   * @param {number} value - The value to be inserted.
   */
  insert(value) {
    // Add the value to the end of the heap
    this.heap.push(value);

    // Reorder the heap to maintain the heap property
    this.bubbleUp();
  }

  /**
   * Reorders the heap after an insertion to maintain the heap property.
   */
  bubbleUp() {
    let index = this.heap.length - 1;

    // Continue until the heap property is restored
    while (index > 0) {
      let element = this.heap[index],
        parentIndex = Math.floor((index - 1) / 2),
        parent = this.heap[parentIndex];

      // If the parent is greater than or equal to the new element, the heap property is restored
      if (parent >= element) break;

      // Otherwise, swap the parent and the new element
      this.heap[index] = parent;
      this.heap[parentIndex] = element;

      // Move up to the next level
      index = parentIndex;
    }
  }

  /**
   * Removes and returns the maximum value from the heap.
   * @returns {number} The maximum value.
   */
  extractMax() {
    // The maximum value is at the root of the heap
    const max = this.heap[0];

    // Remove the last element from the heap
    const last = this.heap.pop();

    // If there are still elements in the heap...
    if (this.heap.length > 0) {
      // Move the last element to the root
      this.heap[0] = last;

      // Reorder the heap to maintain the heap property
      this.sinkDown(0);
    }

    // Return the maximum value
    return max;
  }

  /**
   * Reorders the heap after an extraction to maintain the heap property.
   * @param {number} index - The index of the element to sink down.
   */
  sinkDown(index) {
    let left = 2 * index + 1,
      right = 2 * index + 2,
      largest = index;
    const length = this.heap.length;

    // If the left child is greater than the current largest, update largest
    if (left < length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    // If the right child is greater than the current largest, update largest
    if (right < length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    // If the largest is not the element being sunk down...
    if (largest !== index) {
      // Swap the element being sunk down and the largest child
      [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]];

      // Continue sinking down the element
      this.sinkDown(largest);
    }
  }

  // ref: https://youtu.be/Qf-TDPr0nYw?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&t=3124
  heapSort() {
    // Create a new array to store the sorted elements
    const sortedArray = [];

    // Continue removing the maximum value from the heap until it is empty
    while (this.heap.length) {
      sortedArray.push(this.extractMax());
    }

    // Return the sorted array
    return sortedArray;
  }

  // ref: https://youtu.be/Qf-TDPr0nYw?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&t=3352
  priorityQueue() {
    return this.heap;
  }


}

module.exports = Heap;