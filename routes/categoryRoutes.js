const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controllers/categoryController");

categoryRouter.get("/api/category", categoryController.getAllCategories);
categoryRouter.post("/api/category", categoryController.createCategory);
categoryRouter.patch("/api/category/:id", categoryController.editCategory);
categoryRouter.delete("/api/category/:id", categoryController.deleteCategory);

module.exports = categoryRouter;
