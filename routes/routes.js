const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const userController = require("../controllers/userController");
const categoryController = require("../controllers/categoryController");
const adminController = require("../controllers/adminController");
//importamos lo necesario para usar el middleware de jwt
const jwt = require("jsonwebtoken");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/api/products", productController.getAllProducts);
router.get("/api/product/:slug", productController.getProductBySlug);

router.post("/api/product", productController.createProduct);

router.get("/api/cakes", productController.getCakes);
router.get("/api/truffles", productController.getTruffles);
router.get("/api/cups", productController.getCups);
router.get("/api/tarts", productController.getTarts);

router.get("/api/users", userController.getAllUsers);
router.get("/api/user/:slug", userController.getUserBySlug);
router.post("/api/user", userController.register);

router.post("/api/login", userController.login);

router.get("/api/categories", categoryController.getAllCategories);

router.post("/admin/register", adminController.register);
router.post("/admin/login", adminController.login);

// router.get("/api/category/:id", categoryController.getCategoryById);

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
