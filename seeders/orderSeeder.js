const Order = require("../models/orderModel");
const User = require("../models/userModel");
const Product = require("../models/productModel");

const user = User.findOne({ firstname: "Juan" });

module.exports = async () => {
  await Order.deleteMany({});
  const order = new Order({
    products: [
      {
        name: "Coconut tart",
        quantity: 1,
        price: 100,
      },
    ],
    status: "Being prepared",
    date: new Date(),
    totalPrice: 100,
    user: user._id,
  });
  order.save();
  console.log("Order has been created!");
};
