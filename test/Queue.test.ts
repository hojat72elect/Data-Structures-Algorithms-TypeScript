import {Queue} from "../src/Queue";

describe('Queue unit tests', () => {

    test("simply enqueuing and dequeue to a queue will produce FIFO behavior", () => {

        const sut = new Queue();

        sut.enqueue("Toronto");
        expect(sut.length).toBe(1);
        sut.enqueue("New York");
        expect(sut.length).toBe(2);
        sut.enqueue("Paris");
        expect(sut.length).toBe(3);
        expect(sut.dequeue()).toBe("Toronto");
        expect(sut.dequeue()).toBe("New York");
        expect(sut.dequeue()).toBe("Paris");

    });

    test("dequeue on an empty queue, throws an error", () => {

        const sut = new Queue();

        expect(() => {
            sut.dequeue();
        }).toThrow();
    });

    test("Peeking into front or back of a queue is safe and doesn't have any side-effects.", () => {

        const sut = new Queue();
        expect(sut.peekFront()).toBe("The queue is empty");
        expect(sut.peekBack()).toBe("The queue is empty");


        sut.enqueue("Toronto");

        expect(sut.peekFront()).toBe("Toronto");
        expect(sut.peekBack()).toBe("Toronto");

        sut.enqueue("New York");

        expect(sut.peekFront()).toBe("Toronto");
        expect(sut.peekBack()).toBe("New York");

        sut.enqueue("Paris");

        expect(sut.peekFront()).toBe("Toronto");
        expect(sut.peekBack()).toBe("Paris");

    });

    test("debugging is easier if you use toString() on your queues!", () => {

        const sut = new Queue();

        sut.enqueue("Toronto");
        sut.enqueue("New York");
        sut.enqueue("Paris");
        expect(sut.length).toBe(3);
        expect(sut.toString()).toBe("Toronto--New York--Paris--");

    });

    test("Clearing a queue throws away all the data but keeps the reference to our queue", () => {

        const sut = new Queue();
        sut.enqueue("Toronto");
        sut.enqueue("New York");
        sut.enqueue("Paris");
        expect(sut.length).toBe(3);

        sut.clear();
        expect(sut.length).toBe(0);
        expect(() => {
            sut.dequeue();
        }).toThrow();
    });
});
