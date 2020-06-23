// We will be implementing arrow functions and this functions
// console.log(breed);
// const breed = "Cocker Spaniel";

const p = {
  name: "d",
  age: 23,
};

Object.freeze(p);
p.age = 24;
console.log(p);
