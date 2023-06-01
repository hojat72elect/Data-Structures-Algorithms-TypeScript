// @flow
/**
 * @template T : to let the JSDoc know a generic has been used here.
 *
 * Right now you can only initialize an empty Stack; with generic type.
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
     * @param {T} element
     */
    push(element: T) {
        this.dataStore.push(element);
        this.length++;
    }

    /**
     *
     * @returns {T}
     */
    pop(): T {
        if (this.length === 0)
            throw new Error("An empty stack can't be popped!");
        this.length--;
        return this.dataStore.pop();
    }

    /**
     *
     * @returns {T|string}
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
