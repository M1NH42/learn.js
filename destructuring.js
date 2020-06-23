const recipe = {
  name: "red lentil dahl",
  timeInMinutes: 30,
  ingredients: ["red lentils", "cumin", "turmeric"],
};

// destructuring
const { name: myName, ingredients: myIngredients } = recipe;

console.log(recipe, myName, myIngredients);

// destrcuturing also works with arrays
const spices = ["cardamm", "turmeric", "cumin"];
const [first, second] = spices;
console.log(first, second);
