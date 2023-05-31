// @flow
/**
 * Right now, you can only initialize an empty Stack.
 * In this implementation I have used an Array.
 * Our stacks currently support number, string, and also object.
 */
class Stack {
    dataStore: Array<any>;
    length: number;

    constructor() {
        this.dataStore = [];
        this.length = 0;
    }

    /**
     *
     * @param {any} element
     */
    push(element: any) {
        this.dataStore.push(element);
        this.length++;
    }

    /**
     *
     * @returns {any}
     */
    pop(): any {
        if (this.length === 0)
            throw new Error("An empty stack can't be popped!");
        this.length--;
        return this.dataStore.pop();
    }

    /**
     *
     * @returns {any}
     */
    peek(): any {
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
