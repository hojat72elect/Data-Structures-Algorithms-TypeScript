class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

/**
 * This linked list doesn't accept null values.
 */
class LinkedList {
    constructor(headValue) {
        this.head = new Node(headValue);
    }

    /**
     * Give it the value of the node you're looking for, will return the first node with that value that it can find for you.
     *
     * @param item
     * @return {Node}
     */
    find(item) {
        let currentNode = this.head;
        while (currentNode.element !== item) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    /**
     * finds the item and ads the new node after it.
     *
     * @param newElement
     * @param item
     */
    insert(newElement, item) {
        let newNode = new Node(newElement);
        let current = this.find(item);

        newNode.next = current.next;
        current.next = newNode;

    }

    remove() {
    }

    display() {
        let currentNode = this.head;
        let outputString = '';
        while (!(currentNode == null)) {
            outputString += `-${currentNode.element}-`;
            currentNode = currentNode.next;
        }
        console.log(outputString);
    }
}

module.exports = LinkedList;