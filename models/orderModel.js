const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Order = Schema({
  products: [],
  status: String,
  buyer: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  date: Date,
  totalPrice: Number,
  user: {},
});

module.exports = mongoose.model("Order", Order);
