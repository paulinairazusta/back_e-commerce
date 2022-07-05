const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productController");
const jwt = require("jsonwebtoken");
const { expressjwt: checkJwt } = require("express-jwt");

productRouter.get("/pruebita", (req, res) => {
  const adminToken = jwt.sign(
    process.env.CONTENIDO_ADMIN_TOKEN,
    process.env.API_SECRET
  );
  res.send(adminToken);
});

productRouter.get("/api/products", productController.getAllProducts);
productRouter.get("/api/product/:slug", productController.getProductBySlug);

productRouter.post("/api/product", productController.createProduct);

productRouter.patch("/api/product", productController.productSold);

productRouter.delete("/api/product/:id", productController.productAvailable);

module.exports = productRouter;
