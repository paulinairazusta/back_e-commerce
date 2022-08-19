const Order = require("../models/orderModel");
const User = require("../models/userModel");
const Product = require("../models/productModel");

const user = User.findOne();
const product = Product.findOne();

module.exports = async () => {
  await Order.deleteMany({});
  const order = new Order({
    products: [product],
    status: "Being prepared",
    date: new Date(),
    totalPrice: product.price,
    user: user._id,
  });
  order.save();
  console.log("Order has been created!");
};
