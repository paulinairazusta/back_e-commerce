const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");

userRouter.get("/api/users", userController.getAllUsers);
/*ESTA RUTA SE CARGA CUANDO EL USUARIO ESTA LOGUEADO Y ENTRA A SU PERFIL,
SI NO TIENE TOKEN NO PUEDE INGRESAR, SOLO ES PARA PROBAR LA INFO YA ESTA EN LA STORE*/
userRouter.get(
  "/api/user/:id",

  userController.getUserById
);
userRouter.post("/api/user", userController.register);
userRouter.post("/api/login", userController.login);

module.exports = userRouter;

// De esta manera generamos el ADMIN_TOKEN. Una vez generado, lo podemos dejar comentado:
// jwt.sign(process.env.CONTENIDO_ADMIN_TOKEN, process.env.API_SECRET);
//Lo obtuvimos haciendo un res.send del admin_token en una ruta de prueba (que están el productRoutes)
