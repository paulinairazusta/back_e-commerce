const express = require("express");
const adminRouter = express.Router();
const adminController = require("../controllers/adminController");
const { expressjwt: checkJwt } = require("express-jwt");

adminRouter.post("/admin/login", adminController.login);

// adminRouter.use(
//   checkJwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
// );

adminRouter.get(
	"/api/admins",
	checkJwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
	adminController.getAllAdmins
);

adminRouter.post(
	"/admin/register",
	checkJwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
	adminController.register
);
adminRouter.delete("api/admins/:id", adminController.deleteAdmin);

module.exports = adminRouter;
