export class Queue {

    private dataStore: any[];

    constructor() {
        this.dataStore = [];
    }


    /**
     * User can only read the length of Queue, can't write to it.
     */
    // @ts-ignore
    get length() {
        return this.dataStore.length;
    }

    /**
     * @param element will be added at the end of the queue.
     */
    enqueue(element: any) {
        this.dataStore.push(element);
    }

    /**
     * @returns the first element of the queue (the oldest one) will be
     * returned and removed from queue.
     */
    dequeue(): any {
        if (this.dataStore.length === 0)
            throw new Error("The queue is empty!");
        return this.dataStore.shift();
    }

    /**
     * @returns Just peeking to see what is the first element in line.
     */
    peekFront(): any {
        if (this.dataStore.length === 0)
            return "The queue is empty";
        return this.dataStore[0];
    }

    /**
     * @returns Just peeking to see what is the last element in this line.
     */
    peekBack(): any {
        if (this.dataStore.length === 0)
            return "The queue is empty";
        return this.dataStore[this.dataStore.length - 1];
    }

    /**
     * @returns string representation of the Queue.
     */
    toString(): string {
        let retStr = "";
        for (let i = 0; i < this.dataStore.length; ++i) {
            let currentNodeValue = this.dataStore[i]; //type casting in JS is implicit

            retStr += `${currentNodeValue}--`;
        }
        return retStr;
    }

    clear() {
        this.dataStore = [];
    }
}
