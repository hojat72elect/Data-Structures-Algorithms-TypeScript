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
})

test("Popping an empty Stack should throw an error", () => {

    const exampleStack = new Stack();
    exampleStack.push("h");
    exampleStack.push("m");
    exampleStack.push("o");


})


