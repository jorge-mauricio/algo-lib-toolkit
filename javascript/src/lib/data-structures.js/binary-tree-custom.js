// ref: https://youtu.be/4s1Tcvm00pA?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&t=3974

class Node {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }

  // Node(value) {
  //   this.value = value;
  // }
}

class BinaryTreeCustom {
  constructor() {
      this.root = null;
  }

  // main = () => {
  //   this.scanner = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  //   this.root = null;

  //   this.scanner.forEach((scanner) => {
  //     this.root = this.populate(scanner, this.root);
  //   });

  //   this.display(this.root, '');
  // }

  // Insert elements
  populate = (scanner, node) => {
    if (node === null) {
      return new Node(scanner);
    }

    if (scanner < node.value) {
      node.left = this.populate(scanner, node.left);
    } else {
      node.right = this.populate(scanner, node.right);
    }

    return node;
  }

  display = (node, indent = '') => {
    if (node === null) {
      return;
    }

    this.display(node.right, indent + '  ');
    console.log(indent + node.value);
    this.display(node.left, indent + '  ');
  }

}

module.exports = BinaryTreeCustom;
