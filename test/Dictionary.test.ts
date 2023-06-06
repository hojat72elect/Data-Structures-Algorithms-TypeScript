import {Dictionary} from "../src/Dictionary";

test("Normal behavior of Dictionary", () => {

    const sut = new Dictionary();
    expect(sut.count()).toBe(0);
    sut.add("Hojat", 29);
    expect(sut.count()).toBe(1);
    sut.add("Farzaneh", 28);
    expect(sut.count()).toBe(2);
    sut.add("Hesam", 21);
    expect(sut.count()).toBe(3);

    expect(sut.showAll()).toBe("* Farzaneh -> 28 ** Hesam -> 21 ** Hojat -> 29 *");
    expect(sut.find("Hojat")).toBe(29);

    sut.remove("Farzaneh");
    expect(sut.count()).toBe(2);
    expect(sut.showAll()).toBe("* Hesam -> 21 ** Hojat -> 29 *");

    sut.clear();
    expect(sut.count()).toBe(0);

});