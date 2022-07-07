const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Order = Schema({
  products: [],
  status: String,
  date: Date,
  totalPrice: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Order", Order);
