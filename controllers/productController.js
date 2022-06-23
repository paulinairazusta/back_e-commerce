const Product = require("../models/productModel");
const Category = require("../models/categoryModel");

const productController = {
  getAllProducts: async (req, res) => {
    const products = await Product.find().populate("category");

    res.send(products);
  },
  getProductById: async (req, res) => {
    const product = await Product.findById(req.params.id).populate("category");

    res.send(product);
  },
};

module.exports = productController;
