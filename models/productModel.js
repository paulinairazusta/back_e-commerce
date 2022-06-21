const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  stock: Number,
  destacado: Boolean,
  slug: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});

module.exports = mongoose.model("Product", Product);
