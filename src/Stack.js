// @flow
/**
 * Right now, you can only initialize an empty Stack.
 * In this implementation I have used an Array.
 * Our stacks currently support number, string, and also object.
 */
class Stack<T> {
    dataStore: Array<T>;
    length: number;

    constructor() {
        this.dataStore = [];
        this.length = 0;
    }

    /**
     *
     * @param {any} element
     */
    push(element: T) {
        this.dataStore.push(element);
        this.length++;
    }

    /**
     *
     * @returns {any}
     */
    pop(): T {
        if (this.length === 0)
            throw new Error("An empty stack can't be popped!");
        this.length--;
        return this.dataStore.pop();
    }

    /**
     *
     * @returns {any}
     */
    peek(): T | string {
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
