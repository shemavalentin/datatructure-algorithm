class LinkedList2 {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // Here we can check inputs
    const newNode2 = {
      value: value,
      next: null,
    };

    // Attaching the value to the head node

    this.tail.next = newNode2;
    this.tail = newNode2;
    this.length++;
    return this;
  }

  // Adding prepend(Adding to the head)

  prepend(value) {
    // Here we can check inputs
    const addToHead = {
      value: value,
      next: null,
    };

    addToHead.next = this.head;
    this.head = addToHead;
    this.length++;
    return this;
  }

  // Creating printList() to print out the array format output and easy to read as the list grows
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      // Keep going untill the next node is null
      currentNode = currentNode.next;
    }

    return array;
  }

  // INSERT IN A LINKED LIST

  insert(index, value) {
    if (index === 0) {
      this.append(value);
      return this.printList();
    }

    // Cheking params
    else if (index >= this.length) {
      return this.append(value);
    }

    // Now the hard part to insert on index 2 or 3 depending on the length of the array
    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);

    // But we have cut off the connection(pionter) btn nodes at i[2] and [3]. we need to keep it.
    // next of the leader node is the new node
    const holdingPointer = leader.next;
    leader.next = newNode;
    // Linking the holdingPointer and newNode
    newNode.next = holdingPointer;
    // We need to increament in the array cz indexing will change.
    this.length++;
    return this.printList();
  }

  // Making our traversal(for loop)

  traverseToIndex(index) {
    // Check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  // REMOVING A VALUE

  remove(index) {}
}
//    *->*    The first is the leader index and we need to insert btn the leader and the next
//     *
//

const myLinkedListEx = new LinkedList2(15);
myLinkedListEx.append(5);
myLinkedListEx.append(10);
myLinkedListEx.append(25);
myLinkedListEx.prepend(7);
myLinkedListEx.insert(0, 99);
