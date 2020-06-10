/* In this program we'll implement arrays in javscript */
// array in js stores different elements of different data types
var myList = ["Minhaz", 22, "Male", "minhaz.nith@gmail.com"];

myList[3] = "minhazalam365@gmail.com"; // can be modified unlike srings

// manipulate arrays with .push() and .pop()
myList.push(["Archit", 50]);

// pop() removes elemnt present at the last index
// and saves it the variable someList
var someList = myList.pop();

// console.log(myList);
// console.log(someList);

/* Manipulate using shift() => remove element from the front */
var anotherList = ["AJ", 1, ["BK", 12, 45]];
var removeFromFront = anotherList.shift(); // removes AJ

// print anotherList
console.log(anotherList);

// unshift() adds element to the front of the list
var addAtFront = anotherList.unshift(["Aalm", 22]);

console.log(addAtFront);

console.log(removeFromFront);

// console.log(addAtFront);
