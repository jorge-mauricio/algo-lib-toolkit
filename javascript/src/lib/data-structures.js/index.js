// Instructions:
// Terminal: node src/lib/data-structures.js/index.js


// Binary tree
// ############################################################################
// import BinaryTree from './binary-tree';
const BinaryTree = require('./binary-tree.js');

let binaryTreeExample1 = new BinaryTree();
binaryTreeExample1.insert(15);
binaryTreeExample1.insert(25);
binaryTreeExample1.insert(10);
binaryTreeExample1.insert(50);

console.log('binaryTreeExample1=', binaryTreeExample1);
console.log('binaryTreeExample1 (JSON.stringify)=', JSON.stringify(binaryTreeExample1, null, 2));

// ############################################################################

// Binary tree Custom
// ############################################################################
const BinaryTreeCustom = require('./binary-tree-custom.js');

// let binaryTreeCustomExample = new BinaryTreeCustom();
// binaryTreeCustomExample.populate(15);
// binaryTreeCustomExample.populate(25);
// binaryTreeCustomExample.populate(10);
// binaryTreeCustomExample.populate(50);

// binaryTreeCustomExample.display(15);


let binaryTreeCustomExample = new BinaryTreeCustom();

// Array of values to populate the tree
let values = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// Populate the tree
values.forEach((value) => {
  binaryTreeCustomExample.root = binaryTreeCustomExample.populate(value, binaryTreeCustomExample.root);
});

// Display the tree
console.log('binaryTreeExample=');
binaryTreeCustomExample.display(binaryTreeCustomExample.root);

// console.log('binaryTreeExample2=', binaryTreeExample2);
// console.log('binaryTreeExample2 (JSON.stringify)=', JSON.stringify(binaryTreeExample2, null, 2));
// ############################################################################

// Binary search tree
// ############################################################################
const BinarySearchTree = require('./binary-search-tree.js');

let binarySearchTreeExample = new BinarySearchTree();
binarySearchTreeExample.insert(15);
binarySearchTreeExample.insert(25);
binarySearchTreeExample.insert(10);
binarySearchTreeExample.insert(7);
binarySearchTreeExample.insert(22);
binarySearchTreeExample.insert(17);
binarySearchTreeExample.insert(13);
binarySearchTreeExample.insert(5);
binarySearchTreeExample.insert(9);
binarySearchTreeExample.insert(27);

// Display the tree
console.log('binarySearchTreeExample=');
// binarySearchTreeExample.display();
binarySearchTreeExample.displayTree();
// binarySearchTreeExample.displayPretty();

// bsf
// binarySearchTreeExample.bfs();
let binarySearchTreeBSF = binarySearchTreeExample.bfs();

console.log('binarySearchTreeBSF=', binarySearchTreeBSF);


// bsf by level
let binarySearchTreeBSFByLevel = binarySearchTreeExample.bfsByLevel();

console.log('binarySearchTreeBSFByLevel=', binarySearchTreeBSFByLevel);

// bsf zigzag
let binarySearchTreeBSFZigZag = binarySearchTreeExample.bfsZigZag();

console.log('binarySearchTreeBSFZigZag=', binarySearchTreeBSFZigZag);

// bsf vertical order
let binarySearchTreeBSFVerticalOrder = binarySearchTreeExample.bfsVerticalOrder();

console.log('binarySearchTreeBSFVerticalOrder=', binarySearchTreeBSFVerticalOrder);
// ############################################################################

// AVL tree
// ############################################################################
const AVLTree = require('./avl-tree.js');

let avlTreeExample = new AVLTree();
avlTreeExample.root = avlTreeExample.insert(15);
avlTreeExample.root = avlTreeExample.insert(25);
avlTreeExample.root = avlTreeExample.insert(10);
avlTreeExample.root = avlTreeExample.insert(7);
avlTreeExample.root = avlTreeExample.insert(22);
avlTreeExample.root = avlTreeExample.insert(17);
avlTreeExample.root = avlTreeExample.insert(13);
avlTreeExample.root = avlTreeExample.insert(5);

// Display the tree
console.log('avlTreeExample=');
avlTreeExample.display(avlTreeExample.root);

// console.log('avlTreeExample=', avlTreeExample);
// console.log('avlTreeExample (JSON.stringify)=', JSON.stringify(avlTreeExample, null, 2));
// ############################################################################


// Single linked list
// ############################################################################
const SinglyLinkedList = require('./single-linked-list.js');

const sllExample = new SinglyLinkedList();
sllExample.add('Node 1');
sllExample.add('Node 2');
sllExample.add('Node 3');
sllExample.addAt('Node 4 (added at index 2)', 2);
sllExample.print(); // prints: Node 1, Node 2, Node 3

console.log('sllExample (display)=');
sllExample.display();

console.log('sllExample=', sllExample);
console.log('sllExample (JSON.stringify)=', JSON.stringify(sllExample, null, 2));
// ############################################################################

// Double linked list
// ############################################################################
const DoublyLinkedList = require('./double-linked-list.js');

const dllExample = new DoublyLinkedList();
dllExample.add('Node 1');
dllExample.add('Node 2');
dllExample.add('Node 3');
dllExample.add('Node 4');
dllExample.add('Node 5');
dllExample.print(); // prints: Node 1, Node 2, Node 3
dllExample.printList(); // prints: Head <-> Node 1 <-> Node 2 <-> Node 3 <-> Node 4 <-> Node 5 <-> Tail

console.log('dllExample=', dllExample);
// console.log('dllExample (JSON.stringify)=', JSON.stringify(dllExample, null, 2));
// console.log('dllExample (print)=', dllExample.printList());
// ############################################################################


// Heap
// ############################################################################
const Heap = require('./heap.js');

let heapExample = new Heap();
heapExample.insert(10);
heapExample.insert(5);
heapExample.insert(17);
heapExample.insert(4);
heapExample.insert(22);
heapExample.insert(18);
heapExample.insert(20);

console.log('heapExample=', heapExample.extractMax()); // Output: 3
console.log('heapExample=', heapExample.extractMax()); // Output: 2
console.log('heapExample=', heapExample.extractMax()); // Output: 1

console.log('heapExample=', heapExample);
console.log('heapExample (JSON.stringify)=', JSON.stringify(heapExample, null, 2));
// ############################################################################
