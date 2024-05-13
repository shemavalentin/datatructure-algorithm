// This is using a linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Creating an empty stack
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    // peek let's us see the very top node,
    return this.top;
  }
  push(value) {
    // It let's us add a node to the top.
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
    return this;
  }
  pop() {
    // let's us remove the very top alement
    // Check first if there is node to pop

    if (!this.top) {
      return null;
    }
    // When you removed all node the bottom node should also be null

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    // Otherwise

    //const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

//isEmpty

const myStack = new Stack();
myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();

// Discord
//Udemy
//Google

// Let's convert into arrays

class Stack {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.top === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
    return this;
  }

  pop() {
    // Checking if there exist a node

    if (!this.top) {
      return null;
    }

    // check if the buottom is equal to top after remove

    if (this.top === this.bottom) {
      return (this.bottom = null);
    }

    this.top = this.top.next;
    this.length--;
    return this;
  }
}