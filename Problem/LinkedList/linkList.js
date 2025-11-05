/*
A linked list is a linear data structure where elements, called nodes, are connected through pointers. 
Each node contains two parts: the data and a reference (or pointer) to the next node.
 The first node is called the head, and the last node points to null.
  Linked lists are dynamic, meaning they can grow or shrink as needed, unlike arrays with fixed sizes.



Implementation of a Linked List

Below is an example of implementing a singly linked list in JavaScript:

*/

// Node Constructor Function
function Node(value) {
  this.value = value;
  this.next = null;
}

// LinkedList Constructor Function
function LinkedList() {
  this.head = null;

  // Add a new node to the end of the list
  this.append = function (value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  };

  // Delete a node by value
  this.delete = function (value) {
    if (!this.head) return;

    // If the head node is the one to delete
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  };

  // Print all nodes in the list
  this.print = function () {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" -> "));
  };
}

// Example Usage
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print(); // Output: 10 -> 20 -> 30
list.delete(20);
list.print(); // Output: 10 -> 30
