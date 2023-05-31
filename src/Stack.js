// @ts-check

/**
 * Right now, you can only initialize an empty Stack.
 * In this implementation I have used an Array.
 * Our stacks currently support number, string, and also object.
 */
class Stack {

    constructor() {
        this._dataStore = [];
        this.length = 0;
    }

    /**
     *
     * @param {number|string|Object} element
     */
    push(element) {
        this._dataStore.push(element);
        this.length++;
    }

    /**
     *
     * @returns {number|string|Object}
     */
    pop() {
        if (this.length === 0)
            throw new Error("An empty stack can't be popped!");
        this.length--;
        return this._dataStore.pop();
    }

    /**
     *
     * @returns {number|string|Object}
     */
    peek() {
        if (this.length === 0)
            return "The stack is empty";
        return this._dataStore[this.length - 1];
    }

    clear() {
        this._dataStore = [];
        this.length = 0;
    }
}

module.exports = Stack;
