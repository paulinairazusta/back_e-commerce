const Order = require("../models/orderModel");

const orderController = {
  createOrder: async (req, res) => {
    await Order.create({
      products: req.body.products,
      state: "Pago pendiente",
      buyer: [],
    });
    res.send("Order created");
  },
  getOrders: async (req, res) => {
    const orders = await Order.find();
    res.send(orders);
  },
};

module.exports = orderController;
