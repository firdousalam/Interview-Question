class Node {
  constructor(v) {
    this.data = v;
    this.left = this.right = null;
  }
}

function printPreOrder(node) {
  if (node == null) return;

  console.log(node.data + " ");

  printPreOrder(node.left);
  printPreOrder(node.right);
}

// Build the tree
let root = new Node(100);
root.left = new Node(20);
root.right = new Node(200);
root.left.left = new Node(10);
root.left.right = new Node(30);
root.right.left = new Node(150);
root.right.right = new Node(300);

console.log("Preorder Traversal: ");
printPreOrder(root);

//Preorder Traversal: 100 20 10 30 200 150 300 