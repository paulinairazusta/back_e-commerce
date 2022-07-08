const Product = require("../models/productModel");
const slugify = require("slugify");
const formidable = require("formidable");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);
const path = require("path");
const fs = require("fs");

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
  createProduct: (req, res, next) => {
    const form = formidable({
      multiples: true,
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }
      const ext = path.extname(files.image.filepath);
      const newFileName = `image_${Date.now()}${ext}`;

      const { data, error } = await supabase.storage
        .from("images")
        .upload(newFileName, fs.createReadStream(files.image.filepath), {
          cacheControl: "3600",
          upsert: false,
          contentType: files.image.mimetype,
        });
      await Product.create({
        name: fields.name,
        description: fields.description,
        price: fields.price,
        stock: fields.stock,
        image: newFileName,
        featured: fields.featured,
        slug: slugify(fields.name, { lower: true }),
        category: fields.category, //Hay que pasarle el id de la categoria!!
      });
    });

    res.send("producto agregado!");
  },
  productEdit: (req, res) => {
    const form = formidable({
      multiples: true,
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }
      const ext = path.extname(files.image.filepath);
      const newFileName = `image_${Date.now()}${ext}`;

      const { data, error } = await supabase.storage
        .from("images")
        .upload(newFileName, fs.createReadStream(files.image.filepath), {
          cacheControl: "3600",
          upsert: false,
          contentType: files.image.mimetype,
        });

      await Product.updateOne(
        { _id: fields.id },
        {
          name: fields.name,
          description: fields.description,
          price: fields.price,
          image: newFileName,
          stock: fields.stock,
          featured: fields.featured,
          category: fields.category,
        }
      );
    });
    res.send("Product edited");
  },
  productSold: async (req, res) => {
    res.send("exitoo");
  },
  productAvailable: async (req, res) => {
    console.log(req.data);
    const mipro = await Product.findOne({ _id: req.body.productId });
    console.log("este es el producto", mipro);
    mipro.available = mipro.available.req.body.isAvailable;
    console.log("entro al update");
    console.log(mipro.available);
  },
};

module.exports = productController;
