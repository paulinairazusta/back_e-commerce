const Order = require("../models/orderModel");
const User = require("../models/userModel");

const orderController = {
  createOrder: async (req, res) => {
    const newOrder = await Order.create({
      products: req.body.products,
      status: "En preparación",
      date: new Date(),
      totalPrice: req.body.totalPrice,
      user: req.body.user,
    });
    const user = await User.findById(req.body.user._id);
    user.orderList.push(newOrder);
    user.save();
    res.send("Order created");
  },
  getOrders: async (req, res) => {
    const orders = await Order.find();
    res.send(orders);
  },
};

module.exports = orderController;
