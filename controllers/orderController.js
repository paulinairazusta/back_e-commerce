const Order = require("../models/orderModel");
const User = require("../models/userModel");

const orderController = {
  createOrder: async (req, res) => {
    console.log(req.body);
    const newOrder = new Order({
      products: req.body.products,
      status: "Being prepared",
      date: new Date(),
      totalPrice: req.body.totalPrice,
      user: req.body.user._id,
    });

    await newOrder.save();
    await User.findByIdAndUpdate(req.body.user._id, {
      $push: { orderList: newOrder._id },
    });
    res.send("Order created");
  },
  getOrders: async (req, res) => {
    const orders = await Order.find().populate("user");
    res.send(orders);
  },
};

module.exports = orderController;
