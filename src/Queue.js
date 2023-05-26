class Queue {

    constructor() {
        this._dataStore = [];
        this.length = 0;
    }

    /**
     *
     * @param element will be added at the end of the queue.
     */
    enqueue(element) {
        this._dataStore.push(element);
        this.length++;
    }

    /**
     *
     * the first element of the queue (the oldest one) will be
     * returned and removed from queue.
     */
    dequeue() {
        this.length--;
        return this._dataStore.shift();
    }

    /**
     * just peeking to see what is the first element in line.
     */
    peekFront() {
        if (this.length === 0)
            return "The queue is empty";
        return this._dataStore[0];
    }

    /**
     * Just peeking to see what is the last element in this line.
     */
    peekBack() {
        if (this.length === 0)
            return "The queue is empty";
        return this._dataStore[this.length - 1];
    }


    toString() {
        let retStr = "";
        for (let i = 0; i < this._dataStore.length; ++i) {
            retStr += this._dataStore[i] + "--"
        }
        return retStr;
    }

    clear() {
        this._dataStore = [];
        this.length = 0;
    }
}

module.exports = Queue;