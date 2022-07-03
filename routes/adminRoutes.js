const express = require("express");
const adminRouter = express.Router();
const adminController = require("../controllers/adminController");

adminRouter.get("/api/admins", adminController.getAllAdmins);

adminRouter.post("/admin/register", adminController.register);
adminRouter.post("/admin/login", adminController.login);

module.exports = adminRouter;
