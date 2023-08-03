import {getTag} from "../../../src/lodash/internal/GetTag";

class House {
    constructor() {

    }
}

describe('Improved toString() with the ability to work on null as well', () => {

    test('GetTag normal behavior', () => {

        expect(getTag(12)).toBe("[object Number]");
        expect(getTag("name")).toBe("[object String]");
        expect(getTag(true)).toBe("[object Boolean]");
        expect(getTag(null)).toBe("[object Null]");
        expect(getTag(undefined)).toBe("[object Undefined]");
        expect(getTag([2, 7, 6, 3, 4, 5])).toBe("[object Array]");


    })

    test('Our getTag() currently can\'t distinguish between a class instance and normal JS object.', () => {

        expect(getTag({name: 'hello', age: 30})).toBe("[object Object]");
        expect(getTag(new House())).toBe("[object Object]");
    })

});
