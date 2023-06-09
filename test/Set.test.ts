describe('Normal behavior of a Set', () => {

    test('Set can only hold distinct elements', () => {

        // todo: Jest doesn't allow me to define a generic type for me Set in here.
        const sut = new Set();
        expect(sut.size).toBe(0);

        const hojat = {"Hojat": 29}
        const katie = {"Katie": 20};

        sut.add(hojat);
        sut.add(katie);
        expect(sut.size).toBe(2);

        sut.add(katie);
        expect(sut.size).toBe(2);

        sut.delete(hojat);
        expect(sut.has(hojat)).toBe(false)
    })

    test('Iterating through a Set of objects', () => {

        // todo: Jest doesn't allow me to define a generic type for me Set in here.
        const sut = new Set();

        sut.add({name: "Hojat", age: 29});
        sut.add({name: "Katie", age: 20});
        sut.add({name: "Hesam", age: 20});
        sut.add({name: "Hamed", age: 34});
        sut.add({name: "Zhe", age: 32});
        sut.add({name: "Dad", age: 67});
        sut.add({name: "Mom", age: 53});

        let stringRepresentation = ""
        sut.forEach((person) => {
            // @ts-ignore
            stringRepresentation += `${person.name} is ${person.age} years old--`;
        })

        expect(stringRepresentation).toStrictEqual("Hojat is 29 years old--Katie is 20 years old--Hesam is 20 years old--Hamed is 34 years old--Zhe is 32 years old--Dad is 67 years old--Mom is 53 years old--")
    })

});