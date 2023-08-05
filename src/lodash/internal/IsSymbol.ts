import {getTag} from "./GetTag";

/**
 * If the input value is a Symbol, will return true; otherwise returns false.
 */
export function isSymbol(value: any): boolean {
    const inputType = typeof value;
    return inputType == 'symbol' ||
        (inputType === 'object' && value != null && getTag(value) == '[object Symbol]');
}
