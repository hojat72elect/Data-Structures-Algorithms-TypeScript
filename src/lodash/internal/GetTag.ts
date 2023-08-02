/**
 * Most important advantage of this function over "typeof" is that
 * it can be applied to all the possible values and will print out
 * an understandable string for us. But "typeof" cannot recognize null.
 *
 * @param value {any} => input of type any|null|undefined
 * @returns {string} the toStringTag of that value.
 */
export function getTag(value: any): string {

    return Object.prototype.toString.call(value);
}
