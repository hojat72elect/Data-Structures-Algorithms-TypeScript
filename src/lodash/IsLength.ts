import {MAX_SAFE_INTEGER} from "./internal/Constants";

/**
 * Accepts a value of type number and returns true if that number can be
 * the length of an Array (is a valid length).
 *
 */
export function isLength(value: number) {
    return value > -1 && value % 1 === 0 && value <= MAX_SAFE_INTEGER;
}
