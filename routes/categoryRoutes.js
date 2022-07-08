const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controllers/categoryController");
const { expressjwt: checkJwt } = require("express-jwt");

categoryRouter.get("/api/category", categoryController.getAllCategories);
categoryRouter.post(
  "/api/category",
  checkJwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  categoryController.createCategory
);
categoryRouter.patch(
  "/api/category/:id",
  checkJwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  categoryController.editCategory
);
categoryRouter.delete(
  "/api/category/:id",
  checkJwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  categoryController.deleteCategory
);

module.exports = categoryRouter;
