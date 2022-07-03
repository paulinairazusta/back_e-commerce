const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controllers/categoryController");

categoryRouter.get("/api/categories", categoryController.getAllCategories);
categoryRouter.post("/create/category", categoryController.createCategory);

module.exports = categoryRouter;
