const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productController");
const jwt = require("jsonwebtoken");
const { expressjwt: checkJwt } = require("express-jwt");

// productRouter.get("/pruebita", (req, res) => {
//   const adminToken = jwt.sign(
//     process.env.CONTENIDO_ADMIN_TOKEN,
//     process.env.API_SECRET
//   );
//   res.send(adminToken);
// });

productRouter.get("/api/products", productController.getAllProducts);
productRouter.get("/api/product/:slug", productController.getProductBySlug);
productRouter.patch("/api/product", productController.productSold);

// productRouter.use(
//   checkJwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
// );

productRouter.post(
  "/api/product",
  checkJwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  productController.createProduct
);
productRouter.delete(
  "/api/product/:id",
  checkJwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  productController.productAvailable
);

module.exports = productRouter;
