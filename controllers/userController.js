const User = require("../models/userModel");

const userController = {
  getAllUsers: async (req, res) => {
    const users = await User.find();
    res.send(users);
  },
  getUserById: async (req, res) => {
    const user = await User.findById(req.params.id);

    res.send(user);
  },
};

module.exports = userController;
