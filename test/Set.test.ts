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

        sut.add({"Hojat": 29});
        sut.add({"Katie": 20});
        sut.add({"Hesam": 20});
        sut.add({"Hamed": 34});
        sut.add({"Zhe": 32});
        sut.add({"Dad": 67});
        sut.add({"Mom": 53});

        // sut.forEach((person)=>{
        //
        // })
    })

});