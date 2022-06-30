const Admin = require("../models/adminModel.js");
const jwt = require("jsonwebtoken");

const adminController = {
  register: async (req, res) => {
    const user = await Admin.findOne({ email: req.body.email });
    if (!user) {
      await User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
      });
      res.send("Usuario registrado!");
    } else {
      res.send("Este usuario ya existe!");
    }
  },
  login: async (req, res) => {
    try {
      console.log(req.body.email.email, req.body.password.password);
      const admin = await Admin.findOne({ email: req.body.email.email });
      console.log(admin);
      const result = await admin.comparePass(req.body.password.password);
      console.log(result);

      if (admin && result && admin.isAdmin) {
        const adminEmail = admin.email;
        jwt.sign(adminEmail, process.env.SECRET, (err, token) => {
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

module.exports = adminController;
