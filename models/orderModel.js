const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Order = Schema({
  products: [],
  state: String,
  buyer: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("Order", Order);
