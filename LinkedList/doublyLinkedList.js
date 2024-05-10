class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // Check input
    const newNode1 = {
      value: value,
      next: null,
      prev: null,
    };
    newNode1.prev = this.tail;
    this.tail.next = newNode1;
    this.tail = newNode1;
    this.length++;
    return this;

    // const array = [ 3,6,8,12,15]
  }

  prepend(value) {
    // Check input
    const addNewHead = {
      value: value,
      next: null,
    };
    addNewHead.next = this.head;
    this.head.prev = addNewHead;
    this.head = addNewHead;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  // Insert

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }

    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    const nodeToAdd = {
      value: value,
      next: null,
      prev: null,
    };

    const leader1 = this.traverseIndex(index - 1);
    const follower = leader1.next;
    leader1.next = nodeToAdd;
    nodeToAdd.next = follower;
    follower.prev = nodeToAdd;

    this.length++;
    console.log(this);
    return this.printList();
  }

  // Looping through indexes

  traverseIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    const leader = this.traverseIndex(index - 1);
    const unwantedNode = leader.next;
    // Updating the pointer form leader to point to other node after
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    // inputs check
    //
    // if there only one input or if(this.length === 1) or if(!null){}

    if (!this.head.next) {
      return this.head;
    }
    // Otherwise let's code when there are more than on inputs

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    // Let's now loop through these two inputs
    // If second exist, not null
    while (second) {
      // store the second.next (third) in temporary memory(temp)

      // Now we have reference to 1, 2,3 indexes
      const temp = second.next;

      //Here we can start to reverse
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;

    // return this.printList();
    return this;
  }
}

const linkedList = new DoublyLinkedList(10);
linkedList.append(5);
linkedList.append(16);

linkedList.prepend(1);
linkedList.printList();

linkedList.insert(1, 16);
linkedList.insert(20, 88);
linkedList.printList();

linkedList.remove(2);
linkedList.remove(2);

linkedList.reverse();
