// In this module we will be covering the new es6 feature
// called arrow function
// less verbose
// lots of advantage over regular functions
const numbers = [1, 2, 3, 4, 5, 6];
const calculateDouble = (number) => number * 2;

let doubledNumbers = numbers.map(calculateDouble);

// console.log(doubledNumbers);

const isEven = (number) => number % 2 === 0;
const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers);
