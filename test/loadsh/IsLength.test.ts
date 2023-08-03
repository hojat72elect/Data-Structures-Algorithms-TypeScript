import {getTag} from "../../src/lodash/internal/GetTag";
import {isLength} from "../../src/lodash/IsLength";
import {MAX_SAFE_INTEGER} from "../../src/lodash/internal/Constants";

describe('isLength', () => {

    test('should return true for normal lengths', () => {

        expect(isLength(0)).toBe(true);
        expect(isLength(3)).toBe(true);
        expect(isLength(MAX_SAFE_INTEGER)).toBe(true);

    })

    test('should return false for non-length numbers', () => {

        expect(isLength(-1)).toBe(false);
        expect(isLength(1.1)).toBe(false);
        expect(isLength(MAX_SAFE_INTEGER + 1)).toBe(false);

    })

});
