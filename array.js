/* In this program we'll implement arrays in javscript */
// array in js stores different elements of different data types
var myList = ["Minhaz", 22, "Male", "minhaz.nith@gmail.com"];

myList[3] = "minhazalam365@gmail.com"; // can be modified unlike srings

// manipulate arrays with .push() and .pop()
myList.push(["Archit", 50]);

// pop() removes elemnt present at the last index
// and saves it the variable someList
var someList = myList.pop();

console.log(myList);
console.log(someList);
