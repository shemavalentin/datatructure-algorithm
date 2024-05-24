// this uses TRAVERSAL METHOD(BFS)

// In this type of search, it traverses every node from left to right untill reaches the target.

// This has memory implication, it consumes more memory as we need to traverse each nodes and keep track of
// those nodes we visited in memory. we need to keep track of every level we visited.

// Think of BSF as water flowing. It goes level by level

// their time complexity is O(n)

// PROS :  - shortes path, Closer Nodes
// CONS: More memory

//=>  We are going to use QUEUE data structure which allows us to keep a referance to the
// node we want to came back to.

// BFS is used to look for the shortest path(we can check to see fb friends with this data structure
// what are the most related items on amazon, who are our closest friend on facebook
// or closest connection on lonkedIn)

// This algorithm is used in recomendation engines, peer to peer network, even Google Maps
// Facebook friend requests and Instagram recommendations.
// The BSF allows us to convert a graph essentially into a tree.
// class to create a new node when we need a new one
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Creating parent node

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      // Cze we will also need to traverse from root and we don't know how long nodes are
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          // If there is a node at the left
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    // First check if there is a root node
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        // We now found a match we have to return
        return currentNode;
      }
    }
    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  // Coding BFS

  breadthFirstSearch() {
    let currentNode = this.root; // the root node to start with
    let list = []; //List to insert numbers into in the order of BFS .
    let queue = []; // to keep track of the level we are at so that we can access children once we go through it.

    // Adding to the queue the very first node which is the root node.
    queue.push(currentNode);

    // Going from current node down to other nodes from left to right like this, like this.
    while (queue.length > 0) {
      currentNode = queue.shift();
      console.log(currentNode.value);
      list.push(currentNode.value);
      // does the 9 node has the left node??
      if (currentNode.left) {
        //Added 4 to the queue
        queue.push(currentNode.left);
      }

      //Adding to the right side
      // Now, asking if there is a node at the right

      if (currentNode.right) {
        // Adding to the queue
        queue.push(currentNode.right);
      }
    }
    return list;
  }

  // Just for fun let's code BFS using Recursion
  breadthFirstSearchRec() {
    // we need to create a base case where to stop
    if (!queue.length) {
      return list;
    }
    let currentNode = queue.shift();
    //Making sure we pushed the list
    list.push(currentNode.value);
    if (currentNode.left) {
      //Added 4 to the queue
      queue.push(currentNode.left);
    }

    //Adding to the right side
    // Now, asking if there is a node at the right

    if (currentNode.right) {
      // Adding to the queue
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearchRec(queue, list);
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.lookup(19);
tree.breadthFirstSearch();
tree.breadthFirstSearchRec([tree.root], list);

//JSON.stringify(traverse(tree.root));    // Commented this function cze on look up I don't need to see if the node has been created

// A helpfer function to test if nodes have been well created

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
