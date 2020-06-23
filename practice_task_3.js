const painter = {
  name: "Van Gogh",
  nationality: "Dutch",
  paintings: ["The starry night", "Irises", "Almond Blossom"],
};

Object.freeze(painter);
Object.freeze(painter.paintings);

painter.birthDate = "March 30 1853";
// painter.paintings.push("Something");

console.log(painter);
