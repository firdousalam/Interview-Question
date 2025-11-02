/*
A tree in JavaScript is a way to organize data in a hierarchy,
 with a main "root" and branches that lead to smaller "child" elements. It's like a family tree, 
 where each person can have their own children.

Each node has a parent and can have children, creating a hierarchy.
We visit each node starting from the root using methods like depth-first or breadth-first.
*/
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Example: Creating a simple tree
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

console.log(JSON.stringify(root));

/* using function */
function createTreeNode(value) {
    return {
        value: value,
        left: null,
        right: null
    };
}

// Example: Creating a simple tree
let rootf = createTreeNode(1);
rootf.left = createTreeNode(2);
rootf.left.left = createTreeNode(4);
rootf.left.right = createTreeNode(5);
rootf.right = createTreeNode(3);

console.log(JSON.stringify(rootf));

/*
TreeNode {
  value: 1,
  left: TreeNode { value: 2, left: null, right: null },
  right: TreeNode { value: 3, left: null, right: null }
}

In this example

The TreeNode class creates a node with a value and two child nodes (left and right), both initially set to null.
A root node with value 1 is created, with its left child as 2 and right child as 3.
console.log(root); prints the tree structure, showing the root node and its children.
  */

/*
Components of a tree
1. Node
The numerical values that we write in a tree constitute the node of a tree.

10
/  \
2   5
In the above visual, all the numerical values that have been written in the tree like 10,2 and 5 are called as nodes of a tree.

2. Root
The topmost node of a tree that has no children is called as the root of the tree.

10
/  \
2   5
In the above visual representation 10 is the topmost node in the tree and there is no parent to the tree so 10 will be the root of this particular tree.

3. Edge
The connection between the two nodes is called as an edge in the binary tree.

10
/  \
2   5
In the above visual representation the '\' and the '/' lines are the edges for the above tree.

4. Parent Node
A node that has one or more child is called as the parent node for the corresponding child nodes that are connected to that node.

 10
/  \
2    5
/\   /\
1  3 8 9
In the above visual all the nodes like 10,2,5 those are having one or more children are called as parent Nodes.

5. Child Node
All the nodes that are connected to a parent node are called as the child node to that parent node.

 10
/  \
2    5
/\   /\
1  3 8 9
In the above visual all the nodes like 2, 5 ,1,3,8,9 that are connected to any parent node are called as the child nodes.

6. Leaf Node
A node that has no children or child nodes are called as the leaf nodes.

10
/  \
2   5
In the above visual representation the nodes 2 and 5 do not have any child nodes and these nodes are called as the leaf nodes.

7. Subtree
A tree formed by a parent node kept as a root and all its child nodes is called as a subtree.

 10
/  \
2    5   ------>    2   (subtree1)   5 (subtree2)
/\   /\                   /\                      /\ 
1  3 8 9                1   3                   8  9   
In the above visual 2 and 5 are the parent nodes and 1,3 are the child to the parent node 2 so it will form a separate subtree and the

parent node 5 has two children 8 and 9 so it also forms a separate subtree

8. Depth
The number of edges in the path from the root to that specific node is called as the depth of that tree.

 10
/  \
2    5
/\   /\
1  3 8 9
In the above visual 10 is a root node and 1,3,8,9 are leaf nodes. The edges kept in the path from the root node to the leaf node like in this case the edges between 10 and 1 is 2 so the depth of the node 1 will be 2

9. Height
The number of edges between a node and the farthest leaf to it is called as the height of the node.

 10
/  \
2    5
/\   /\
1  3 8 9
In this case if a person want to find the height of node 2 then in that case number of edges from 2 to 1 which is the farthest leaf from 2 is will be taken as the height for node 2 which will be 1 in that case

10. Level
The level of a node is always depth+1 for that particular node.

 10
/  \
2    5
/\   /\
1  3 8 9
In the above visual the level of node 2 is 2 as the edge between it and the root node is 1 and the level is depth+1n for a node

Implementation of a Tree
In this code we will create and print a binary tree in a simple way using JavaScript. It defines a Node class for the tree's nodes and a Trees class to build and display the tree structure. Here's a quick explanation of how it works.

*/

