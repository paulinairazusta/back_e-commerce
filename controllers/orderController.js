const Order = require("../models/orderModel");

const orderController = {
  createOrder: async (req, res) => {
    await Order.create({
      products: req.body.products,
      status: "Pago pendiente",
      buyer: [],
      date: new Date(),
      totalPrice: req.body.totalPrice,
    });
    res.send("Order created");
  },
  getOrders: async (req, res) => {
    const orders = await Order.find();
    res.send(orders);
  },
};

module.exports = orderController;
