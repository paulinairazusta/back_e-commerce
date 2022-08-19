const express = require("express");
const orderRouter = express.Router();
const orderController = require("../controllers/orderController");
const { expressjwt: checkJwt } = require("express-jwt");

orderRouter.post("/create/order", orderController.createOrder);

// orderRouter.use(
//   checkJwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
// );

orderRouter.get(
  "/api/orders",

  orderController.getOrders
);

module.exports = orderRouter;
