/*
* Tuples in TS.
*
* Tuple is a collection of fixed size, and its elements have
* their own specific defined types.
* */

// define a tuple with one element of type number:
const testTuple: [number] = [27];

// define a tuple of 3 elements of various types:
const secondTestTuple: [boolean, number, string] = [false, 23, "Hello tuples"];
console.log(secondTestTuple.at(2));
console.log(secondTestTuple[0]);
