const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  address: String,
  tel: Number,
  orderList: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

module.exports = mongoose.model("User", User);
