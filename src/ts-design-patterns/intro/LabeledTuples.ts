/**
 * We can also define names for each of tuple elements;
 * thus making labeled tuples.
 */
type Point2DLabeled = [x: number, y: number];
type Point3DLabeled = [x: number, y: number, z: number];

const testPoint2DLabeled: Point2DLabeled = [12, 23];
const testPoint3DLabeled: Point3DLabeled = [27, 35, 58];

console.log(testPoint2DLabeled);
console.log(testPoint3DLabeled);
