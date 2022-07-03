const express = require("express");
const orderRouter = express.Router();
const orderController = require("../controllers/orderController");

orderRouter.get("/api/orders", orderController.getOrders);
orderRouter.post("/create/order", orderController.createOrder);

module.exports = orderRouter;
