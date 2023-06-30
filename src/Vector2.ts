/**
 * A 2D vector implemented in TypeScript. This is the exact vector we had in 2D
 * Cartesian coordinate system.
 */

export class Vector2 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     * The vector will be pointing to the origin of the system (0, 0).
     */
    reset() {
        this.x = 0;
        this.y = 0;
    }

    /**
     * Making a separate copy of our vector which points to the exact same
     * coordinates.
     */
    copy() {
        return new Vector2(this.x, this.y);
    }

    negate() {
        this.x *= -1;
        this.y *= -1;
    }

    /**
     * Checks if 2 vectors are pointing to the exact same coordinates.
     */
    equals(vector: Vector2) {
        return this.x === vector.x && this.y === vector.y;
    }

    /**
     * Addition of 2 vectors.
     */
    add(vector: Vector2) {
        return new Vector2(this.x + vector.x, this.y + vector.y);
    }

    subtract(vector: Vector2) {
        return new Vector2(this.x - vector.x, this.y - vector.y);
    }

    multiply(vector: Vector2) {
        return new Vector2(this.x * vector.x, this.y * vector.y);
    }

    divide(vector: Vector2) {
        return new Vector2(this.x / vector.x, this.y / vector.y);
    }

    /**
     * The vector will be scaled by a given factor.
     */
    scale(value: number) {
        this.x *= value;
        this.y *= value;
    }

    /**
     * Length of the vector, which is in terms of numbers and scalars; not metric.
     */
    length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /**
     * After a vector is being normalized via this function, its length will be 1.
     */
    normalize() {
        const length = this.length();
        this.x /= length;
        this.y /= length;
    }
}