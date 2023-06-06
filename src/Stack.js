/**
 * Right now you can only initialize an empty Stack; with generic type.
 */
class Stack {
    dataStore;
    length;

    constructor() {
        this.dataStore = [];
        this.length = 0;
    }


    push(element) {
        this.dataStore.push(element);
        this.length++;
    }

    pop() {
        if (this.length === 0)
            throw new Error("An empty stack can't be popped!");
        this.length--;
        return this.dataStore.pop();
    }

    peek() {
        if (this.length === 0)
            return "The stack is empty";
        return this.dataStore[this.length - 1];
    }

    clear() {
        this.dataStore = [];
        this.length = 0;
    }
}

module.exports = Stack;
