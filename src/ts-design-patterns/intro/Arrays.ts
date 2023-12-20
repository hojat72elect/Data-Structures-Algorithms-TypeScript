/*
* Arrays in TS.
*
* Array represents a collection of items of the same type; and it can have a variable size.
* */

const testArray = [2, 8, 3]; // an array of numbers of any size.
console.log(testArray);

testArray.push(12); // mutates the original array
console.log(testArray);

testArray.unshift(9);
console.log(testArray);

testArray.pop();
console.log(testArray);

testArray.shift();
console.log(testArray);

testArray.map((value, index) => {
    if (value === 3) {
        testArray[index] = 6;
    }
});
console.log(testArray);

testArray.reverse();
console.log(testArray);

console.log(testArray.includes(2));
console.log(testArray.includes(10));

console.log(testArray[0]);
console.log(testArray.at(2));

const newTestArray = testArray.slice(0, 1);
console.log(newTestArray);
