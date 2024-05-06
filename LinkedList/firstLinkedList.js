10 -- > 5 -- > 16

// Creating the linked list structure to be used

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }


// TO KEEP YOUSELF DRY YOU CAN USE A OOP CLASS

class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// creating class instance to create the linkedList
class LinkedList {
    constructor(value) {     // The constructor is to create the first node
        this.head = {
            value: value,
            next: null
        }

        // Becouse the first value(head) is also considered as the only one item then the head is also the tail
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        // // creating a new node. It's an object
        // const newNode = {
        //     value: value,
        //     next: null
        // };

        this.newNode = new Node(value); // this is the class used here and it is the same as the above

        // attaching the newNode to the previous
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
}

// creating linked list
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
//======================================

class LinkedList2 {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode2 = {
            value: value,
            next: null
        }

        // Attaching the value to the head node
        this.tail.next = newNode2;
        this.tail = newNode2;
        //this.length++;
        return this;
    }

    // Adding prepend(Adding to the head)
    prepend(value) {
        const addToHead = {
            value: value,
            next: null
        }

        addToHead.next = this.head;
        this.head = addToHead;
        this.length++;
        return this;
    }
}

const myLinkedListEx = new LinkedList2(15);
myLinkedListEx.append(5);
myLinkedListEx.append(10);
myLinkedListEx.append(25);
myLinkedListEx.prepend(7);


