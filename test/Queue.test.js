const Queue = require('../src/Queue');

test("simply enqueuing and dequeue to a queue will produce FIFO behavior", () => {

    const exampleQueue = new Queue();

    exampleQueue.enqueue("Toronto");
    expect(exampleQueue.length).toBe(1);
    exampleQueue.enqueue("New York");
    expect(exampleQueue.length).toBe(2);
    exampleQueue.enqueue("Paris");
    expect(exampleQueue.length).toBe(3);
    expect(exampleQueue.dequeue()).toBe("Toronto");
    expect(exampleQueue.dequeue()).toBe("New York");
    expect(exampleQueue.dequeue()).toBe("Paris");

});

test("dequeue on an empty queue, throws an error", () => {

    const exampleQueue = new Queue();

    expect(() => {
        exampleQueue.dequeue();
    }).toThrow();
});

test("Peeking into front or back of a queue is safe and doesn't have any side-effects.", () => {

    const exampleQueue = new Queue();
    expect(exampleQueue.peekFront()).toBe("The queue is empty");
    expect(exampleQueue.peekBack()).toBe("The queue is empty");


    exampleQueue.enqueue("Toronto");

    expect(exampleQueue.peekFront()).toBe("Toronto");
    expect(exampleQueue.peekBack()).toBe("Toronto");

    exampleQueue.enqueue("New York");

    expect(exampleQueue.peekFront()).toBe("Toronto");
    expect(exampleQueue.peekBack()).toBe("New York");

    exampleQueue.enqueue("Paris");

    expect(exampleQueue.peekFront()).toBe("Toronto");
    expect(exampleQueue.peekBack()).toBe("Paris");

});

test("debugging is easier if you use toString() on your queues!", () => {

    const exampleQueue = new Queue();

    exampleQueue.enqueue("Toronto");
    exampleQueue.enqueue("New York");
    exampleQueue.enqueue("Paris");
    expect(exampleQueue.toString()).toBe("Toronto--New York--Paris--");

});

test("Clearing a queue throws away all the data but keeps the reference to our queue", () => {

    const exampleQueue = new Queue();
    exampleQueue.enqueue("Toronto");
    exampleQueue.enqueue("New York");
    exampleQueue.enqueue("Paris");
    expect(exampleQueue.length).toBe(3);

    exampleQueue.clear();
    expect(exampleQueue.length).toBe(0);
    expect(() => {
        exampleQueue.dequeue();
    }).toThrow();
});