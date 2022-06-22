const Product = require("../models/productModel");
const Category = require("../models/categoryModel");

const productController = {
	getAllProducts: async (req, res) => {
		const products = await Product.find().populate("category");
		console.log(products);

		res.send(products);
	},
};

module.exports = productController;
