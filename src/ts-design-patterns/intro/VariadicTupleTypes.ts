/**
 * How to use types and tuples together.
 */
type Point2D = [number, number];
type Point3D = [number, number, number];

const firstPoint: Point2D = [1, 2];
const secondPoint: Point3D = [1, 2, 3];

console.log(firstPoint);
console.log(secondPoint);

/**
 * The type of 'NamedPoint2D' is a tuple of [string, number, number].
 *
 * If you ask me, trying to define a type in this way is an overkill and not usually necessary.
 */
type NamedType<T extends unknown[]> = [string, ...T];
type NamedPoint2D = NamedType<Point2D>;

const thirdPoint: NamedPoint2D = ["Point (1, 2)", 1, 2];
