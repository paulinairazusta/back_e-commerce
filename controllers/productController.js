const Product = require("../models/productModel");
const Category = require("../models/categoryModel");

const productController = {
  getAllProducts: async (req, res) => {
    const products = await Product.find().populate("category");
    console.log(products);

    res.send(products);
  },
  getProductById: async (req, res) => {
    const product = await Product.findById(req.params.id);
    console.log(product);
    res.send(product);
  },
};

module.exports = productController;
