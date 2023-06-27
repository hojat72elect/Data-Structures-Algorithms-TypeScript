/**
 * This is the specific node used for creating a Binary Search Tree.
 */
export class Node<T> {
    value: T;
    leftChild?: Node<T>;
    rightChild?: Node<T>;

    constructor(value: T) {
        this.value = value;
    }

    toString(): string {
        return this.value.toString();
    }
}

export class BinarySearchTree<T> {
    root: Node<T>;

    constructor(root: Node<T>) {
        this.root = root;
    }

    /**
     * Inserts the provided value to the tree.
     */
    insert(data: T) {
        let n = new Node(data);
        if (this.root == null) {
            this.root = n;
            return;
        }

        let current = this.root;
        let parent;
        while (true) {
            parent = current;
            if (data < current.value) {
                current = current.leftChild;
                if (current == null) {
                    parent.leftChild = n;
                    break;
                }
            } else {
                current = current.rightChild;
                if (current == null) {
                    parent.rightChild = n;
                    break;
                }
            }
        }
    }


}