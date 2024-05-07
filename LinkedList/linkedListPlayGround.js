class Node1 {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListPlayground {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // Check input

    const newNode1 = {
      value: value,
      next: null,
    };

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
    };

    const leader1 = this.traverseIndex(index - 1);
    const holdingPointer = leader1.next;
    leader1.next = nodeToAdd;
    nodeToAdd.next = holdingPointer;

    this.length++;
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
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
}

const linkedList = new LinkedListPlayground(7);
linkedList.append(3);
//linkedList.prepend(9);
linkedList.insert(1, 3);
//linkedList.printList();
linkedList.remove(1);
