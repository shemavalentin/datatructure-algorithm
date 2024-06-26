// Unlike BFS, the DFS traverses each node from left but waits to finish checking with the left
// nodes, veryfies each and every node on the left handside with right at each node
// then go to the right hand side but from left-right.

//  Time complexity o(n) , When traversing over the tree we don't repeat ourselves

// PROS: Less memory, does path exist?: it also looks if the path exist

// CONS: Can get Slow

// The DFS is implemented in three ways: Inorder(33,101,105), preorder(101,33,105), postorder(33,105,101)

//   In summary, DFS is powerful to check to see if a node exists, or something exists cze we go deeper
//  It is the best cze it doesn't  need more memory and it is fairly fast than BFS.
//  It doesn't show us the shortest path but telling us that the path exists.

// It uses the idea of Backtracking after a dead ends and then repeating the walk
// down, it is just a recursion. It keeps doing the same things over and over

//          101
//         /   \
//        33    105

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

  // Coding DFS,It has Inorder, Preorder, postorder
  // We implement DFS using recursion Cse it is quit simple with recursion
  // we are going to declare variables as the function is going to be called over and over
  // and reset the values. we will pass variables as parameters as we did in BFS
  // and also it is the cleanest way

  DFSInorder() {
    return traverseInOrder(this.root, []);
  }
  DFSPostorder() {
    return traversePostOrder(this.root, []);
  }
  DFSPreorder() {
    return traversePreOrder(this.root, []);
  }
}

// Creating the funtion to traverse the tree

function traverseInOrder(node, list) {
  //console.log(node.value);
  // Checking if at leftmost there is a node
  if (node.left) {
    // then traverse all the way down at the last left node by calling the recursive function we created
    traverseInOrder(node.left, list);
  }

  // If there is no more left node, go to the next step and push into the list
  list.push(node.value);

  // Doing the same thing as we did to the left
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}

// Becouse it is pretty the same with preorder, we only change directions
// In preorder we start from the parent(we push the parent first then go to the left)

function traversePreOrder(node, list) {
  //console.log(node.value);
  list.push(node.value); // In preorder we push the parent first
  // Checking if at leftmost there is a node
  if (node.left) {
    // then traverse all the way down at the last left node by calling the recursive function we created
    traversePreOrder(node.left, list);
  }

  // If there is no more left node, go to the next step and push into the list

  // Doing the same thing as we did to the left
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}

// Implementing PostOrder. We actually from the list node at left, go to right left-right node, then go to parent
// then we go to right-left leaf node, then right-right leaf node then their parent, then root(or parent) node.

function traversePostOrder(node, list) {
  //console.log(node.value);

  // Checking if at leftmost there is a node
  if (node.left) {
    // then traverse all the way down at the last left node by calling the recursive function we created
    traversePostOrder(node.left, list);
  }

  // If there is no more left node, go to the next step and push into the list

  // Doing the same thing as we did to the left
  if (node.right) {
    traversePostOrder(node.right, list);
  }

  list.push(node.value); // In postorder, we start from the last node at the left, then go to the left-right node, then their parents.
  return list;
}

//      9
//    4    20
//  1   6 15   170

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.lookup(19);
// tree.breadthFirstSearch();
// tree.breadthFirstSearchRec([tree.root], list);
console.log("DSFInorder", tree.DFSInorder());
console.log("DSF Preorder", tree.DFSPreorder());
console.log("DSF PostOrder", tree.DFSPostorder());

//JSON.stringify(traverse(tree.root));    // Commented this function cze on look up I don't need to see if the node has been created

// A helpfer function to test if nodes have been well created

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
