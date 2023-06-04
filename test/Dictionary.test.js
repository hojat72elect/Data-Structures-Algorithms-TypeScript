const Dictionary = require('../src/Dictionary');

test("Normal behavior of Dictionary", () => {

    const sut = new Dictionary();
    sut.add("Hojat", 29);
    sut.add("Farzaneh", 28);
    sut.add("Hesam", 21);

    expect(sut.showAll()).toBe("* Hojat -> 29 ** Farzaneh -> 28 ** Hesam -> 21 *");
    expect(sut.find("Hojat")).toBe(29);

    sut.remove("Farzaneh");
    expect(sut.showAll()).toBe("* Hojat -> 29 ** Hesam -> 21 *");
});