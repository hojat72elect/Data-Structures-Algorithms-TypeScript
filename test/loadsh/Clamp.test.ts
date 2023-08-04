import {clamp} from "../../src/lodash/Clamp";

describe('clamp', () => {

    test('should work on negative numbers', () => {

        expect(clamp(-10, -5, 5)).toBe(-5);
        expect(clamp(-10.2, -5.5, 5.5)).toBe(-5.5);
        expect(clamp(-Infinity, -5, 5)).toBe(-5);

    });

    test('should work on positive numbers', () => {

        expect(clamp(10, -5, 5)).toBe(5);
        expect(clamp(10.6, -5.6, 5.4)).toBe(5.4);
        expect(clamp(Infinity, -5, 5)).toBe(5);

    });

    test('should not change the negative numbers that are in range', () => {

        expect(clamp(-4, -5, 5)).toBe(-4);
        expect(clamp(-5, -5, 5)).toBe(-5);
        expect(clamp(-5.5, -5.6, 5.6)).toBe(-5.5);

    });

    test('should not change the positive numbers that are in range', () => {

        expect(clamp(4, -5, 5)).toBe(4);
        expect(clamp(5, -5, 5)).toBe(5);
        expect(clamp(4.5, -5.1, 5.2)).toBe(4.5);

    });

    test('should not change zero when it is in range', () => {

        expect(clamp(0, -5, 5)).toBe(0);
    });
});
