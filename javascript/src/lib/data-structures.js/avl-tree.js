// ref: https://youtu.be/4s1Tcvm00pA?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&t=6529


/**
 * Node class represents each node in the AVL Tree.
 */
class Node {
  /**
   * Node constructor.
   * @param {number} data - The data value of the node.
   */
  constructor(data) {
    this.data = data; // The data value of the node
    this.height = 1; // The height of the node
    this.left = null; // The left child of the node
    this.right = null; // The right child of the node
  }
}

/**
 * AVLTree class represents the AVL Tree.
 */
class AVLTree {
  /**
   * AVLTree constructor.
   */
  constructor() {
    this.root = null; // The root node of the AVL Tree
  }

  /**
   * Gets the height of the node.
   * @param {Node} node - The node.
   * @returns {number} The height of the node.
   */
  getHeight(node) {
    if (!node) return 0;
    return node.height;
  }

  /**
   * Gets the balance factor of the node.
   * @param {Node} node - The node.
   * @returns {number} The balance factor of the node.
   */
  getBalance(node) {
    if (!node) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  /**
   * Performs a right rotation on the node.
   * @param {Node} node - The node.
   * @returns {Node} The new root after the rotation.
   */
  rightRotate(node) {
    let newRoot = node.left;
    let newLeftSubtree = newRoot.right;

    newRoot.right = node;
    node.left = newLeftSubtree;

    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    newRoot.height = Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right)) + 1;

    return newRoot;
  }

  /**
   * Performs a left rotation on the node.
   * @param {Node} node - The node.
   * @returns {Node} The new root after the rotation.
   */
  leftRotate(node) {
    let newRoot = node.right;
    let newRightSubtree = newRoot.left;

    newRoot.left = node;
    node.right = newRightSubtree;

    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    newRoot.height = Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right)) + 1;

    return newRoot;
  }

  /**
   * Inserts a new node into the AVL Tree.
   * @param {number} data - The data value of the node to be inserted.
   * @returns {Node} The root of the tree after the node is inserted.
   */
  insert(data, node = this.root) {
    // Normal Binary Search Tree insertion
    if (!node) return new Node(data);

    if (data < node.data) {
      node.left = this.insert(data, node.left);
    } else if (data > node.data) {
      node.right = this.insert(data, node.right);
    } else {
      return node;
    }

    // Update the height of the node
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    // Get the balance factor
    let balance = this.getBalance(node);

    // If the node is unbalanced, perform rotations
    if (balance > 1) {
      if (data < node.left.data) {
        return this.rightRotate(node);
      } else if (data > node.left.data) {
        node.left = this.leftRotate(node.left);
        return this.rightRotate(node);
      }
    }

    if (balance < -1) {
      if (data > node.right.data) {
        return this.leftRotate(node);
      } else if (data < node.right.data) {
        node.right = this.rightRotate(node.right);
        return this.leftRotate(node);
      }
    }

    return node;
  }

  display = (node = this.root, level = 0) => {
    if (node) {
      this.display(node.right, level + 1);
      console.log(" ".repeat(level * 4) + `-> ${node.data}`);
      this.display(node.left, level + 1);
    }
  }
}

module.exports = AVLTree; // Export the function using CommonJS module export
