const User = require("../models/userModel");

const userController = {
  getAllUsers: async (req, res) => {
    const users = await User.find();
    res.send(users);
  },
};

module.exports = userController;
