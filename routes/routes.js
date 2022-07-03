const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const userController = require("../controllers/userController");
const categoryController = require("../controllers/categoryController");
const adminController = require("../controllers/adminController");
const orderController = require("../controllers/orderController");
//importamos lo necesario para usar el middleware de jwt
const jwt = require("jsonwebtoken");
const { expressjwt: checkJwt } = require("express-jwt");

// Product routes

router.get("/api/products", productController.getAllProducts);
router.get("/api/product/:slug", productController.getProductBySlug);

router.post("/api/product", productController.createProduct);

router.patch("/api/product", productController.productSold);

router.delete("/api/product/:id", productController.productAvailable);

// User routes

router.get("/api/users", userController.getAllUsers);
router.get("/api/user/:slug", userController.getUserBySlug);
router.post("/api/user", userController.register);
router.post("/api/login", userController.login);

// Category routes

router.get("/api/categories", categoryController.getAllCategories);
router.post("/create/category", categoryController.createCategory);

// Admin routes

router.get("/api/admins", adminController.getAllAdmins);

router.post("/admin/register", adminController.register);
router.post("/admin/login", adminController.login);

// Order routes
router.get("/api/orders", orderController.getOrders);
router.post("/create/order", orderController.createOrder);

//ruta de prueba para el middleware JWT
// router.use(checkJwt({ secret: process.env.SECRET, algorithms: ["HS256"] }));
router.get(
  "/prueba",
  checkJwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  (req, res) => {
    res.send(req.user);
  }
);
module.exports = router;
