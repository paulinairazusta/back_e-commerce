const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const userController = require("../controllers/userController");

router.get("/api/products", productController.getAllProducts);
router.get("/api/product/:id", productController.getProductById);

router.get("/api/users", userController.getAllUsers);
router.get("/api/user/:id", userController.getUserById);

module.exports = router;
