// @flow
class Queue<T> {

    _dataStore: Array<T>;

    constructor() {
        this._dataStore = [];
    }

    /**
     * User can only read the length of Queue, can't write to it.
     */
    get length(): number {
        return this._dataStore.length;
    }

    /**
     * @param element will be added at the end of the queue.
     */
    enqueue(element: T) {
        this._dataStore.push(element);
    }

    /**
     * @returns the first element of the queue (the oldest one) will be
     * returned and removed from queue.
     */
    dequeue(): T {
        if (this._dataStore.length === 0)
            throw new Error("The queue is empty!");
        return this._dataStore.shift();
    }

    /**
     * @returns Just peeking to see what is the first element in line.
     */
    peekFront(): T | string {
        if (this._dataStore.length === 0)
            return "The queue is empty";
        return this._dataStore[0];
    }

    /**
     * @returns Just peeking to see what is the last element in this line.
     */
    peekBack(): T | string {
        if (this._dataStore.length === 0)
            return "The queue is empty";
        return this._dataStore[this._dataStore.length - 1];
    }

    /**
     * @returns string representation of the Queue.
     */
    toString(): string {
        let retStr = "";
        for (let i = 0; i < this._dataStore.length; ++i) {
            let currentNodeValue: any = this._dataStore[i]; //type casting in JS is implicit

            retStr += `${currentNodeValue}--`;
        }
        return retStr;
    }

    clear() {
        this._dataStore = [];
    }
}

module.exports = Queue;