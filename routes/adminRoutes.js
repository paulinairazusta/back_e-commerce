const express = require("express");
const adminRouter = express.Router();
const adminController = require("../controllers/adminController");
const { expressjwt: checkJwt } = require("express-jwt");

adminRouter.post("/admin/login", adminController.login);

adminRouter.use(
  checkJwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
);

adminRouter.get("/api/admins", adminController.getAllAdmins);

adminRouter.post("/admin/register", adminController.register);

module.exports = adminRouter;
