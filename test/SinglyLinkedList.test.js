const SinglyLinkedList = require('../src/SinglyLinkedList');


test("singly linked list with 1 element", () => {

    const sut = new SinglyLinkedList([12])
    expect(sut.head()).toBe(12);
    expect(sut.tail()).toBe(12)
    expect(sut.length).toBe(1);
    expect(sut.indexOf(12)).toBe(0);
    expect(sut.indexOf(34)).toBe(-1);

    sut.removeFirst();
    expect(sut.length).toBe(0);
});


test("singly linked list initialization", () => {

    const sut = new SinglyLinkedList([3, 9, 8, 7, 4])
    expect(sut.head()).toBe(3);
    expect(sut.tail()).toBe(4);
    expect(sut.length).toBe(5);
    expect(sut.addLast(6)).toBe(6)
    expect(sut.tailNode.next).toBe(null);
    expect(sut.indexOf(8)).toBe(2);
    expect(sut.indexOf(4)).toBe(4);

});

test("Removing from a singly linked list", () => {

    const sut = new SinglyLinkedList([3, 9, 8])
    expect(sut.length).toBe(3);
    expect(sut.head()).toBe(3);
    expect(sut.tail()).toBe(8);

    sut.removeFirst();
    expect(sut.length).toBe(2);
    expect(sut.head()).toBe(9);
    expect(sut.tail()).toBe(8);

    sut.removeLast();
    expect(sut.length).toBe(1);
    expect(sut.head()).toBe(sut.tail());
});

test("Clearing a singly linked list", () => {

    const sut = new SinglyLinkedList([3, 9, 2, 3, 4, 2, 8])
    sut.clear();
    expect(sut.length).toBe(0);
    expect(sut.head()).toBeNull();
    expect(sut.tail()).toBeNull();
});