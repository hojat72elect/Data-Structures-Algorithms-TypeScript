const SinglyLinkedList = require('../src/SinglyLinkedList');


test("singly linked list with 1 element", () => {

    const sut = new SinglyLinkedList([12])
    expect(sut.head()).toBe(12);
    expect(sut.tail()).toBe(12)
    expect(sut.length).toBe(1);

});


test("singly linked list initialization", () => {

    const sut = new SinglyLinkedList([3, 9, 8, 7, 4])
    expect(sut.head()).toBe(3);
    expect(sut.tail()).toBe(4);
    expect(sut.length).toBe(5);
    expect(sut.addLast(6)).toBe(6)
    expect(sut.tailNode.next).toBe(null);
});