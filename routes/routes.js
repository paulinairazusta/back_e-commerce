const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const userController = require("../controllers/userController");
const categoryController = require("../controllers/categoryController");

router.get("/api/products", productController.getAllProducts);
router.get("/api/product/:id", productController.getProductById);
router.post("/api/product", productController.createProduct);

router.get("/api/users", userController.getAllUsers);
router.get("/api/user/:id", userController.getUserById);
router.post("/api/user", userController.register);

router.post("/api/login", userController.login);

router.get("/api/categories", categoryController.getAllCategories);
router.get("/api/category/:id", categoryController.getCategoryById);

module.exports = router;
