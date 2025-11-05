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

function BFS(root){
    let result  = [];
    let queue = [];
    if(root != null){
        queue.push(root);
    }
    while(queue.length>0){
        const node = queue.shift();
        result.push(node.value);
        if(node.left != null){
            queue.push(node.left);
        }
         if(node.right != null){
            queue.push(node.right);
        }

    }
    return result;
}
console.log(BFS(rootf));

// output  [1, 2, 3, 4, 5, 6, 7]