// Node class to represent a node in the linked list
class Node {
  constructor(data, next = null) {
      this.data = data; // holds the data
      this.next = next; // pointer to the next node
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null; // head of the list
    
    // Note: Without a tail reference, adding a node at the end of the list requires traversing the entire list, which takes O(n) time. With a tail reference, this operation can be done in constant O(1) time, because you can directly access the last node of the list.
    this.tail = null; // tail of the list

    this.size = 0; // The number of nodes in the list
  }

  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current.data;
      }

      count++;
      current = current.next;
    }

    return null;
  }



  /**
   * Adds a new node to the beginning of the linked list.
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

      // Update the head reference to the new node
      this.head = newNode;
    }

    this.size++; // Increment the size of the list
  }

  /**
   * Adds a new node to the end of the linked list.
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
      // Otherwise, set the tail's next reference to the new node
      this.tail.next = newNode;

      // Update the tail reference to the new node
      this.tail = newNode;
    }

    this.size++; // Increment the size of the list
  }

  /**
   * Adds a new node at the specified index in the linked list.
   * @param {any} data - The data to be stored in the new node.
   * @param {number} index - The index at which to add the new node.
   * 
   * @returns {void}   * 
   * 
   * Note: This method has a time complexity of O(n) because it requires traversing the list to find the correct position to insert the new node.
   * 
  */  
  addAt(data, index) {
    // If the index is out of range, return
    if (index > 0 && index > this.size) {
      return;
    }

    // If the index is 0, add the data to the beginning of the list
    if (index === 0) {
      this.addFirst(data);
      return;
    }

    // If the index is the size of the list, add the data to the end of the list
    if (index === this.size) {
      this.addLast(data);
      return;
    }

    // Otherwise, create a new node with the given data
    const newNode = new Node(data);

    // Start at the head of the list
    let current = this.head;
    let previous = null;
    let count = 0;

    // Traverse to the index position
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    // Insert the new node between the previous and current nodes
    newNode.next = current;
    previous.next = newNode;

    this.size++; // Increment the size of the list
  }


  // method to add (traversing) a node to the end of the list
  // TODO: double check if tail is updated
  /**
   * Adds a new node to the end of the linked list.
   * @param {any} data - The data to be stored in the new node.
   */
  add(data) {
    // Create a new node with the given data
    const newNode = new Node(data);

    // If the linked list is empty, set the new node as the head
    if (!this.head) {
      this.head = newNode;
    } else {
      // Otherwise, start at the head
      let current = this.head;

      // Traverse to the end of the list
      while (current.next) {
        current = current.next;
      }

      // Add the new node to the end of the list
      current.next = newNode;
    }

    this.size++; // Increment the size of the list
  }

  // ref: https://youtu.be/58YbpRDc4yw?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&t=2548
  deleteFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
    this.size--;
  }

  deleteLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      this.size--;
      return;
    }

    let current = this.head;
    let previous = null;

    while (current.next) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
    this.size--;
  }

  // TODO: review considering the tail
  deleteAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.deleteFirst();
      return;
    }

    let current = this.head;
    let previous = null;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    previous.next = current.next;
    this.size--;
  }

  deleteByValue(value) {
    let current = this.head;
    let previous = null;

    while (current) {
      if (current.data === value) {
        if (previous) {
          previous.next = current.next;
        } else {
          this.head = current.next;
        }

        this.size--;
        return;
      }

      previous = current;
      current = current.next;
    }
  }

  reverse() {
    let current = this.head;
    let previous = null;
    let next = null;

    while (current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.head = previous;
  }
  

  display() {
    let current = this.head;
    let result = ''; // Initialize an empty string to hold the result

    while (current) {
      // Add the current node's data to the result string
      result += current.data;

      // If there's a next node, add an arrow to the result string
      if (current.next) {
        result += ' -> ';
      }

      // Move to the next node
      current = current.next;
    }

    // Log the result string
    console.log(result);
  }

  // method to print the list
  // ref: https://youtu.be/58YbpRDc4yw?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&t=1612
  print() {
      let current = this.head;
      while (current) {
          console.log(current.data);
          current = current.next;
      }
  }
}

module.exports = SinglyLinkedList; // Export the function using CommonJS module export