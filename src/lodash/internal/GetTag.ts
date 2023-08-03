/**
 * Most important advantage of this function over "typeof" is that
 * it can be applied to all the possible values and will print out
 * an understandable string for us. But "typeof" cannot recognize null.
 *
 * This function correctly works on instances of type number,
 * string, boolean, null, undefined, and Array; and can print
 * out distinguished outputs for all of them.
 *
 * But it cannot distinguish between a class instance and normal
 * JS object.
 *
 *
 * @param value {any} => input of type any|null|undefined
 * @returns {string} the correct tag of that value.
 */
export function getTag(value: any): string {

    return Object.prototype.toString.call(value);
}
