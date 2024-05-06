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
    //this.length++;
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
      array.push(currentNode);
      // Keep going untill the next node is null
      currentNode = currentNode.next;
    }

    return array;
  }

  // INSERT IN A LINKED LIST

  insert(index, value) {
    // Cheking params
    if (index >= this.length) {
      return this.append(value);
    }
  }
}

const myLinkedListEx = new LinkedList2(15);
myLinkedListEx.append(5);
myLinkedListEx.append(10);
myLinkedListEx.append(25);
myLinkedListEx.prepend(7);
myLinkedListEx.insert(200, 15);
myLinkedListEx.printList();
