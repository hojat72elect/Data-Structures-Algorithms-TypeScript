const LinkedList = require('../src/LinkedList');

test("Normal behavior of a singly linked list", () => {

    const sut = new LinkedList(12);

    sut.insert(24, 12);
    sut.insert(3, 24);
    sut.insert(7, 3);
    sut.insert(9, 7);

    expect(sut.find(7)).toEqual({"element": 7, "next": {"element": 9, "next": null}});
    expect(sut.find(9)).toEqual({"element": 9, "next": null});
});