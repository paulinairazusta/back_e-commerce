const Order = require("../models/orderModel");

const orderController = {
  createOrder: async (req, res) => {
    await Order.create({
      productsName: req.body.productsName,
      productsQuantity: req.body.productsQuantity,
      state: "Pago pendiente",
      buyer: [],
    });
    res.send("Order created");
  },
};

module.exports = orderController;
