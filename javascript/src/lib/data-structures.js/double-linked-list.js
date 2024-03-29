// Node class to represent a node in the linked list
class Node {
  constructor(data, prev = null, next = null) {
      this.data = data; // holds the data
      this.prev = prev; // pointer to the previous node
      this.next = next; // pointer to the next node
  }
}

// DoublyLinkedList class
class DoublyLinkedList {
  constructor() {
    this.head = null; // head of the list
    this.tail = null; // tail of the list

    this.size = 0; // size of the list
  }

  /**
   * Adds a new node to the beginning of the doubly linked list.
   * @param {any} data - The data to be stored in the new node.
   */
  addFirst(data) {
    // Create a new node with the given data
    const newNode = new Node(data);

    // If the linked list is empty, set the new node as the head and the tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, set the new node's next reference to the current head
      newNode.next = this.head;

      // Set the current head's prev reference to the new node
      this.head.prev = newNode;

      // Update the head reference to the new node
      this.head = newNode;
    }

    // Increment the size of the list
    this.size++;
  }

  /**
   * Adds a new node to the end of the doubly linked list.
   * @param {any} data - The data to be stored in the new node.
   */
  addLast(data) {
    // Create a new node with the given data
    const newNode = new Node(data);

    // If the linked list is empty, set the new node as the head and the tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, set the new node's prev reference to the current tail
      newNode.prev = this.tail;

      // Set the current tail's next reference to the new node
      this.tail.next = newNode;

      // Update the tail reference to the new node
      this.tail = newNode;
    }

    // Increment the size of the list
    this.size++;
  }

  addAt(data, index) {
    if (index < 0 || index > this.size) {
      return null;
    }

    if (index === 0) {
      this.addFirst(data);
      return;
    }

    if (index === this.size) {
      this.addLast(data);
      return;
    }

    const newNode = new Node(data);
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        newNode.prev = current.prev;
        newNode.next = current;
        current.prev.next = newNode;
        current.prev = newNode;
        this.size++;
        return;
      }

      count++;
      current = current.next;
    }

    return null;
  }
  

  // method to add a node to the end of the list
  add(data) {
      const newNode = new Node(data);
      if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          newNode.prev = this.tail;
          this.tail.next = newNode;
          this.tail = newNode;
      }
  }

  // method to print the list
  print() {
      let current = this.head;
      while (current) {
          console.log(current.data);
          current = current.next;
      }
  }

  printList() {
    let current = this.head;
    let str = 'Head <-> ';
    while (current) {
      str += `${current.data} <-> `;
      current = current.next;
    }
    str += 'Tail';
    console.log(str);
  }  
}

module.exports = DoublyLinkedList; // Export the function using CommonJS module export