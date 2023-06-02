// @flow
/**
 *
 * todo: should be migrated to generics (I wasn't able to do that).
 *
 * The most basic definition of a singly linked Node. Just has some data that hosts in itself and also a reference to the next Node.
 */
class Node<T> {
    data: T;
    next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

/**
 * you can only initialize this linked list by
 * providing a list of values to it. Otherwise, head
 * and tail will be null.
 */
class SinglyLinkedList {

    headNode: Node<any> | null;
    tailNode: Node<any> | null;
    length: number;

    constructor(listOfValues: Array<any>) {

        this.headNode = null;
        this.tailNode = null;
        this.length = 0;

        for (const value of listOfValues) {
            this.addLast(value);
        }
    }

    /**
     * Returns the head's value, or null.
     */
    head(): any | null {
        return this.headNode?.data ?? null;
    }

    /**
     * Returns the tail's value , or null.
     */
    tail(): any | null {
        return this.tailNode?.data ?? null;
    }

    isEmpty(): boolean {
        return this.length === 0;
    }

    /**
     * Adds an element at the end of the linked list and returns updated length.
     *
     * @param element
     */
    addLast(element: any | null) {
        // check if list is empty
        if (this.isEmpty()) {
            this.addFirst(element);
            return;
        }
        const node = new Node(element);
        if (this.tailNode != null) {
            this.tailNode.next = node;
        }
        this.tailNode = node;
        this.length++;
    }

    /**
     * Add a node at the beginning of the list.
     *
     * @param element
     */
    addFirst(element: any | null) {

        const node = new Node(element);
        // check if the list is empty.
        if (this.isEmpty()) {
            this.headNode = node;
            this.tailNode = node;
            this.length = 1;
            return;
        }
        node.next = this.headNode;
        this.headNode = node;
        this.length++;
    }

    /**
     * Returns the index of the element passed; otherwise -1.
     *
     * @returns number
     */
    indexOf(element: any | null): number {
        if (this.isEmpty()) return -1;
        let {currentNode, currentIndex} = {currentNode: this.headNode, currentIndex: 0};
        while (currentNode) {
            if (currentNode.data === element) {
                return currentIndex;
            }
            currentNode = currentNode.next;
            currentIndex++;
        }
        return -1;
    }

    clear() {
        this.headNode = null;
        this.tailNode = null;
        this.length = 0;
    }

    removeLast(): void {
        if (this.length === 0) {
            throw new Error("The Linked List is already empty!");
        }
        if (this.length === 1) {
            this.clear();
            return;
        }

        let currentNode = this.headNode;
        while (currentNode != null && currentNode.next != null && currentNode.next.next) {
            currentNode = currentNode.next;
        }
        if (currentNode != null) {
            currentNode.next = null;
        }
        this.tailNode = currentNode;
        this.length--;

    }

    removeFirst(): void {
        if (this.length === 0) {
            throw new Error("The Linked List is already empty!");
        }
        if (this.length === 1) {
            this.clear();
            return;
        }

        if (this.headNode != null) {
            this.headNode = this.headNode.next;
        }

        this.length--;
    }
}

module.exports = SinglyLinkedList;
