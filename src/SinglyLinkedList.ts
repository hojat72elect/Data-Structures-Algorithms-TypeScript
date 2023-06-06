/**
 * The most basic definition of a singly linked Node. Just has some data that hosts in itself and also a reference to the next Node.
 */
class LinkedListNode {
    data: any;
    next: LinkedListNode;

    constructor(data: any) {
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

    headNode: LinkedListNode;
    tailNode: LinkedListNode;
    length: number;

    constructor(listOfValues: any[]) {

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
    head(): any {
        return this.headNode?.data ?? null;
    }

    /**
     * Returns the tail's value , or null.
     */
    tail(): any {
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
    addLast(element: any) {
        // check if list is empty
        if (this.isEmpty()) {
            this.addFirst(element);
            return;
        }
        const node = new LinkedListNode(element);
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
    addFirst(element: any) {

        const node = new LinkedListNode(element);
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
    indexOf(element: any) {
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

    removeLast() {
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

    removeFirst() {
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
