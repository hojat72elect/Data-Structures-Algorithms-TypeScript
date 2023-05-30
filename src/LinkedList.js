class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * you can initialize this linked list by providing a list of values to it.
 * If the value you have provided to the constructor of this class isn't an
 * instance of an Array, head and tail will be null.
 */
class SinglyLinkedList {
    constructor(listOfValues) {
        this.headNode = null;
        this.tailNode = null;
        this.length = 0;

        if (listOfValues instanceof Array) {
            for (const value of listOfValues) {
                this.addLast(value);
            }
        }
    }

    /**
     * Returns the head's value, or null.
     */
    head() {
        return this.headNode?.data ?? null;
    }

    /**
     * Returns the tail's value , or null.
     */
    tail() {
        return this.tailNode?.data ?? null;
    }

    isEmpty() {
        return this.length === 0;
    }

    /**
     * Adds an element at the end of the linked list and returns updated length.
     *
     * @param element
     * @return number
     */
    addLast(element) {
        // check if list is empty
        if (this.isEmpty()) {
            return this.addFirst(element);
        }
        const node = new Node(element);
        this.tailNode.next = node;
        this.tailNode = node;
        return ++this.length;
    }

    /**
     * Add a node at the beginning of the list and return updated length.
     *
     * @param element
     * @return number
     */
    addFirst(element) {

        const node = new Node(element);
        // check if the list is empty.
        if (this.isEmpty()) {
            this.headNode = node;
            return 1;
        }
        node.next = this.headNode;
        this.headNode = node;
        return ++this.length;
    }
}

module.exports = SinglyLinkedList;
module.exports = Node;
