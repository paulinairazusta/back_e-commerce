const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productController");

productRouter.get("/api/products", productController.getAllProducts);
productRouter.get("/api/product/:slug", productController.getProductBySlug);

productRouter.post("/api/product", productController.createProduct);

productRouter.patch("/api/product", productController.productSold);

productRouter.delete("/api/product/:id", productController.productAvailable);

module.exports = productRouter;
