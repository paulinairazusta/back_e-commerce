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
  createCategory: async (req, res) => {
    const category = await Category.findOne({ name: req.body.name });

    if (!category) {
      await Category.create({
        name: req.body.name,
      });
      res.send("Category created");
    } else {
      res.send("This category does already exist");
    }
  },
};

module.exports = categoryController;
