class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

class BinaryTreeNode {
    constructor(value, left, right) {
        this.value = value;
        this.left = left || null;
        this.right = right || null;
    }
}

const treeNode = new TreeNode(3);
treeNode.children.push(new TreeNode(56));
treeNode.children.push(new TreeNode(2));
treeNode.children.push(new TreeNode(6));

console.log(treeNode);
