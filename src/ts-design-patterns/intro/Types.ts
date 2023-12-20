/**
 * Type is pretty much like interface; but it's just more flexible.
 */
type A = 'A'; // type is 'A'
type B = 'B'; // type is 'B'


// Type of C is 'never' because there's nothing
// in common between A and B.
type C = A & B;

type D = C | "E"; // type is 'E'

type E = {
    name: string;
}

/**
 * type F will have 'age' of type number; and also 'name'
 * of type string.
 */
type F = E & {
    age: number;
}

/**
 * An example of type "F".
 */
const example: F = {
    age: 30,
    name: "Hojat"
}
