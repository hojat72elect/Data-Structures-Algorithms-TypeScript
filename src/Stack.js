class Stack {

    constructor() {
        this._dataStore = [];
        this.length = this._dataStore.length;
    }

    push(element) {
        this._dataStore.push(element);
        this.length++;
    }

    pop() {
        if (this.length === 0)
            throw new Error("An empty stack can't be popped!");
        this.length--;
        return this._dataStore.pop();
    }

    clear() {
        this._dataStore = [];
    }
}

module.exports = Stack;
