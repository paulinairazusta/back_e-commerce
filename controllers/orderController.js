const Order = require("../models/orderModel");

const orderController = {
  createOrder: async (req, res) => {
    await Order.create({
      productsNames: req.body.productsName,
      productsQuantity: req.body.productsQuantity,
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
