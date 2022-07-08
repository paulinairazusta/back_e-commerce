const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");
const { expressjwt: checkJwt } = require("express-jwt");

userRouter.post("/api/user", userController.register);
userRouter.post("/api/login", userController.login);
userRouter.get("/api/user/:id", userController.getUserById);

userRouter.get(
  "/api/users",
  checkJwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  userController.getAllUsers
);
userRouter.delete(
  "/api/user/:id",
  checkJwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),
  userController.deleteUser
);
/*ESTA RUTA SE CARGA CUANDO EL USUARIO ESTA LOGUEADO Y ENTRA A SU PERFIL,
SI NO TIENE TOKEN NO PUEDE INGRESAR, SOLO ES PARA PROBAR LA INFO YA ESTA EN LA STORE*/

module.exports = userRouter;
