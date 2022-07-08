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
	deleteCategory: async (req, res) => {
		try {
			await Category.findOneAndDelete({ _id: req.params.id });
			res.send("Delete succesfull");
		} catch (error) {
			res.send(error);
		}
	},
	editCategory: async (req, res) => {
		try {
			await Category.findByIdAndUpdate(
				{ _id: req.params.id },
				{ name: req.body.name }
			);
			res.send("Category updated");
		} catch (error) {
			res.send(error);
		}
	},
};

module.exports = categoryController;
