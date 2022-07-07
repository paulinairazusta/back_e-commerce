const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controllers/categoryController");

categoryRouter.get("/api/category", categoryController.getAllCategories);
categoryRouter.post("/api/category", categoryController.createCategory);

module.exports = categoryRouter;
