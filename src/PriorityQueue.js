class QueueElement {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

/**
 * New elements will be evaluated at enqueue time
 * and the queue is always sorted according to
 * priority.
 */
class PriorityQueue {
    constructor() {
        this._dataStore = [];
    }

    enqueue(elementValue, elementPriority) {
        let inputElement = new QueueElement(elementValue, elementPriority);

        if (this._dataStore.length === 0) {
            this._dataStore.push(inputElement);
            return;
        }

        if (this._dataStore[0].priority <= elementPriority) {
            this._dataStore.unshift(inputElement);
            return;
        }


        let counter = 0;
        let isAlreadyAdded = false;
        while (counter < this._dataStore.length) {
            if (this._dataStore[counter].priority <= elementPriority) {
                this._dataStore.splice(counter, 0, inputElement);
                isAlreadyAdded = true;
                break
            }
            counter++;
        }
        if (!isAlreadyAdded)
            this._dataStore.push(inputElement);

    }

    /**
     *
     * the first element of the queue (the oldest one) will be
     * returned and removed from queue.
     */
    dequeue() {
        if (this._dataStore.length === 0)
            throw new Error("The queue is empty!");
        this._dataStore.length--;
        return this._dataStore.shift();
    }


    toString() {
        let retStr = "";
        for (let i = 0; i < this._dataStore.length; ++i) {
            retStr += `(${this._dataStore[i].value} , ${this._dataStore[i].priority}) -- `;
        }
        return retStr;
    }
}


