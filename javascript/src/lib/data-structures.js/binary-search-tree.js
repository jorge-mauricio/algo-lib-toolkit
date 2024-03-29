/**
 * Node class represents each node in the Binary Search Tree.
 */
class Node {
  /**
   * Node constructor.
   * @param {number} data - The data value of the node.
   */
  constructor(data) {
    this.data = data; // The data value of the node
    this.left = null; // The left child of the node
    this.right = null; // The right child of the node
  }
}

/**
 * BinarySearchTree class represents the Binary Search Tree.
 */
class BinarySearchTree {
  /**
   * BinarySearchTree constructor.
   */
  constructor() {
    this.root = null; // The root node of the Binary Search Tree
  }

  /**
   * Inserts a new node into the Binary Search Tree.
   * @param {number} data - The data value of the node to be inserted.
   * @returns {BinarySearchTree} The Binary Search Tree after the node is inserted.
   */
  insert(data) {
    // Create a new node with the given data
    const newNode = new Node(data);

    // If the Binary Search Tree is empty, set the new node as the root
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    // Start at the root node
    let currentNode = this.root;

    // Continue indefinitely until we return from the function
    while (true) {
      // If the data is equal to the current node's data, return undefined
      // because we don't allow duplicate values in the Binary Search Tree
      if (data === currentNode.data) return undefined;

      // If the data is less than the current node's data...
      if (data < currentNode.data) {
        // ...and the current node has no left child, insert the new node as the left child
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        // ...otherwise, move to the left child and continue
        currentNode = currentNode.left;
      } else { // If the data is greater than the current node's data...
        // ...and the current node has no right child, insert the new node as the right child
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        // ...otherwise, move to the right child and continue
        currentNode = currentNode.right;
      }
    }
  }

