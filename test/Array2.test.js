function square(num) {
    console.log(`${num}---${num * num}`);
}

function firstCharacter(inputString) {
    return inputString[0];
}

function mathematicalSquare(num) {
    return num * num;
}

function isEven(num) {
    return num % 2 === 0;
}

function calculateSumOfSquares(accumulator, currentValue) {
    return accumulator + (currentValue * currentValue);
}

function stringBuilder(accumulatedString, eachString) {
    return `${accumulatedString} ${eachString}`;
}

test("forEach applies a function to all the elements of an array and doesn't return anything", () => {
    const numbers = [7, 6, 3, 4];
    numbers.forEach(square)
})

test("every() applies a boolean function to an array of elements and returns a boolean value", () => {

    const evenNumbers = [2, 4, 6, 8, 10];
    const notEvenNumbers = [38, 9, 7, 4, 56]

    const allAreEven = evenNumbers.every(isEven);
    expect(allAreEven).toBe(true);

    const someAreOdd = notEvenNumbers.every(isEven);
    expect(someAreOdd).toBe(false);
})

test('Some() is pretty much like "every()" but returns true if at least one element satisfies the condition.', () => {

    const someEvenNumbers = [38, 9, 7, 4, 56];
    const allOddNumbers = [23, 7, 41, 65];

    const someAreEven = someEvenNumbers.some(isEven);
    expect(someAreEven).toBe(true);

    const noneAreEven = allOddNumbers.some(isEven);
    expect(noneAreEven).toBe(false);

})

test('reduce() applies a specific function to an array; and returns a single value. please pay attention to this test.', () => {

    const inputNumbers = [3, 4, 2, 1, 2];
    const sum = ([0].concat(inputNumbers)).reduce(calculateSumOfSquares)

    expect(sum).toBe(34);

})

test('reduce() can also be used for converting an array of strings into a single string', () => {

    const excerpts = ["Hello", "world!", "my", "name", "is", "Hojat."];
    const sentence = (excerpts).reduce(stringBuilder)

    expect(sentence).toBe("Hello world! my name is Hojat.");

})

test('map() is a lot better than forEach()', () => {

    const originalNumbers = [2, 7, 8, 6, 3, 4, 5];
    const newNumbers = (originalNumbers).map(mathematicalSquare);

    expect(newNumbers).toStrictEqual([4, 49, 64, 36, 9, 16, 25]);

})

test('map() being applied to a list of strings', () => {

    const originalNames = ["Hojat", "Hesam", "Farzane", "Manoosh"];
    const finalCharacters = (originalNames).map(firstCharacter);

    expect(finalCharacters).toStrictEqual(["H", "H", "F", "M"]);

})

test("filter() doesn't have side-effects; just returns the items that satisfy the boolean function", () => {

    const originalNumbers = [2, 9, 6, 7, 5, 4, 2, 9, 3, 4, 5];
    const allTheEvens = (originalNumbers).filter(isEven);

    expect(allTheEvens).toStrictEqual([2, 6, 4, 2, 4]);

})
