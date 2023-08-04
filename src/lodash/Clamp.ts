/**
 * Clamps the "inputNumber" within the inclusive
 * "lowerBound" and "upperBound" bounds; and returns
 * the clamped result.
 */
export function clamp(
    inputNumber: number,
    lowerBound: number,
    upperBound: number
): number {
    if (inputNumber >= upperBound) {
        return upperBound;
    } else if (inputNumber <= lowerBound) {
        return lowerBound;
    } else {
        return inputNumber;
    }
}
