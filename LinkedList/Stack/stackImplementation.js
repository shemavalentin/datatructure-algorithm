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
    this.array = [];
    //   this.length = 0;
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  pop() {
    this.array.pop();
    return this;
  }
}

myArrayStack = new Stack();
myArrayStack.push("Google");
myArrayStack.push("Udemy");
myArrayStack.push("Discord");
myArrayStack.pop();
myArrayStack.pop();
myArrayStack.pop();

//myArrayStack.peek();

// interview question

// Implement a first in first out(FIFO) queue using only two stacks.
// The implemented queue shoild support all the function of a normal queue
// (push, peek, pop, and empty)

class MyQueue {
  constructor() {
    this.pushStack = [];
    this.popStack = [];
    this.length = 0;
  }

  push(value) {
    this.pushStack.push(value);
    this.length++;

    return this;
  }

  pop() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }

    return this.popStack.pop();
  }

  peek() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack[this.popStack.length - 1];
  }

  empty() {
    return !this.pushStack.lentgh && !this.popStack.length;
  }
}

myQueueStack = new MyQueue();
myQueueStack.push(1);
myQueueStack.push(2);
myQueueStack.push(3);
myQueueStack.push(4);
myQueueStack.push(5);

myQueueStack.empty();
