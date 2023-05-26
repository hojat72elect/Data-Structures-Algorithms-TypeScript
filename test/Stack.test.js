const Stack = require('../src/Stack');

test("Simply pushing and popping a Stack generates LIFO behavior and updates the length of the stack as well.", () => {

    const exampleStack = new Stack();
    exampleStack.push("h");
    expect(exampleStack.length).toBe(1);
    exampleStack.push("o");
    expect(exampleStack.length).toBe(2);
    exampleStack.push("j");
    expect(exampleStack.length).toBe(3);
    exampleStack.push("a");
    expect(exampleStack.length).toBe(4);
    exampleStack.push("t");
    expect(exampleStack.length).toBe(5);


    expect(exampleStack.pop()).toBe("t");
    expect(exampleStack.length).toBe(4);
    expect(exampleStack.pop()).toBe("a");
    expect(exampleStack.length).toBe(3);
    expect(exampleStack.pop()).toBe("j");
    expect(exampleStack.length).toBe(2);
    expect(exampleStack.pop()).toBe("o");
    expect(exampleStack.length).toBe(1);
    expect(exampleStack.pop()).toBe("h");
    expect(exampleStack.length).toBe(0);


});

test("Popping an empty Stack should throw an error", () => {

    const exampleStack = new Stack();

    expect(() => {
        exampleStack.pop();
    }).toThrow();

});

test("Peeking into a Stack is safe, doesn't have side effects and wouldn't throw an error for empty Stack", () => {

    const exampleStack = new Stack();
    expect(exampleStack.peek()).toBe("The stack is empty");

    exampleStack.push(1);
    expect(exampleStack.peek()).toBe(1);
    exampleStack.push(2);
    exampleStack.push(3);
    expect(exampleStack.peek()).toBe(3);
    exampleStack.pop();
    expect(exampleStack.peek()).toBe(2);


});

test("Clearing a stack will throw away all data but keeps reference to the stack", () => {

    const exampleStack = new Stack();
    exampleStack.push(12);
    exampleStack.push(5);
    exampleStack.push(41);
    exampleStack.push(86);
    exampleStack.push(34);

    exampleStack.clear();
    expect(exampleStack.length).toBe(0);
    expect(exampleStack.peek()).toBe("The stack is empty");

});
