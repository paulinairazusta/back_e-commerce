const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Category = Schema({
  name: String,
});

module.exports = mongoose.model("Category", Category);
