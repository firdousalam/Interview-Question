// JavaScript code to implement the approach
class Node {
    constructor(v) {
        this.left = null;
        this.right = null;
        this.data = v;
    }
}

// Inorder Traversal
function printInorder(root) {
    if (root) {

        // Traverse left subtree
        printInorder(root.left);

        // Visit node
        console.log(root.data);

        // Traverse right subtree
        printInorder(root.right);
    }
}

// Driver code
if (true) {

    // Build the tree
    let root = new Node(100);
    root.left = new Node(20);
    root.right = new Node(200);
    root.left.left = new Node(10);
    root.left.right = new Node(30);
    root.right.left = new Node(150);
    root.right.right = new Node(300);

    // Function call
    console.log("Inorder Traversal:");
    printInorder(root);
}
//Inorder Traversal: 10 20 30 100 150 200 300 