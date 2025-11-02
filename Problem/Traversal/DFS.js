// Define a tree structure
// const tree = {
//   value: 1,
//   children: [
//     {
//       value: 2,
//       children: [
//         { value: 4, children: [] },
//         { value: 5, children: [{
//             value : 8,
//              children: [
//                 { value: 9, children: [] },
//                 { value: 10, children: [] }
//              ]
      
//         }] }
//       ]
//     },
//     {
//       value: 3,
//       children: [
//         { value: 6, children: [] },
//         { value: 7, children: [] }
//       ]
//     }
//   ]
// };

/* using function */
function TreeNode(value) {
    return {
        value: value,
        left: null,
        right: null
    };
}

// Example Usage
let rootf = TreeNode(1);
rootf.left = TreeNode(2);
rootf.left.left = TreeNode(4);
rootf.left.right = TreeNode(5);
rootf.right = TreeNode(3);
rootf.right.left = TreeNode(6);
rootf.right.right = TreeNode(7);



/* inorder Traversal Left - root - right */

// Definition of a Tree Node

// Inorder Traversal Function
function inorderTraversal(root) {
  const result = [];
  
  function traverse(node) {
    if (node === null) return;
    traverse(node.left);       // Visit left subtree
    result.push(node.value);   // Visit root
    traverse(node.right);      // Visit right subtree
  }
  
  traverse(root);
  return result;
}
function preOrder(root){
    const result = [];
    function traverse(node){
        if(node === null) return;
        result.push(node.value);// root
        traverse(node.left); // vist left
        traverse(node.right); // visit right
 
    }
    traverse(root)
    return result;

}

function postOrder(root){
    const result = [];
    function traverse(node){
         if(node === null) return;
        traverse(node.left);
        traverse(node.right);
        result.push(node.value);

    }
    traverse(root);
    return result;
}


console.log("Inorder Traversal",inorderTraversal(rootf)); // Output: [4,2,5,1,6,3,7]



console.log("preOrder Traversal",preOrder(rootf)); // Output: [1, 2, 4, 5, 3, 6, 7]


console.log("PostOrder traver",postOrder(rootf)); //[4, 5, 2, 6, 7, 3, 1]
