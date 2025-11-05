/*
A stack is a linear data structure that operates on the Last In, First Out (LIFO) principle. 
This means the last element added to the stack is the first one to be removed. 
Stacks are widely used in applications like function call management, undo mechanisms, and expression parsing.

Array-Based Stack Implementation

In JavaScript, stacks can be implemented using arrays,
 leveraging the built-in push() and pop() methods for adding and removing elements.


*/

class Stack {
   constructor() {
       this.items = [];
   }
   // Add an element to the stack
   push(element) {
       this.items.push(element);
   }
   // Remove and return the top element
   pop() {
       if (this.isEmpty()) {
           return "Stack is empty";
       }
       return this.items.pop();
   }
   // View the top element
   peek() {
       if (this.isEmpty()) {
           return "Stack is empty";
       }
       return this.items[this.items.length - 1];
   }
   // Check if the stack is empty
   isEmpty() {
       return this.items.length === 0;
   }
   // Get the size of the stack
   size() {
       return this.items.length;
   }
   // Print the stack
   print() {
       console.log(this.items);
   }
}
// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek()); // 30
console.log(stack.pop()); // 30
console.log(stack.size()); // 2
stack.print(); // [10, 20]