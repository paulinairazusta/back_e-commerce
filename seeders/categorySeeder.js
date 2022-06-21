const Category = require("../models/categoryModel");
const categories = [
  {
    name: "Cakes",
  },
  {
    name: "Truffles",
  },
  {
    name: "Cups",
  },
  {
    name: "Tarts",
  },
];

module.exports = async () => {
  await Category.deleteMany({});
  await Category.insertMany(categories);
  console.log("Categories have been created");
};
