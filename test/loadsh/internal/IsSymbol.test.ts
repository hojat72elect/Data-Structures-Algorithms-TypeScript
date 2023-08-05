import {isSymbol} from "../../../src/lodash/internal/IsSymbol";

describe('IsSymbol', () => {

    test('should point out symbols', () => {
        expect(isSymbol(Symbol.iterator)).toBe(true);
        expect(isSymbol('abc')).toBe(false);
    });


});
