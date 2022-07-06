const express = require("express");
const orderRouter = express.Router();
const orderController = require("../controllers/orderController");

orderRouter.use(
  checkJwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
);

orderRouter.get("/api/orders", orderController.getOrders);
orderRouter.post("/create/order", orderController.createOrder);

module.exports = orderRouter;
