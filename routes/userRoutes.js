const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");

userRouter.get("/api/users", userController.getAllUsers);
userRouter.get("/api/user/:slug", userController.getUserBySlug);
userRouter.post("/api/user", userController.register);
userRouter.post("/api/login", userController.login);

module.exports = userRouter;
