const Category = require("../models/categoryModel");

const categoryController = {
  getAllCategories: async (req, res) => {
    const categories = await Category.find();
    res.send(categories);
  },
  getCategoryById: async (req, res) => {
    const category = await Category.findById(req.params.id);
    res.send(category);
  },
};

module.exports = categoryController;
