class Node {
  constructor(v) {
    this.data = v;
    this.left = null;
    this.right = null;
  }
}

// Preorder Traversal
function printPostOrder(node) {
  if (node === null) {
    return;
  }

  // Traverse left subtree
  printPostOrder(node.left);

  // Traverse right subtree
  printPostOrder(node.right);

  // Visit Node
  console.log(node.data, end = " ");
}

// Driver code
// Build the tree
let root = new Node(100);
root.left = new Node(20);
root.right = new Node(200);
root.left.left = new Node(10);
root.left.right = new Node(30);
root.right.left = new Node(150);
root.right.right = new Node(300);

// Function call
console.log("Postorder Traversal: ", end = "");
printPostOrder(root);

//PostOrder Traversal: 10 30 20 150 300 200 100 