const User = require("../models/userModel");
//libreria para generar el token una vez logueado correctamente
const jwt = require("jsonwebtoken");
const dbInitialSetup = require("../models/db");

const userController = {
  register: async (req, res) => {
    const user = await User.findOne({ email: req.body.email.inputEmail });
    if (!user) {
      await User.create({
        firstname: req.body.firstname.inputName,
        lastname: req.body.lastname.inputLastName,
        email: req.body.email.inputEmail,
        password: req.body.password.inputPassword,
        address: req.body.address.inputAddress,
        tel: req.body.tel.inputPhone,
        orderList: [],
      });
      res.send("usuario registrado!");
    } else {
      res.send("Este usuario ya existe!");
    }
  },
  getAllUsers: async (req, res) => {
    const users = await User.find();
    console.log("goli", users);
    res.send(users);
  },
  getUserById: async (req, res) => {
    const user = await User.findOne({ _id: req.params.id }).populate(
      "orderList"
    );

    res.json(user);
  },

  login: async (req, res) => {
    //busco si el usuario existe en la base de datos y comparo las contraseñas
    try {
      const user = await User.findOne({
        email: req.body.email.inputEmail,
      }).populate("orderList");
      const result = await user.comparePass(req.body.password.inputPassword);

      if (user && result) {
        const userEmail = user.email;
        jwt.sign(userEmail, process.env.SECRET, (err, token) => {
          res.json({
            accesToken: token,
            user: {
              _id: user._id,
              firstname: user.firstname,
              lastname: user.lastname,
              email: user.email,
              address: user.address,
              phone: user.tel,
              orderList: user.orderList,
            },
          });
        });
      } else {
        res.json({ message: "Wrong credentials" });
      }
    } catch (error) {
      res.json({ message: "Wrong credentials" });
    }
  },
  deleteUser: async (req, res) => {
    await User.deleteOne({ _id: req.params.id });
  },
};

module.exports = userController;
