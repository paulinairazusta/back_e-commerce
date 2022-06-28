const User = require("../models/userModel");
//libreria para generar el token una vez logueado correctamente
const jwt = require("jsonwebtoken");

const userController = {
  register: async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      await User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        tel: req.body.tel,
        orderList: [],
      });
      res.send("usuario registrado!");
    } else {
      res.send("Este usuario ya existe!");
    }
  },
  getAllUsers: async (req, res) => {
    const users = await User.find();
    res.send(users);
  },
  getUserBySlug: async (req, res) => {
    const user = await User.findOne({ slug: req.params.slug });

    res.send(user);
  },

  login: async (req, res) => {
    //busco si el usuario existe en la base de datos y comparo las contraseñas
    try {
      const user = await User.findOne({ email: req.body.email });
      const result = await user.comparePass(req.body.password);
      if (user && result) {
        const userEmail = user.email;
        jwt.sign(userEmail, process.env.SECRET, (err, token) => {
          res.json({ accesToken: token });
        });
      } else {
        res.json({ mensaje: "Credenciales incorrectas" });
      }
    } catch (error) {
      res.json({ mensaje: "Credenciales incorrectas" });
    }
  },
};

module.exports = userController;