  /**
   * Finds a node in the Binary Search Tree.
   * @param {number} data - The data value of the node to be found.
   * @returns {boolean} True if the node is found, false otherwise.
   */
  find(data) {
    if (!this.root) return false;

    let currentNode = this.root;

    while (currentNode) {
      if (data === currentNode.data) return true;

      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  /**
   * Performs Breadth-First Search on the Binary Search Tree.
   * ref: https://youtu.be/9D-vP-jcc-Y?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&t=1370
   * @returns {number[]} An array of node values in the order they were visited.
   */
  bfs() {
    const queue = []; // Initialize a queue
    const data = []; // Initialize an array to hold the data of visited nodes
    let node = this.root; // Start at the root of the tree

    // Add the root node to the queue
    queue.push(node);

    // Continue until the queue is empty
    while (queue.length) {
      // Remove the first node from the queue
      node = queue.shift();

      // Add the node's data to the data array
      data.push(node.data);

      // If the node has a left child, add it to the queue
      if (node.left) queue.push(node.left);

      // If the node has a right child, add it to the queue
      if (node.right) queue.push(node.right);
    }

    // Return the data array
    return data;
  }

  /**
   * Performs Breadth-First Search on the Binary Search Tree by level.
   * @returns {number[][]} An array of arrays, where each inner array represents a level of the tree.
   */
  bfsByLevel() {
    const queue = []; // Initialize a queue
    const levels = []; // Initialize an array to hold the data of visited nodes by level

    if (this.root) {
      // Add the root node to the queue
      queue.push(this.root);
    }

    // Continue until the queue is empty
    while (queue.length) {
      const queueLength = queue.length; // Get the current queue length
      const level = []; // Initialize an array to hold the data of the current level

      // For each node in the current level...
      for (let i = 0; i < queueLength; i++) {
        // Remove the first node from the queue
        const node = queue.shift();

        // Add the node's data to the level array
        level.push(node.data);

        // If the node has a left child, add it to the queue
        if (node.left) queue.push(node.left);

        // If the node has a right child, add it to the queue
        if (node.right) queue.push(node.right);
      }

      // Add the level array to the levels array
      levels.push(level);
    }

    // Return the levels array
    return levels;
  }

  /**
   * Performs Breadth-First Search in Zigzag order on the Binary Search Tree.
   * The traversal alternates between left-to-right and right-to-left order for each level of the tree.
   * @returns {number[]} An array of node values in the order they were visited, in zigzag order.
   */
  bfsZigZag() {
    if (!this.root) return []; // Check if the tree is empty

    const queue = [this.root]; // Initialize a queue with the root
    const result = []; // Initialize the result array
    let level = 0; // Track the current level, starting from 0

    // Continue until the queue is empty
    while (queue.length) {
      const levelSize = queue.length; // Number of nodes at the current level
      const currentLevel = []; // Temporary array to store values of the current level

      // Process all nodes at the current level
      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift(); // Remove and get the first node in the queue

        // Depending on the current level, add the node's value at the beginning or end of the currentLevel array
        if (level % 2 === 0) {
          currentLevel.push(node.data); // For even levels, left-to-right order
        } else {
          currentLevel.unshift(node.data); // For odd levels, right-to-left order
        }

        // Add child nodes to the queue for the next level
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }

      // Add the current level's values to the result array
      result.push(...currentLevel);
      level++; // Move to the next level
    }

    return result;
  }

  /**
     * Performs Breadth-First Search on the Binary Search Tree in vertical order.
     * @returns {number[][]} An array of arrays, where each inner array represents a vertical level of the tree.
     */
  bfsVerticalOrder() {
    if (!this.root) return [];

    const queue = []; // Initialize a queue
    const verticalOrder = {}; // Initialize an object to hold the data of visited nodes by vertical level
    let min = 0, max = 0; // Initialize min and max to track the range of vertical levels

    // Add the root node to the queue with a vertical level of 0
    queue.push({ node: this.root, level: 0 });

    // Continue until the queue is empty
    while (queue.length) {
      // Remove the first node from the queue
      const { node, level } = queue.shift();

      // If this is the first node at its level, initialize an array for this level
      if (!verticalOrder[level]) verticalOrder[level] = [];

      // Add the node's data to the array for its level
      verticalOrder[level].push(node.data);

      // If the node has a left child, add it to the queue with a level one less than the current node's level
      if (node.left) {
        queue.push({ node: node.left, level: level - 1 });
        min = Math.min(min, level - 1);
      }

      // If the node has a right child, add it to the queue with a level one more than the current node's level
      if (node.right) {
        queue.push({ node: node.right, level: level + 1 });
        max = Math.max(max, level + 1);
      }
    }

    // Convert the verticalOrder object to an array of arrays
    const result = [];
    for (let i = min; i <= max; i++) {
      result.push(verticalOrder[i]);
    }

    // Return the result array
    return result;
  }

  /**
   * Performs Depth-First Search (Pre-Order) on the Binary Search Tree.
   * @returns {number[]} An array of node values in the order they were visited.
   */
  dfsPreOrder() {
    const data = [];

    function traverse(node) {
      data.push(node.data);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }

  /**
   * Performs Depth-First Search (Post-Order) on the Binary Search Tree.
   * @returns {number[]} An array of node values in the order they were visited.
   */
  dfsPostOrder() {
    const data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      data.push(node.data);
    }

    traverse(this.root);

    return data;
  }

  /**
   * Performs Depth-First Search (In-Order) on the Binary Search Tree.
   * @returns {number[]} An array of node values in the order they were visited.
   */
  dfsInOrder() {
    const data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.data);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }

  /**
   * Displays the Binary Search Tree in a way that identifies the levels.
   */
  display() {
    if (!this.root) return;

    let queue = [{ node: this.root, level: 0 }];
    let output = '';

    while (queue.length) {
      let { node, level } = queue.shift();

      output += 'Level ' + level + ': ' + node.data + '\n';

      if (node.left) queue.push({ node: node.left, level: level + 1 });
      if (node.right) queue.push({ node: node.right, level: level + 1 });
    }

    console.log(output);
  }  

  /**
   * Displays the Binary Search Tree in a way that visualizes the levels with indentation.
   */
  displayTree(node = this.root, indent = '') {
    if (!node) return;

    console.log(indent + node.data);

    if (node.left) this.displayTree(node.left, indent + '  ');
    if (node.right) this.displayTree(node.right, indent + '  ');
  }

  // Didn't work as expected
  // displayPretty() {
  //   let queue = [this.root];
  //   let result = '';
  //   let currentLevel = 1;
  //   let nextLevel = 0;

  //   while (queue.length) {
  //     let currentNode = queue.shift();
  //     currentLevel--;

  //     if (currentNode) {
  //       result += currentNode.data + ' ';
  //       queue.push(currentNode.left);
  //       queue.push(currentNode.right);
  //       nextLevel += 2;
  //     } else {
  //       result += 'X ';
  //     }

  //     if (currentLevel === 0) {
  //       result += '\n';
  //       currentLevel = nextLevel;
  //       nextLevel = 0;
  //     }
  //   }

  //   console.log(result);
  // }
}

module.exports = BinarySearchTree; // Export the BinarySearchTree class for use in other modules
