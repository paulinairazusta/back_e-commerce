const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");
const { expressjwt: checkJwt } = require("express-jwt");

userRouter.post("/api/user", userController.register);
userRouter.post("/api/login", userController.login);

userRouter.use(checkJwt({ secret: process.env.SECRET, algorithms: ["HS256"] }));

userRouter.get("/api/users", userController.getAllUsers);
/*ESTA RUTA SE CARGA CUANDO EL USUARIO ESTA LOGUEADO Y ENTRA A SU PERFIL,
SI NO TIENE TOKEN NO PUEDE INGRESAR, SOLO ES PARA PROBAR LA INFO YA ESTA EN LA STORE*/
// userRouter.get(
//   "/api/user/:id",

//   userController.getUserById
// );

module.exports = userRouter;
