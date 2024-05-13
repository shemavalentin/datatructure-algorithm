class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    // Checking if the stack is empty
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }

    // We can alse check if this is the last in queue

    if (this.first === this.last) {
      this.last = null;
    }
    //If we need to hold the first node for further use we can do
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return holdingPointer;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
myQueue.peek("Pavel");
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();

// Joy
//Matt
//Pavel
//Samir
