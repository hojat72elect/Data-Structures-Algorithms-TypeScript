const globalFunction = () => {
    console.log("I am a global function.");
    return this;
}
describe('Playing with JS Objects', () => {

    test('this test uses a JS object to represent a 3d point in the world', () => {

        const sut = {x: 0, y: 0, z: 0,};
        expect(sut.x).toBe(0)
        expect(sut.y).toBe(0)
        expect(sut.z).toBe(0)

        sut.x += 12;
        sut.y += 32;
        sut.z += 89;

        expect(sut.x).toBe(12);
        expect(sut.y).toBe(32);
        expect(sut.z).toBe(89);

        // sut.name = "Hojat";
        // expect(sut.name).toBe("Hojat");

        expect(typeof sut).toBe("object");
    })

    test('an object with numbers as keys', () => {

        const sut = {1: "Hojat", 2: "Hesam", 3: "Hamed", 4: "Melissa"};
        sut[5] = "Farzaneh";
        expect(sut[1]).toBe("Hojat");
        expect(sut[5]).toBe("Farzaneh");

        sut[5] = "My new GF";
        expect(sut[5]).toBe("My new GF");
        delete sut[5];
        expect(sut[5]).toBe(undefined);

        let stringRepresentation = "";
        for (let item in sut) {
            stringRepresentation += sut[item];
        }
        expect(stringRepresentation).toBe("HojatHesamHamedMelissa");


    })

    test('Property operations on Object', () => {

        const sut = {1: "Hojat", 2: "Hesam", 3: "Hamed", 4: "Melissa", 5: "Farzaneh"};

        expect(Object.keys(sut)).toStrictEqual(["1", "2", "3", "4", "5"]);
        expect(Object.values(sut)).toStrictEqual(['Hojat', 'Hesam', 'Hamed', 'Melissa', 'Farzaneh']);

        expect(Object.entries(sut)).toStrictEqual([['1', 'Hojat'], ['2', 'Hesam'], ['3', 'Hamed'], ['4', 'Melissa'], ['5', 'Farzaneh']]);

    })

    test('serializing and deserializing objects', () => {

        // people and their ages
        const sut = {"Hojat": 28, "Hesam": 21, "Hamed": 34};

        const serializedObject = JSON.stringify(sut)

        expect(serializedObject).toBe("{\"Hojat\":28,\"Hesam\":21,\"Hamed\":34}");

        const deserializedResult = JSON.parse(serializedObject)

        expect(deserializedResult).toStrictEqual(sut);
    })

    test('Converting a JS object to number', () => {

        const color = {
            Red: 56,
            Green: 23,
            Blue: 67,
            valueOf: function () {
                return this.Red + this.Green + this.Blue;
            }
        };

        expect(Number(color)).toBe(146);

        color.Red = 30;
        color.Green = 10;
        color.Blue = 40;

        expect(Number(color)).toBe(80);
        // expect(color > 60).toBe(true);
        // expect(color < 40).toBe(false);

    })

    test('Opening JS objects to be added into another object', () => {

        const color = {
            Red: 56,
            Green: 23,
            Blue: 67
        };
        const position = {x: 2, y: 4};
        const item = {...position, ...color};

        expect(Object.keys(item).length).toBe(5);
        expect(item.x).toBe(2);
        expect(item.y).toBe(4);
        expect(item.Red).toBe(56);
        expect(item.Green).toBe(23);
        expect(item.Blue).toBe(67);

    })

    test('Uses a JS object to represent a real world book', () => {

        const book = {
            title: "1984",
            author: "George Orwell",
            isAvailableAtLibrary: false,
            /**
             * The book will be returned to the library
             */
            checkIn: function () {
                this.isAvailableAtLibrary = true;
            },
            /**
             * The book will be checked out of the library (we imagine that the
             * library has only one copy of this book).
             */
            checkOut: function () {
                this.isAvailableAtLibrary = false;
            }
        };

        expect(typeof book).toBe('object');
        expect(book.isAvailableAtLibrary).toBe(false);
        expect(book["isAvailableAtLibrary"]).toBe(false);
        book.checkIn();
        expect(book["isAvailableAtLibrary"]).toBe(true);
        book.checkOut();
        expect(book["isAvailableAtLibrary"]).toBe(false);

        expect(book["title"]).toBe("1984");
        expect(book["author"]).toBe("George Orwell");
    })

    test('Creating a JS object out of another object', () => {

        const initialObject = {
            title: "1984",
            author: "George Orwell",
            isAvailableAtLibrary: false
        };
        const finalObject = new Object(initialObject);

        expect(finalObject.title).toBe("1984");
        expect(finalObject.author).toBe("George Orwell");

    })

    test('the keyword "this" for various functions ', () => {

        const myObject = {
            functionInObject: function () {
                console.log("I am a function that exists inside an object.");
                return this
            },
        };

        const functionInsideTest = () => {
            console.log("I am a function inside a test body");
            return this;
        };

        expect(typeof myObject.functionInObject()).toBe("object");
        expect(functionInsideTest()).toBe(undefined);
        expect(globalFunction()).toBe(undefined);

    })

});


