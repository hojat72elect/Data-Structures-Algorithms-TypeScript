const PriorityQueue = require('../src/PriorityQueue');

test("PriorityQueue is pretty much like a normal queue but treats elements according to their priorities", () => {

    const sut = new PriorityQueue();

    sut.enqueue("Toronto", 40);
    sut.enqueue("Sudbury", 50);
    sut.enqueue("Markham", 30);
    sut.enqueue("New York", 39);
    sut.enqueue("Kerman", 35);
    sut.enqueue("Paris", 45);
    sut.enqueue("Barrie", 31);
    sut.enqueue("Montreal", 39);
    sut.enqueue("Vancouver", 500);

    expect(sut.dequeue().value).toBe("Vancouver");
    expect(sut.dequeue().value).toBe("Sudbury");
    expect(sut.dequeue().value).toBe("Paris");
    expect(sut.dequeue().value).toBe("Toronto");
    expect(sut.dequeue().value).toBe("Montreal");
    expect(sut.dequeue().value).toBe("New York");
    expect(sut.dequeue().value).toBe("Kerman");
    expect(sut.dequeue().value).toBe("Barrie");
    expect(sut.dequeue().value).toBe("Markham");

    expect(() => {
        sut.dequeue();
    }).toThrow();

});








