const Product = require("../models/productModel");
const slugify = require("slugify");

const productController = {
  getAllProducts: async (req, res) => {
    const products = await Product.find().populate("category");

    res.send(products);
  },
  getProductBySlug: async (req, res) => {
    const product = await Product.findOne({ slug: req.params.slug }).populate(
      "category"
    );
    res.send(product);
  },
  createProduct: async (req, res) => {
    await Product.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
      destacado: req.body.destacado,
      slug: slugify(req.body.name, { lower: true }),
      category: req.body.category, //Hay que pasarle el id de la categoria!!
    });
    res.send("producto agregado!");
  },
  //Entra aca cuando se hace checkout en el carrito
  productSold: async (req, res) => {
    res.send("exitoo");
  },
  productAvailable: async (req, res) => {
    const mipro = await Product.updateOne(
      { _id: req.params._id },
      { available: !available }
    );
    console.log(mipro.available);
  },
};

module.exports = productController;
